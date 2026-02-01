// ============================================
// MAIN TECHNOLOGY ANALYZER WITH DEPLOYMENT BLOCKERS
// ============================================
// Unified detector with occurrence counting + strict validation rules

const signatures = require("./signatures");

// Category order mirrors the desired Wappalyzer-style grouping
const CATEGORY_ORDER = [
  "CMS",
  "Blogs",
  "Webmail",
  "Development",
  "Programming languages",
  "Databases",
  "CRM",
  "Web frameworks",
  "Web servers",
  "PaaS & Hosting",
  "JavaScript frameworks",
  "CSS Frameworks",
  "Security & Compliance",
  "Email",
  "CDN",
  "Analytics",
  "Monitoring & Performance",
  "Advertising",
  "Commerce & Payments"
];

function toRegex(source, forceGlobal = false) {
  if (source instanceof RegExp) {
    const flags = forceGlobal && !source.flags.includes("g")
      ? `${source.flags}g`
      : source.flags || (forceGlobal ? "g" : "");
    return new RegExp(source.source, flags);
  }
  return new RegExp(source, forceGlobal ? "gi" : "i");
}

function getConfidence(patternType, matchCount) {
  const typeWeights = {
    header: 0.95,
    cookie: 0.90,
    meta: 0.85,
    script: 0.75,
    style: 0.70,
    html: 0.65,
  };
  const baseWeight = typeWeights[patternType] || 0.50;
  const matchBoost = Math.min(matchCount * 0.03, 0.15);
  return Math.min(baseWeight + matchBoost, 1.0);
}

/**
 * CMS DETECTION PATCH - Isolated from backend framework
 * Runs independently to detect WordPress, Shopify, Drupal, Joomla, etc.
 * 
 * Rules:
 * 1. WordPress: /wp-content/, /wp-includes/, meta generator, /wp-json/
 * 2. Shopify: cdn.shopify.com, window.Shopify, /cart.js, /products.json
 * 3. Add scope: "partial" if CMS is on subpath
 * 4. Strict mode - no guessing, only explicit detection
 */
function detectCMS(data) {
  const { html = "", scripts = [] } = data;
  const detected = {};

  // WORDPRESS DETECTION
  const wpMarkers = [
    /\/wp-content\//i,
    /\/wp-includes\//i,
    /\/wp-json\//i,
    /<meta\s+name=["']generator["']\s+content=["']WordPress/i
  ];

  const hasWpMarker = wpMarkers.some(marker => marker.test(html));
  if (hasWpMarker) {
    detected["WordPress"] = {
      name: "WordPress",
      category: "CMS",
      confidence: 85,
      scope: html.includes('/blog/wp-content/') || html.includes('/wordpress/wp-content/') ? "partial" : "full"
    };
    console.log(`  ✓ WordPress detected (scope: ${detected["WordPress"].scope})`);
  }

  // SHOPIFY DETECTION
  const shopifyMarkers = [
    /cdn\.shopify\.com/i,
    /window\.Shopify/i,
    /\/cart\.js/i,
    /\/products\.json/i
  ];

  const hasShopifyMarker = shopifyMarkers.some(marker => marker.test(html) || scripts.some(s => marker.test(s)));
  if (hasShopifyMarker) {
    detected["Shopify"] = {
      name: "Shopify",
      category: "E-commerce",
      confidence: 90,
      scope: "full"
    };
    console.log('  ✓ Shopify detected');
  }

  // DRUPAL DETECTION
  if (/\/sites\/(default|all)\/files\//i.test(html) || /<meta\s+name=["']generator["']\s+content=["']Drupal/i.test(html)) {
    detected["Drupal"] = {
      name: "Drupal",
      category: "CMS",
      confidence: 80,
      scope: "full"
    };
    console.log('  ✓ Drupal detected');
  }

  // JOOMLA DETECTION
  if (/\/components\/com_/i.test(html) || /<meta\s+name=["']generator["']\s+content=["']Joomla/i.test(html)) {
    detected["Joomla"] = {
      name: "Joomla",
      category: "CMS",
      confidence: 80,
      scope: "full"
    };
    console.log('  ✓ Joomla detected');
  }

  return Object.values(detected);
}

