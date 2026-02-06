// EXPRESS SERVER WITH PUPPETEER ANALYSIS
// ============================================
// Professional tech stack detector

const express = require("express");
const cors = require("cors");
const path = require("path");
const isVercel = Boolean(process.env.VERCEL);
const puppeteer = isVercel ? require("puppeteer-core") : require("puppeteer");
const chromium = isVercel ? require("@sparticuz/chromium") : null;
const { analyzeTechnologies, CATEGORY_ORDER } = require("./analyzer");

const app = express();
const PORT = 5000;

/**
 * STRICT MODE: JavaScript Hard Validation
 * Validates Three.js, D3.js, and Stimulus with strict rules
 */
function validateJSLibrary(libName, html, scripts) {
  const scriptContent = scripts.join(" ");
  const allContent = `${html} ${scriptContent}`;
  
  switch (libName) {
    case "Three.js":
      // Must have window.THREE in window scope
      return /window\.THREE|THREE\s*=|THREE\s*{/.test(allContent);
    
    case "D3.js":
      // Must have window.d3 in window scope
      return /window\.d3|d3\s*=|d3\s*{/.test(allContent);
    
    case "Stimulus":
      // Must have stimulus.js file OR data-controller attribute
      return /stimulus\.js|stimulus\.min\.js|data-controller/.test(allContent);
    
    default:
      return true;
  }
}

// Middleware
app.use(cors());
app.use(express.json());

// Global browser instance (reused across requests)
let browser = null;

/**
 * Initialize Puppeteer browser
 */
async function initBrowser() {
  if (!browser) {
    if (isVercel) {
      const executablePath = await chromium.executablePath();
      if (executablePath) {
        const executableDir = path.dirname(executablePath);
        const libPath = path.join(executableDir, "lib");
        process.env.LD_LIBRARY_PATH = [
          process.env.LD_LIBRARY_PATH,
          executableDir,
          libPath,
        ].filter(Boolean).join(":");
      }

      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath,
        headless: chromium.headless,
      });
    } else {
      browser = await puppeteer.launch({
        headless: "new",
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
      });
    }
  }
  return browser;
}

/**
 * Validate URL format
 */
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Analyze website technology stack
 * Endpoint: POST /analyze
 * Body: { url: string }
 * Response: { technologies: [], stats: { total, categories } }
 */
