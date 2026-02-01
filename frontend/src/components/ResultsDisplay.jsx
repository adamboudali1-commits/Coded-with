import { useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import BentoCardSkeleton from "./BentoCardSkeleton";
import StatsBar from "./StatsBar";
import TechCard from "./TechCard";
import { AlertCircle } from "lucide-react";
import { 
  SiReact, SiJavascript, SiWordpress, SiShopify, 
  SiGoogleanalytics, SiGoogletagmanager,
  SiCloudflare, SiNginx, SiGooglefonts, SiMongodb
} from "react-icons/si";
import { 
  FaVuejs, FaCss3Alt, FaPalette, FaShoppingCart,
  FaBullhorn, FaComments, FaCloud, FaServer,
  FaCode, FaCog, FaFont, FaLock, FaDatabase, FaBox,
  FaEnvelope, FaHeart, FaChartLine, FaEye
} from "react-icons/fa";

/**
 * Color configuration for categories with glassmorphism accents
 */
const categoryConfig = {
  "CMS": { icon: SiWordpress, accentColor: "from-orange-400 to-orange-600" },
  "Blogs": { icon: SiWordpress, accentColor: "from-orange-400 to-orange-600" },
  "Content / Blog CMS": { icon: SiWordpress, accentColor: "from-orange-300 to-orange-500" },
  "Webmail": { icon: FaEnvelope, accentColor: "from-blue-300 to-blue-500" },
  "Development": { icon: FaCode, accentColor: "from-purple-400 to-purple-600" },
  "Programming languages": { icon: FaCode, accentColor: "from-blue-400 to-blue-600" },
  "Databases": { icon: FaDatabase, accentColor: "from-green-400 to-green-600" },
  "CRM": { icon: FaServer, accentColor: "from-indigo-400 to-indigo-600" },
  "Web frameworks": { icon: FaCog, accentColor: "from-amber-400 to-amber-600" },
  "Web servers": { icon: SiNginx, accentColor: "from-slate-400 to-slate-600" },
  "PaaS & Hosting": { icon: FaCloud, accentColor: "from-gray-400 to-gray-600" },
  "JavaScript frameworks": { icon: SiJavascript, accentColor: "from-yellow-400 to-yellow-600" },
  "CSS Frameworks": { icon: FaCss3Alt, accentColor: "from-indigo-400 to-indigo-600" },
  "Security & Compliance": { icon: FaLock, accentColor: "from-red-400 to-red-600" },
  "Email": { icon: FaEnvelope, accentColor: "from-blue-300 to-blue-500" },
  "CDN": { icon: SiCloudflare, accentColor: "from-blue-400 to-blue-600" },
  "Analytics": { icon: SiGoogleanalytics, accentColor: "from-teal-400 to-teal-600" },
  "Monitoring & Performance": { icon: FaChartLine, accentColor: "from-cyan-400 to-cyan-600" },
  "Advertising": { icon: FaBullhorn, accentColor: "from-rose-400 to-rose-600" },
  "Commerce & Payments": { icon: FaShoppingCart, accentColor: "from-green-400 to-green-600" },
  "E-commerce": { icon: FaShoppingCart, accentColor: "from-green-400 to-green-600" },
  "Marketing Tools": { icon: FaBullhorn, accentColor: "from-rose-300 to-rose-500" },
  "Frontend Frameworks": { icon: SiReact, accentColor: "from-blue-400 to-blue-600" },
  "React Frameworks": { icon: SiReact, accentColor: "from-cyan-400 to-cyan-600" },
  "Vue Frameworks": { icon: FaVuejs, accentColor: "from-emerald-400 to-emerald-600" },
  "UI Libraries": { icon: FaPalette, accentColor: "from-pink-400 to-pink-600" },
  "JavaScript Libraries": { icon: SiJavascript, accentColor: "from-yellow-400 to-yellow-600" },
  "Tag Managers": { icon: SiGoogletagmanager, accentColor: "from-violet-400 to-violet-600" },
  "Marketing": { icon: FaBullhorn, accentColor: "from-rose-400 to-rose-600" },
  "Live Chat & Support": { icon: FaComments, accentColor: "from-purple-400 to-purple-600" },
  "Hosting": { icon: FaCloud, accentColor: "from-gray-400 to-gray-600" },
  "Backend Languages": { icon: FaCode, accentColor: "from-fuchsia-400 to-fuchsia-600" },
  "Backend Frameworks": { icon: FaCog, accentColor: "from-amber-400 to-amber-600" },
  "Font Services": { icon: SiGooglefonts, accentColor: "from-red-400 to-red-600" },
  "Security": { icon: FaLock, accentColor: "from-red-400 to-red-600" },
  "Browser API": { icon: FaCode, accentColor: "from-blue-400 to-blue-600" }
};

/**
 * Empty State Component - Displayed when no technologies are found
 */
function EmptyState() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

        <div className="relative rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] py-16 md:py-24 px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-6"
            >
              <AlertCircle className="w-12 h-12 text-white/60" strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              No Technologies Detected
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-md">
              Enter a URL to analyze the technologies and tools used on the website.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

/**
 * Category Section - Displays all tools within a category
 */
function CategorySection({ category, techs, config, index, isLoading = false }) {
  const [expandedTechs, setExpandedTechs] = useState({});

  const toggleTech = (techName) => {
    setExpandedTechs(prev => ({
      ...prev,
      [techName]: !prev[techName]
    }));
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="relative group"
    >
      {/* Animated gradient background */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-br ${config.accentColor} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      ></div>

      {/* Main card */}
      <article className="relative rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/20 transition-all duration-300 overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="p-6 md:p-8">
          {/* Category Header */}
          <header className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
              className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex-shrink-0"
            >
              <config.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
                className="text-xl md:text-2xl font-bold text-white truncate"
              >
                {category}
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 flex-shrink-0"
            >
              <span className="text-sm md:text-base font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                {techs.length} tools
              </span>
            </motion.div>
          </header>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <BentoCardSkeleton key={i} index={i} />
                ))
              : techs.map((tech, techIndex) => (
                  <motion.div
                    key={`${typeof tech === 'string' ? tech : tech.name}-${techIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + techIndex * 0.02
                    }}
                    onClick={() => toggleTech(typeof tech === 'string' ? tech : tech.name)}
                  >
                    <TechCard
                      name={typeof tech === 'string' ? tech : tech.name}
                      category={category}
                      icon={typeof tech === 'object' ? tech.icon : undefined}
                      count={typeof tech === 'object' ? tech.count : 1}
                      confidence={typeof tech === 'object' ? tech.confidence : undefined}
                      theme="dark"
                      isExpanded={expandedTechs[typeof tech === 'string' ? tech : tech.name]}
                    />
                  </motion.div>
                ))}
          </div>
        </div>
      </article>
    </motion.section>
  );
}

/**
 * Main Results Display Component with Bento Grid Layout
 * High-end SaaS dashboard with glassmorphism aesthetic
 */
export default function ResultsDisplay({ technologies, theme, isLoading = false }) {
  const isArrayFormat = Array.isArray(technologies);
  
  const groupedTechs = useMemo(() => {
    if (!technologies) return {};
    if (isArrayFormat) {
      const grouped = {};
      technologies.forEach((tech) => {
        // Handle CMS with partial scope - relabel as "Content / Blog CMS"
        let displayCategory = tech.category;
        if (tech.category === "CMS" && tech.scope === "partial") {
          displayCategory = "Content / Blog CMS";
        }
        
        if (!grouped[displayCategory]) {
          grouped[displayCategory] = [];
        }
        grouped[displayCategory].push(tech);
      });
      return grouped;
    }
    // Filter out empty categories from grouped format
    const filteredGrouped = {};
    Object.entries(technologies).forEach(([category, items]) => {
      if (Array.isArray(items) && items.length > 0) {
        filteredGrouped[category] = items;
      }
    });
    return filteredGrouped;
  }, [technologies, isArrayFormat]);

  const stats = useMemo(() => {
    if (isArrayFormat && technologies) {
      const uniqueCategories = new Set(technologies.map(t => t.category));
      return {
        categories: uniqueCategories.size,
        total: technologies.length
      };
    }
    const categories = Object.keys(groupedTechs).length;
    const total = Object.values(groupedTechs).reduce((sum, arr) => sum + arr.length, 0);
    return { categories, total };
  }, [technologies, groupedTechs, isArrayFormat]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const isEmpty = !technologies || (Array.isArray(technologies) && technologies.length === 0) || Object.keys(groupedTechs).length === 0;

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full space-y-8"
    >
      {/* Stats Bar */}
      {!isEmpty && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatsBar total={stats.total} categories={stats.categories} theme={theme} />
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div className="space-y-6">
        {isLoading ? (
          // Loading state with skeleton cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {Array.from({ length: 6 }).map((_, i) => (
              <BentoCardSkeleton key={i} index={i} />
            ))}
          </div>
        ) : isEmpty ? (
          // Empty state
          <EmptyState />
        ) : (
          // Bento Grid Layout - Responsive grid with different card spans
          <div className="space-y-6">
            {Object.entries(groupedTechs).map(([category, techs], index) => {
              const config = categoryConfig[category] || {
                icon: FaBox,
                accentColor: "from-gray-400 to-gray-600"
              };

              return (
                <CategorySection
                  key={category}
                  category={category}
                  techs={techs}
                  config={config}
                  index={index}
                  isLoading={false}
                />
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.main>
  );
}