/**
 * FINAL AGGREGATION PATCH - Global Resolution
 * Applies comprehensive validation rules at the final output stage
 */
function applyFinalAggregationPatch(results) {
  console.log('  🔍 Applying final aggregation patch...');
  
  // PROTECT CMS DETECTION - CMS must NOT be eliminated by backend rules
  const cms = results.filter(t => t.category === "CMS" || t.category === "E-commerce");
  const nonCms = results.filter(t => t.category !== "CMS" && t.category !== "E-commerce");
  
  // Apply backend rules ONLY to non-CMS technologies
  let processed = applyBackendRules(nonCms);
  
  // Merge back CMS (untouched)
  results = [...processed, ...cms];
  
  console.log('  ✅ Final aggregation complete');
  return results;
}

/**
 * Apply backend framework rules (isolated to non-CMS tech)
 */
function applyBackendRules(results) {
  // Priority: ASP.NET Core > Django > Gin
  const backends = results.filter(t => t.category === "Web frameworks");
  const BACKEND_PRIORITY = ["ASP.NET Core", "Django", "Gin"];
  
  if (backends.length > 1) {
    const prioritized = backends.find(b => BACKEND_PRIORITY.includes(b.name));
    if (prioritized) {
      console.log(`  ✓ Single backend enforcement: keeping ${prioritized.name}, removing others`);
      results = results.filter(t => t.category !== "Web frameworks" || t.name === prioritized.name);
    } else {
      // No prioritized backend, keep highest confidence
      const best = backends.reduce((a, b) => a.confidence > b.confidence ? a : b);
      console.log(`  ✓ Single backend enforcement: keeping ${best.name} (highest confidence)`);
      results = results.filter(t => t.category !== "Web frameworks" || t.name === best.name);
    }
  }
  
  // RULE 2: LANGUAGE ↔ FRAMEWORK LOCK
  const backend = results.find(t => t.category === "Web frameworks")?.name;
  const LANGUAGE_LOCKS = {
    "ASP.NET Core": [".NET", "C#", ".NET / C#"],
    "Django": ["Python"],
    "Gin": ["Go"]
  };
  
  if (backend && LANGUAGE_LOCKS[backend]) {
    const allowedLangs = LANGUAGE_LOCKS[backend];
    const detectedLangs = results.filter(t => t.category === "Programming languages").map(t => t.name);
    
    results = results.map(tech => {
      if (tech.category === "Programming languages") {
        if (!allowedLangs.includes(tech.name)) {
          console.log(`  ✓ Removing ${tech.name} (not compatible with ${backend})`);
          return null;
        }
      }
      return tech;
    }).filter(t => t !== null);
  }
  
  // RULE 3: DATABASE HARD RULE
  // Doctrine REQUIRES PHP
  const hasPhp = results.some(t => t.name === "PHP");
  const hasDoctrine = results.some(t => t.name === "Doctrine");
  
  if (hasDoctrine && !hasPhp) {
    console.log('  ✓ Doctrine requires PHP - Doctrine removed');
    results = results.filter(t => t.name !== "Doctrine");
  }
  
  // RULE 4: JAVASCRIPT HARD VALIDATION
  const JS_REQUIREMENTS = {
    "Angular": ["angular", "ng-"],
    "jQuery": ["jquery", "jQuery"],
    "Three.js": ["THREE"],
    "D3.js": ["d3"],
    "Stimulus": ["stimulus", "data-controller"]
  };
  
  Object.entries(JS_REQUIREMENTS).forEach(([lib, markers]) => {
    const tech = results.find(t => t.name === lib);
    if (tech && tech.evidence) {
      const hasMarker = tech.evidence.some(ev => {
        const str = JSON.stringify(ev).toLowerCase();
        return markers.some(marker => str.includes(marker.toLowerCase()));
      });
      if (!hasMarker) {
        console.log(`  ✓ ${lib} not explicitly proven - removing`);
        results = results.filter(t => t.name !== lib);
      }
    }
  });
  
  // RULE 5: FETCH API
  // Move Fetch API to "Browser API" category
  results = results.map(tech => {
    if (tech.name === "Fetch API") {
      console.log('  ✓ Fetch API moved to Browser API category');
      return { ...tech, category: "Browser API" };
    }
    return tech;
  });
  
  // RULE 6: CRM SANITIZATION
  const CRM_TOOLS = ["Salesforce", "Marketo"];
  results = results.map(tech => {
    if (CRM_TOOLS.includes(tech.name) && tech.confidence <= 25) {
      console.log(`  ✓ ${tech.name} marked as hidden Marketing Tool (confidence ≤ 25)`);
      return {
        ...tech,
        category: "Marketing Tools",
        confidence: Math.min(tech.confidence, 25),
        hidden_by_default: true
      };
    }
    return tech;
  });
  
  // RULE 7: FINAL CONSISTENCY CHECK
  // Remove contradictions with selected backend
  if (backend) {
    const INCOMPATIBLE = {
      "ASP.NET Core": ["Python", "Django", "Go", "Gin", "Java"],
      "Django": ["C#", ".NET", "Go", "Gin", "Java", "ASP.NET Core"],
      "Gin": ["Python", "Django", "C#", ".NET", "Java"]
    };
    
    if (INCOMPATIBLE[backend]) {
      const incompatible = INCOMPATIBLE[backend];
      results = results.filter(tech => {
        if (incompatible.includes(tech.name)) {
          console.log(`  ✓ Removed ${tech.name} (contradicts ${backend})`);
          return false;
        }
        return true;
      });
    }
  }
  
  return results;
}

