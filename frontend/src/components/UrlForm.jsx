import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Header from "./Header";
import SearchBox from "./SearchBox";
import ResultsDisplay from "./ResultsDisplay";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorBanner from "./ErrorBanner";
import { HiLightBulb, HiArrowPath } from "react-icons/hi2";

export default function UrlForm({ theme }) {
  const [url, setUrl] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const isDark = theme === 'dark';

  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const hasValidUrl = url.trim().length > 0 && isValidUrl(url);

  const handleAnalyze = async () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError("");
    setTechnologies([]);
    setSearched(false);

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error during analysis");
      }

      // Handle both array (new format) and grouped object (old format)
      const techs = data.technologies || data.grouped || [];
      
      if (Array.isArray(techs) && techs.length > 0) {
        setTechnologies(techs);
      } else if (!Array.isArray(techs) && Object.keys(techs).length > 0) {
        setTechnologies(techs);
      } else {
        setError("No technologies detected on this website");
      }
      
      setSearched(true);
    } catch (err) {
      setError(err.message || "Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  const hasResults = Array.isArray(technologies) 
    ? technologies.length > 0 
    : Object.keys(technologies).length > 0;

  const handleRetry = () => {
    setUrl("");
    setTechnologies([]);
    setSearched(false);
    setError("");
  };

  return (
    <div className="w-full space-y-6">
      <Header theme={theme} />

      {/* Search Box */}
      <SearchBox url={url} setUrl={setUrl} onSearch={handleAnalyze} loading={loading} theme={theme} onRetry={handleRetry} hasResults={hasResults} />

      {/* Error Banner */}
      {error && (
        <ErrorBanner error={error} onClose={() => setError("")} theme={theme} />
      )}

      {/* Loading State */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-md'
          } rounded-xl border shadow-lg p-8 transition-colors duration-300`}
        >
          <LoadingSkeleton theme={theme} />
        </motion.div>
      )}

      {/* Results State */}
      {!loading && searched && hasResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } rounded-xl border shadow-lg p-6 transition-colors duration-300`}
        >
          <ResultsDisplay technologies={technologies} theme={theme} />
        </motion.div>
      )}

      {/* Empty State */}
      {!loading && searched && !hasResults && !error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } rounded-xl border shadow-lg p-12 text-center transition-colors duration-300`}
        >
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-full ${
              isDark ? 'bg-yellow-900/30' : 'bg-gradient-to-r from-yellow-100 to-orange-100'
            }`}>
              <HiLightBulb className={`w-8 h-8 ${
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`} />
            </div>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>No Technologies Detected</h3>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            The analyzed website does not use any technologies recognized by our analyzer.
          </p>
        </motion.div>
      )}

      {/* Idle State */}
      {!loading && !searched && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.005 }}
          className={`${
            isDark 
              ? 'bg-gray-950 border-gray-900' 
              : 'bg-gray-200 border-gray-300'
          } relative overflow-hidden rounded-2xl border shadow-xl p-10 text-center transition-colors duration-300`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ boxShadow: isDark ? '0 0 40px rgba(0,150,255,0.08)' : '0 0 30px rgba(0,120,255,0.08)' }}></div>
          <div className="pointer-events-none absolute -top-16 -left-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-10 h-48 w-48 rounded-full bg-fuchsia-400/10 blur-3xl" />

          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 rounded-full opacity-95"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(0,255,255,0.85), rgba(0,119,255,0.95), rgba(180,0,255,0.9), rgba(0,255,255,0.85))',
              backgroundSize: '220% 100%',
              filter: 'drop-shadow(0 0 6px rgba(0,200,255,0.45))',
            }}
            animate={{ backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 rounded-full opacity-90"
            style={{
              backgroundImage: 'linear-gradient(270deg, rgba(0,255,255,0.8), rgba(0,119,255,0.9), rgba(180,0,255,0.8), rgba(0,255,255,0.8))',
              backgroundSize: '220% 100%',
              filter: 'drop-shadow(0 0 6px rgba(0,200,255,0.4))',
            }}
            animate={{ backgroundPosition: ['200% 50%', '0% 50%', '200% 50%'] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-0.5 rounded-full opacity-90"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgba(0,255,255,0.8), rgba(0,119,255,0.9), rgba(180,0,255,0.8), rgba(0,255,255,0.8))',
              backgroundSize: '100% 220%',
              filter: 'drop-shadow(0 0 6px rgba(0,200,255,0.4))',
            }}
            animate={{ backgroundPosition: ['50% 0%', '50% 200%', '50% 0%'] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="pointer-events-none absolute top-0 bottom-0 right-0 w-0.5 rounded-full opacity-90"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(0,255,255,0.8), rgba(0,119,255,0.9), rgba(180,0,255,0.8), rgba(0,255,255,0.8))',
              backgroundSize: '100% 220%',
              filter: 'drop-shadow(0 0 6px rgba(0,200,255,0.4))',
            }}
            animate={{ backgroundPosition: ['50% 200%', '50% 0%', '50% 200%'] }}
            transition={{ duration: 5.1, repeat: Infinity, ease: 'linear' }}
          />

          <div className={`inline-flex items-center gap-2 mx-auto mb-4 rounded-full border px-4 py-2 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.2em] ${
            hasValidUrl
              ? 'border-green-500/50 bg-green-500/10 text-green-400'
              : 'border-red-500/50 bg-red-500/10 text-red-400'
          }`}>
            <span className={`h-2 w-2 rounded-full animate-pulse ${
              hasValidUrl ? 'bg-green-500' : 'bg-red-500'
            }`} aria-hidden="true" />
            Ready When You Are
          </div>
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-full shadow-lg ${
              hasValidUrl
                ? 'bg-green-600'
                : isDark ? 'bg-red-600' : 'bg-red-500'
            }`}>
              <HiLightBulb className={`w-8 h-8 ${
                hasValidUrl || isDark ? 'text-white' : 'text-red-600'
              }`} />
            </div>
          </div>
          <h3 className={`text-2xl font-semibold tracking-tight mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Start an Analysis</h3>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
            Enter a website URL to discover its complete technology stack
          </p>
          <p className={isDark ? 'text-gray-500' : 'text-gray-500'}>
            Instant insights with zero setup — just paste and run.
          </p>
        </motion.div>
      )}
    </div>
  );
}
