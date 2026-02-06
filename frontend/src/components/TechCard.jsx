import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaLaravel,
  FaVuejs,
  FaLinkedin,
  FaFacebook,
  FaRegCircle
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiDjango,
  SiFlask,
  SiRubyonrails,
  SiSpringboot,
  SiDotnet,
  SiFastapi,
  SiNestjs,
  SiExpress,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiHotjar,
  SiMixpanel,
  SiMatomo,
  SiPlausibleanalytics,
  SiAdobe,
  SiNaver,
  SiGo,
  SiKotlin
} from "react-icons/si";

// Brand color mapping for all technologies
const brandColors = {
  "wordpress": "#0073aa",
  "drupal": "#0678be",
  "joomla": "#fdbc02",
  "ghost": "#15171a",
  "wix": "#0c6efc",
  "squarespace": "#000000",
  "webflow": "#4353ff",
  "shopify": "#96bf48",
  "react": "#61dafb",
  "vue.js": "#4fc08d",
  "vue": "#4fc08d",
  "angular": "#dd0031",
  "next.js": "#000000",
  "nextjs": "#000000",
  "nuxt.js": "#00dc82",
  "svelte": "#ff3e00",
  "ember.js": "#e34c41",
  "backbone.js": "#0071b5",
  "angular.js": "#e43a45",
  "typescript": "#3178c6",
  "webpack": "#8dd6f9",
  "vite": "#646cff",
  "vercel": "#000000",
  "netlify": "#00c7b7",
  "firebase": "#ffa726",
  "mongodb": "#13aa52",
  "postgresql": "#336791",
  "mysql": "#005c84",
  "redis": "#dc382d",
  "elasticsearch": "#005571",
  "supabase": "#3fcf8e",
  "python": "#3776ab",
  "node.js": "#68a063",
  "nodejs": "#68a063",
  "java": "#007396",
  "php": "#777bb4",
  "ruby": "#cc342d",
  "go": "#00add8",
  "golang": "#00add8",
  "rust": "#ce422b",
  ".net / c#": "#239120",
  ".net": "#239120",
  "c#": "#239120",
  "kotlin": "#7f52ff",
  "scala": "#dc143c",
  "perl": "#39457e",
  "c++": "#00599c",
  "django": "#092e20",
  "flask": "#000000",
  "fastapi": "#009688",
  "laravel": "#ff2d20",
  "symfony": "#000000",
  "ruby on rails": "#cc0000",
  "spring boot": "#6db33f",
  "express": "#000000",
  "express.js": "#000000",
  "nestjs": "#e0234e",
  "koa": "#33333d",
  "hapi": "#34ba4f",
  "fastify": "#000000",
  "tailwind css": "#06b6d4",
  "bootstrap": "#7952b3",
  "bulma": "#00d1b2",
  "foundation": "#1e91b6",
  "materialize": "#ee6e73",
  "sass": "#cc6699",
  "less": "#1d365d",
  "postcss": "#dd3735",
  "nginx": "#009639",
  "apache": "#d09b1c",
  "cloudflare": "#f38020",
  "aws": "#ff9900",
  "azure": "#0078d4",
  "google cloud": "#4285f4",
  "heroku": "#430098",
  "digitalocean": "#0080ff",
  "linode": "#00a95c",
  "hetzner": "#d00000",
  "ovh": "#123f7c",
  "docker": "#2496ed",
  "kubernetes": "#326ce5",
  "github": "#181717",
  "gitlab": "#fc6d26",
  "bitbucket": "#0052cc",
  "stripe": "#635bff",
  "paypal": "#003087",
  "square": "#3e3e3e",
  "braintree": "#002b81",
  "authorize.net": "#2b5797",
  "2checkout": "#fdb71a",
  "mollie": "#0099da",
  "gumroad": "#ff0000",
  "paddle": "#ff6b24",
  "auth0": "#eb5424",
  "okta": "#007dc3",
  "recaptcha": "#4285f4",
  "hcaptcha": "#9699ff",
  "sentry": "#362d59",
  "datadog": "#632ca6",
  "new relic": "#1ce783",
  "elastic": "#005eb8",
  "dynatrace": "#00a4ef",
  "splunk": "#000000",
  "three.js": "#000000",
  "babylon.js": "#ea6b13",
  "d3.js": "#f78d4d",
  "chart.js": "#ff6384",
  "leaflet": "#199900",
  "gsap": "#88ce02",
  "htmx": "#3d72d7",
  "lodash": "#3492ff",
  "axios": "#5a29e4",
  "redux": "#764abc",
  "mobx": "#ff9955",
  "graphql": "#e10098",
  "apollo": "#311c87",
  "moment.js": "#13552b",
  "swiper": "#0080ff",
  "slick": "#00adb5",
  "owl": "#8b4513",
  "stimulus": "#4e7d9f",
  "alpine.js": "#77c1d3",
  "uikit": "#2e8acf",
  "pico": "#6b5b7c",
  "ant design": "#1890ff",
  "material-ui": "#007fff",
  "chakra": "#319795",
  "shadcn": "#000000",
  "primevue": "#3b82f6",
  "element": "#409eff",
  "vuetify": "#1867c0",
  "strapi": "#2f2e8b",
  "wagtail": "#b74f0a",
  "craft": "#f9b233",
  "hubspot": "#ff5c35",
  "salesforce": "#00a1e0",
  "marketo": "#5b0ea0",
  "zoho": "#4099ff",
  "pipedrive": "#1f4788",
  "freshsales": "#66bb6a",
  "copper": "#ff6b35",
  "insightly": "#2b5797",
  "sugarcrm": "#ffb200",
  // Additional mappings for variations
  "nodejs": "#68a063",
  "nextdotjs": "#000000",
  "nuxtdotjs": "#00dc82",
  "vuedotjs": "#4fc08d",
  "react.js": "#61dafb",
  "firebase auth": "#ffa726",
  "google analytics": "#e37400",
  "google tag manager": "#4285f4",
  "google cloud platform": "#4285f4",
  "microsoft sql server": "#cc2927",
  "microsoft iis": "#0078d4",
  "microsoft azure": "#0078d4",
  "apache tomcat": "#d09b1c",
  "apache kafka": "#000000",
  "apache spark": "#e25a1c",
  "apache hadoop": "#fff300",
  "ruby on rails": "#cc0000",
  "asp.net": "#7952b3",
  "asp.net core": "#512bd4",
  "c++": "#00599c",
  ".net / c#": "#512bd4",
  "elixir/phoenix": "#4e2a84",
  "phoenix (elixir)": "#4e2a84",
  "okta": "#007dc3",
  "google cloud": "#4285f4",
  "aws (amazon)": "#ff9900",
  "stripe": "#635bff",
  "paypal": "#003087",
  "2checkout": "#fdb71a",
  "braintree": "#002b81",
  "authorize.net": "#2b5797",
  // jQuery and JavaScript Libraries
  "jquery": "#0769ad",
  "angularjs": "#e23237",
  "angular.js": "#e23237",
  "fetch api": "#4285f4",
  "animate.css": "#1572b6",
  "slick carousel": "#00adb5",
  // Security
  "hsts": "#00c176",
  "x-frame-options": "#00c176",
  "content security policy": "#00c176",
  // Hosting Platforms
  "render": "#46e3b7",
  "cloudflare pages": "#f38020",
  "gin": "#00add8",
  "gin (go)": "#00add8",
  "rocket": "#ce422b",
  "rocket (rust)": "#ce422b"
};