/**
 * Apply deployment-blocker rules to detected technologies
 */
function applyDeploymentBlockerRules(results) {
  // BLOCKER 1: Shopify ABSOLUTE RULE
  const shopify = results.find(t => t.name === "Shopify");
  if (shopify) {
    const shopifyMarkers = ['cdn.shopify.com', 'window.Shopify', 'shopify'];
    const hasValidMarker = shopify.evidence?.some(ev => {
      const str = JSON.stringify(ev).toLowerCase();
      return shopifyMarkers.some(marker => str.includes(marker));
    });
    if (!hasValidMarker) {
      console.log('  ⚠️ Shopify detected without valid markers - REMOVING');
      results = results.filter(t => t.name !== "Shopify");
    }
  }
  
  // BLOCKER 2: Backend Selection Priority (IIS + .NET → ASP.NET Core, remove Django)
  const hasIIS = results.some(t => t.name === "IIS");
  const hasNet = results.some(t => ["C#", ".NET", ".NET / C#"].includes(t.name));
  if (hasIIS && hasNet) {
    const hasAspNetCore = results.some(t => t.name === "ASP.NET Core");
    if (!hasAspNetCore) {
      results.push({
        name: "ASP.NET Core",
        category: "Web frameworks",
        confidence: 95,
        icon: "⚙️",
        count: 1,
        evidence: [{ type: "header", count: 1 }]
      });
      console.log('  ✓ IIS + .NET → ASP.NET Core added');
    }
    results = results.filter(t => t.name !== "Django");
  }
  
  // BLOCKER 3: Language Cleanup (ASP.NET Core only allows .NET/C#)
  const backend = results.find(t => t.category === "Web frameworks")?.name;
  if (backend === "ASP.NET Core") {
    const hasPython = results.some(t => t.name === "Python");
    const hasDotNet = results.some(t => ["C#", ".NET", ".NET / C#"].includes(t.name));
    if (hasPython && hasDotNet) {
      results = results.filter(t => t.name !== "Python");
      console.log('  ✓ ASP.NET Core only allows .NET/C# - Python removed');
    }
  }
  
  // BLOCKER 4: CRM Visibility (HubSpot/Salesforce/Marketo marked as hidden if confidence ≤ 25)
  const CRM_TOOLS = ["HubSpot", "Salesforce", "Marketo"];
  results = results.map(tech => {
    if (CRM_TOOLS.includes(tech.name) && tech.confidence <= 25) {
      return {
        ...tech,
        category: "Marketing Tools",
        hidden_by_default: true
      };
    }
    return tech;
  });
  
  // BLOCKER 5: Consistency Rule (remove contradictions)
  const INCOMPATIBLE = [
    { framework: "Django", language: "C#" },
    { framework: "Django", language: ".NET" },
    { framework: "ASP.NET Core", language: "Python" },
    { framework: "Gin", language: "Python" }
  ];
  
  const backendFramework = results.find(t => t.category === "Web frameworks")?.name;
  const languages = results.filter(t => t.category === "Programming languages").map(t => t.name);
  
  INCOMPATIBLE.forEach(incompat => {
    if (backendFramework === incompat.framework && languages.includes(incompat.language)) {
      results = results.filter(t => t.name !== incompat.language);
      console.log(`  ✓ Removed ${incompat.language} (incompatible with ${incompat.framework})`);
    }
  });
  
  return results;
}