app.post("/analyze", async (req, res) => {
  let page = null;
  try {
    const { url } = req.body;

    // Validate URL
    if (!url || !url.trim()) {
      return res.status(400).json({
        error: "URL is required",
        message: "Please provide a valid URL",
      });
    }

    let finalUrl = url.trim();
    if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
      finalUrl = "https://" + finalUrl;
    }

    if (!isValidUrl(finalUrl)) {
      return res.status(400).json({
        error: "Invalid URL format",
        message: "Please provide a valid URL (e.g., example.com or https://example.com)",
      });
    }

    console.log(`\n🔍 Analyzing: ${finalUrl}`);

    // Initialize Puppeteer with error handling
    let browserInstance;
    try {
      console.log("  → Initializing browser...");
      browserInstance = await initBrowser();
      console.log("  ✓ Browser initialized");
    } catch (browserError) {
      console.error("  ❌ Browser init failed:", browserError.message);
      console.error(browserError.stack);
      return res.status(503).json({
        error: "Browser initialization failed",
        message: "Unable to initialize the analysis engine",
      });
    }

    try {
      console.log("  → Creating new page...");
      page = await browserInstance.newPage();
      console.log("  ✓ Page created");
    } catch (pageError) {
      console.error("  ❌ Page creation failed:", pageError.message);
      console.error(pageError.stack);
      return res.status(503).json({
        error: "Page creation failed",
        message: "Unable to create analysis page",
      });
    }

    // Set 30-second timeout
    page.setDefaultNavigationTimeout(30000);
    page.setDefaultTimeout(30000);

    // Collect all responses to aggregate headers (CDN, set-cookie, etc.)
    const allResponses = [];
    page.on("response", (response) => {
      allResponses.push({
        url: response.url(),
        headers: response.headers(),
      });
    });

    try {
      console.log(`⏳ Loading page...`);
      // Navigate to URL
      const mainResponse = await page.goto(finalUrl, { waitUntil: "networkidle2" });
      console.log(`✅ Page loaded`);

      // Extract HTML content
      console.log(`📄 Extracting HTML...`);
      const html = await page.content();
      console.log(`✅ HTML extracted (${html.length} bytes)`);

      // Get all script sources
      console.log(`🔍 Extracting scripts...`);
      const scripts = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("script")).map(
          (script) => script.src || script.textContent
        );
      });
      console.log(`✅ Found ${scripts.length} scripts`);

      // Get all stylesheet sources
      const styles = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map(
          (style) => style.href || style.textContent
        );
      });

      // Get all meta tags
      const metaTags = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("meta")).map(
          (meta) => ({
            name: meta.getAttribute("name"),
            content: meta.getAttribute("content"),
          })
        );
      });

      // Consolidate headers (main response + all responses)
      const mainHeaders = mainResponse ? mainResponse.headers() : {};

      const mergedHeaders = allResponses.reduce((acc, resp) => {
        Object.entries(resp.headers || {}).forEach(([key, value]) => {
          const lower = key.toLowerCase();
          if (lower === "set-cookie") {
            const existing = acc[lower];
            if (existing) {
              acc[lower] = Array.isArray(existing)
                ? existing.concat(value)
                : [existing].concat(value);
            } else {
              acc[lower] = value;
            }
          } else if (!acc[lower]) {
            acc[lower] = value;
          }
        });
        return acc;
      }, { ...mainHeaders });

      // Cookies available to the page (includes HttpOnly set cookies)
      const cookies = await page.cookies();

      // Analyze technologies
      console.log(`🧬 Analyzing technologies...`);
      const analyzed = analyzeTechnologies({
        html,
        scripts,
        styles,
        headers: mergedHeaders,
        cookies,
        metaTags,
      });
      console.log(`✅ Analysis complete: ${analyzed.length} technologies`);

      // JavaScript hard validation for Three.js, D3.js, Stimulus
      // Verify against actual HTML content
      const validatedAnalyzed = analyzed.map((tech) => {
        if (tech.requiresHardValidation) {
          const hasValidation = validateJSLibrary(tech.name, html, scripts);
          if (!hasValidation) {
            console.log(`  ⚠️  Removed ${tech.name} - failed hard validation (no window object or required markers)`);
            return null; // Mark for filtering
          }
        }
        return tech;
      }).filter(t => t !== null);

      // Format results with strict output structure
      // Separate visible and hidden results
      const visibleTechs = [];
      const hiddenTechs = [];
      
      validatedAnalyzed.forEach((tech) => {
        const formatted = {
          name: tech.name,
          category: tech.category,
          icon: tech.icon,
          count: tech.count || 1,
          confidence: tech.confidence,
        };
        
        // Hidden by default: CRM tools with confidence <= 25%
        if (tech.hidden && tech.confidence <= 25) {
          formatted.hidden = true;
          hiddenTechs.push(formatted);
          console.log(`  🔒 Hidden: ${tech.name} (${tech.confidence}%, marketing tool)`);
        } else {
          visibleTechs.push(formatted);
        }
      });

      const formattedTechnologies = [...visibleTechs, ...hiddenTechs];

      // Group by category (visible only in default grouped view)
      const grouped = {};
      const groupedAll = {}; // Includes hidden
      
      formattedTechnologies.forEach((tech) => {
        // All technologies
        if (!groupedAll[tech.category]) {
          groupedAll[tech.category] = [];
        }
        groupedAll[tech.category].push(tech);
        
        // Only visible technologies (hidden excluded)
        if (!tech.hidden) {
          if (!grouped[tech.category]) {
            grouped[tech.category] = [];
          }
          grouped[tech.category].push(tech);
        }
      });

      // Ordered grouping for the UI (visible only)
      const groupedOrdered = [];
      CATEGORY_ORDER.forEach((cat) => {
        if (grouped[cat]) {
          groupedOrdered.push({ category: cat, items: grouped[cat] });
        }
      });
      Object.keys(grouped)
        .filter((cat) => !CATEGORY_ORDER.includes(cat))
        .sort()
        .forEach((cat) => {
          groupedOrdered.push({ category: cat, items: grouped[cat] });
        });

      // Also provide all results with hidden metadata
      const groupedOrderedAll = [];
      CATEGORY_ORDER.forEach((cat) => {
        if (groupedAll[cat]) {
          groupedOrderedAll.push({ category: cat, items: groupedAll[cat] });
        }
      });
      Object.keys(groupedAll)
        .filter((cat) => !CATEGORY_ORDER.includes(cat))
        .sort()
        .forEach((cat) => {
          groupedOrderedAll.push({ category: cat, items: groupedAll[cat] });
        });

      // Add disclaimer
      const disclaimer = "Detected technologies are inferred heuristically and may include legacy or indirect dependencies. Hidden items (confidence ≤25%) can be enabled in settings.";

      // Return results
      res.json({
        success: true,
        url: finalUrl,
        technologies: visibleTechs, // Only visible by default
        technologiesAll: formattedTechnologies, // All including hidden
        grouped,
        groupedOrdered,
        groupedAll,
        groupedOrderedAll,
        disclaimer: disclaimer,
        stats: {
          total: visibleTechs.length,
          totalAll: formattedTechnologies.length,
          hidden: hiddenTechs.length,
          categories: groupedOrdered.length,
        },
      });

      console.log(`✅ Analysis complete: Found ${analyzed.length} technologies\n`);
    } catch (error) {
      if (error.name === "TimeoutError") {
        console.error("  ❌ Timeout:", error.message);
        return res.status(408).json({
          error: "Analysis timeout",
          message: "The website took too long to load. Please try again.",
        });
      }

      console.error("  ❌ Analysis error:", error.message);
      console.error(error.stack);
      return res.status(503).json({
        error: "Unable to access website",
        message: error.message,
      });
    } finally {
      if (page) {
        try {
          await page.close();
        } catch (closeError) {
          console.error("  ⚠️ Error closing page:", closeError.message);
        }
      }
    }
  } catch (error) {
    console.error("❌ UNHANDLED Server error:", error.message);
    console.error(error.stack);
    res.status(500).json({
      error: "Server error",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
});

/**
 * Health check endpoint
 */
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

/**
 * Global error handlers
 */
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ UNHANDLED REJECTION:', reason);
  console.error('Promise:', promise);
  // Don't exit - try to continue
});

process.on('uncaughtException', (error) => {
  console.error('❌ UNCAUGHT EXCEPTION:', error);
  console.error(error.stack);
  // Try to continue instead of crashing
});

/**
 * Start server (standalone only)
 */
if (require.main === module) {
  app.listen(PORT, async () => {
    console.log(`\n🚀 Tech Stack Analyzer Server`);
    console.log(`📍 Listening on http://localhost:${PORT}`);
    console.log(`📝 POST /analyze - Analyze a website's technology stack`);
    console.log(`🏥 GET /health - Health check\n`);

    // Pre-initialize browser on startup
    await initBrowser();
    console.log("✅ Puppeteer browser initialized\n");
  });
}

/**
 * Graceful shutdown
 */
process.on("SIGINT", async () => {
  console.log("\n🛑 Shutting down...");
  if (browser) {
    await browser.close();
  }
  process.exit(0);
});

module.exports = app;