function SvgIcon({ url, name, color }) {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        setSvgContent(text);
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    if (url) {
      fetchSvg();
    }
  }, [url]);

  if (!svgContent) {
    return <div className="w-5 h-5 bg-gray-300 rounded animate-pulse" />;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      style={{ fill: color }}
      dangerouslySetInnerHTML={{ __html: svgContent.replace(/<svg[^>]*>/i, '').replace(/<\/svg>/i, '') }}
    />
  );
}

function getIcon(name, fallback) {
  // If fallback is a URL (SVG icon from CDN), render it with proper brand color
  if (fallback && typeof fallback === 'string' && fallback.startsWith('http')) {
    const nameLower = (name || "").toLowerCase();
    const brandColor = brandColors[nameLower] || "#333333";
    return <SvgIcon url={fallback} name={name} color={brandColor} />;
  }
  
  const key = (name || "").toLowerCase();
  switch (key) {
    case "react":
      return <FaReact className="text-cyan-400" />;
    case "vue.js":
    case "vue":
      return <FaVuejs className="text-emerald-400" />;
    case "angular":
      return <FaAngular className="text-red-500" />;
    case "next.js":
      return <SiNextdotjs className="text-gray-900 dark:text-white" />;
    case "nuxt.js":
      return <SiNuxtdotjs className="text-emerald-500" />;
    case "node.js":
      return <FaNodeJs className="text-green-500" />;
    case "express":
    case "express.js":
      return <SiExpress className="text-gray-700 dark:text-gray-200" />;
    case "nestjs":
      return <SiNestjs className="text-rose-500" />;
    case "fastapi":
      return <SiFastapi className="text-emerald-500" />;
    case "laravel":
      return <FaLaravel className="text-red-500" />;
    case "django":
      return <SiDjango className="text-emerald-600" />;
    case "flask":
      return <SiFlask className="text-gray-800 dark:text-gray-100" />;
    case "ruby on rails":
      return <SiRubyonrails className="text-rose-600" />;
    case "spring boot":
      return <SiSpringboot className="text-green-500" />;
    case "asp.net core":
    case ".net":
      return <SiDotnet className="text-indigo-500" />;
    case "php":
      return <FaPhp className="text-indigo-500" />;
    case "python":
      return <FaPython className="text-blue-400" />;
    case "java":
      return <FaJava className="text-orange-500" />;
    case "kotlin":
      return <SiKotlin className="text-purple-500" />;
    case "go":
    case "golang":
      return <SiGo className="text-sky-500" />;
    case "google analytics":
      return <SiGoogleanalytics className="text-amber-500" />;
    case "google tag manager":
      return <SiGoogletagmanager className="text-blue-500" />;
    case "hotjar":
      return <SiHotjar className="text-rose-500" />;
    case "mixpanel":
      return <SiMixpanel className="text-purple-500" />;
    case "amplitude":
      return <FaRegCircle className="text-blue-500" />;
    case "segment":
      return <FaRegCircle className="text-emerald-500" />;
    case "matomo":
      return <SiMatomo className="text-indigo-500" />;
    case "plausible":
    case "plausible analytics":
      return <SiPlausibleanalytics className="text-gray-700 dark:text-gray-200" />;
    case "microsoft clarity":
      return <FaRegCircle className="text-blue-500" />;
    case "linkedin insight tag":
      return <FaLinkedin className="text-blue-600" />;
    case "microsoft power bi":
      return <FaRegCircle className="text-yellow-500" />;
    case "adobe analytics":
      return <SiAdobe className="text-red-600" />;
    case "naver analytics":
      return <SiNaver className="text-green-500" />;
    case "fullstory":
      return <SiAdobe className="text-red-500" />;
    case "facebook pixel":
      return <FaFacebook className="text-blue-600" />;
    case "google ads / adsense":
      return <SiGoogleanalytics className="text-amber-500" />;
    default:
      if (fallback) return fallback;
      return <FaRegCircle className="text-gray-400" />;
  }
}

export default function TechCard({ name, category, icon, count = 1, confidence, accentTextClass, theme }) {
  const isDark = theme === 'dark';
  const resolvedIcon = getIcon(name, icon);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative rounded-lg border shadow-sm hover:shadow-md transition-all p-3 flex items-center gap-3 ${
        isDark 
          ? 'bg-gray-800 border-gray-600 hover:bg-gray-700' 
          : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
    >
      <div className="text-xl flex-shrink-0">{resolvedIcon}</div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </p>
      </div>
      {count > 1 && (
        <div className={`px-2 py-1 text-[11px] font-bold rounded-md ${
          isDark 
            ? 'bg-gray-700 text-gray-300 border border-gray-600' 
            : 'bg-gray-100 text-gray-700 border border-gray-300'
        }`}>
          ×{count}
        </div>
      )}
    </motion.div>
  );
}