/** * CMS DETECTION FINAL FIX
 * - Remove duplicate CMS entries
 * - Enforce language-framework binding (WordPress → PHP)
 * - Handle Shopify properly
 */
function finalizeCMSDetection(technologies) {
  console.log('  🔧 Finalizing CMS detection...');
  
  // 1️⃣ Remove duplicate CMS entries
  const cmsSeen = new Set();
  technologies = technologies.filter(tech => {
    if (tech.category === "CMS" || tech.category === "E-commerce") {
      if (cmsSeen.has(tech.name)) {
        console.log(`  ✓ Removed duplicate CMS: ${tech.name}`);
        return false;
      }
      cmsSeen.add(tech.name);
    }
    return true;
  });

  // 2️⃣ Enforce language-framework binding for WordPress
  const hasWordPress = technologies.some(t => t.name === "WordPress");
  if (hasWordPress) {
    console.log('  ✓ WordPress detected - enforcing PHP backend');
    
    // Remove non-PHP frameworks if WordPress detected
    const incompatibleFrameworks = ["Django", "ASP.NET Core", "Gin", "Express"];
    technologies = technologies.filter(tech => {
      if (incompatibleFrameworks.includes(tech.name)) {
        console.log(`  ✓ Removed ${tech.name} (incompatible with WordPress)`);
        return false;
      }
      return true;
    });
    
    // Ensure PHP exists
    if (!technologies.some(t => t.name === "PHP")) {
      console.log('  ✓ Adding PHP (required by WordPress)');
      technologies.push({
        name: "PHP",
        category: "Programming languages",
        confidence: 85,
        icon: "⚙️",
        count: 1,
        evidence: []
      });
    }
  }

  // 3️⃣ Shopify - allow flexible backend but ensure JS is present
  const hasShopify = technologies.some(t => t.name === "Shopify");
  if (hasShopify) {
    console.log('  ✓ Shopify detected - allowing flexible backend');
    // Shopify can work with any backend, no restrictions needed
  }

  console.log('  ✅ CMS finalization complete');
  return technologies;
}

/** * Analyzes page artifacts to detect technologies
 */
function analyzeTechnologies(data) {
  const {
    html = "",
    scripts = [],
    styles = [],
    headers = {},
    cookies = [],
    metaTags = [],
  } = data;

  const detected = {};

  // Normalize headers
  const lowerHeaders = {};
  Object.keys(headers || {}).forEach((key) => {
    lowerHeaders[key.toLowerCase()] = headers[key];
  });

  // Flatten cookies and meta tags
  const cookieStrings = Array.isArray(cookies)
    ? cookies.map((c) => `${c.name || ""}=${c.value || ""};domain=${c.domain || ""};path=${c.path || ""}`)
    : [];

  const metaStrings = Array.isArray(metaTags)
    ? metaTags.map((m) => `${m.name || ""}:${m.content || ""}`)
    : [];

  // Get all signatures
  const allSignatures = [];
  Object.values(signatures).forEach((categorySignatures) => {
    allSignatures.push(...categorySignatures);
  });

  // Check each technology
  allSignatures.forEach((tech) => {
    let count = 0;
    const evidence = [];

    if (!tech.patterns) return;

    tech.patterns.forEach((pattern) => {
      try {
        let patternMatches = 0;

        if (pattern.type === "html" && pattern.regex) {
          const regex = toRegex(pattern.regex, true);
          const matches = html.match(regex);
          if (matches) {
            patternMatches = matches.length;
            count += patternMatches;
            evidence.push({ type: "html", count: patternMatches });
          }
        }
        else if (pattern.type === "script" && pattern.regex) {
          const regex = toRegex(pattern.regex, false);
          scripts.forEach((script) => {
            if (regex.test(script)) {
              patternMatches++;
              count++;
            }
            if (regex.global) regex.lastIndex = 0;
          });
          if (patternMatches > 0) evidence.push({ type: "script", count: patternMatches });
        }
        else if (pattern.type === "style" && pattern.regex) {
          const regex = toRegex(pattern.regex, false);
          styles.forEach((style) => {
            if (regex.test(style)) {
              patternMatches++;
              count++;
            }
            if (regex.global) regex.lastIndex = 0;
          });
          if (patternMatches > 0) evidence.push({ type: "style", count: patternMatches });
        }
        else if (pattern.type === "header" && pattern.regex) {
          Object.keys(pattern.regex).forEach((headerKey) => {
            const headerRegex = toRegex(pattern.regex[headerKey], false);
            const value = lowerHeaders[headerKey];
            if (value && headerRegex.test(String(value))) {
              patternMatches++;
              count++;
            }
            if (headerRegex.global) headerRegex.lastIndex = 0;
          });
          if (patternMatches > 0) evidence.push({ type: "header", count: patternMatches });
        }
        else if (pattern.type === "cookie" && pattern.regex) {
          const regex = toRegex(pattern.regex, false);
          cookieStrings.forEach((cookie) => {
            if (regex.test(cookie)) {
              patternMatches++;
              count++;
            }
            if (regex.global) regex.lastIndex = 0;
          });
          if (patternMatches > 0) evidence.push({ type: "cookie", count: patternMatches });
        }
        else if (pattern.type === "meta" && pattern.regex) {
          const regex = toRegex(pattern.regex, false);
          metaStrings.forEach((meta) => {
            if (regex.test(meta)) {
              patternMatches++;
              count++;
            }
            if (regex.global) regex.lastIndex = 0;
          });
          if (patternMatches > 0) evidence.push({ type: "meta", count: patternMatches });
        }
      } catch (e) {
        // Skip invalid regex
      }
    });

    if (count > 0) {
      let category = "Other";
      Object.keys(signatures).forEach((cat) => {
        if (signatures[cat].some((t) => t.name === tech.name)) {
          category = cat;
        }
      });

      let maxConfidence = 0;
      let hasHighQualityEvidence = false;

      evidence.forEach((ev) => {
        const confidence = getConfidence(ev.type, ev.count);
        maxConfidence = Math.max(maxConfidence, confidence);
        if (['header', 'cookie', 'meta'].includes(ev.type)) {
          hasHighQualityEvidence = true;
        }
      });

      if (evidence.length >= 2) {
        maxConfidence = Math.min(maxConfidence + 0.05, 1.0);
      }
      if (evidence.length >= 3) {
        maxConfidence = Math.min(maxConfidence + 0.05, 1.0);
      }

      if (!hasHighQualityEvidence && evidence.length === 1 && evidence[0].type === 'html') {
        maxConfidence = Math.min(maxConfidence * 0.85, 0.65);
      }

      detected[tech.name] = {
        name: tech.name,
        category: category,
        icon: tech.icon || "⚙️",
        count: Math.min(count, 10),
        confidence: Math.round(maxConfidence * 100),
        evidence: evidence,
      };
    }
  });

  // Detect CMS independently (before framework elimination)
  const cmsResults = detectCMS(data);
  
  // Apply deployment-blocker rules
  let filtered = Object.values(detected);
  filtered = applyDeploymentBlockerRules(filtered);
  
  // Merge CMS results (they're protected and won't be eliminated)
  filtered = [...filtered, ...cmsResults];
  
  // Apply final aggregation patch (global resolution)
  filtered = applyFinalAggregationPatch(filtered);
  
  // Finalize CMS detection (remove duplicates, enforce bindings)
  filtered = finalizeCMSDetection(filtered);
  
  // Sort by category order then count
  return filtered.sort((a, b) => {
    const aIdx = CATEGORY_ORDER.indexOf(a.category);
    const bIdx = CATEGORY_ORDER.indexOf(b.category);
    if (aIdx !== bIdx) {
      if (aIdx === -1) return 1;
      if (bIdx === -1) return -1;
      return aIdx - bIdx;
    }
    return b.count - a.count;
  });
}

module.exports = { analyzeTechnologies, CATEGORY_ORDER };
