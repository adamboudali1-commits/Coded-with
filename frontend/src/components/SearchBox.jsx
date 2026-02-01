import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiMagnifyingGlass, HiSparkles, HiArrowPath } from "react-icons/hi2";

export default function SearchBox({ url, setUrl, onSearch, loading, theme, onRetry, hasResults }) {
  const [focused, setFocused] = useState(false);
  const isDark = theme === 'dark';

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      onSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6"
    >
      <div className="flex items-center gap-3">
        {/* Retry Button - Shows when there are results */}
        {hasResults && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetry}
            className={`p-3 rounded-lg ${
              isDark ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'
            } shadow-lg transition-all`}
            title="Start a new analysis with a different URL"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <HiArrowPath className="w-5 h-5 text-white" />
            </motion.div>
          </motion.button>
        )}

        {/* Icon - Shows when no results */}
        {!hasResults && (
          <div className={`p-3 rounded-lg ${
            isDark ? 'bg-blue-600' : 'bg-blue-500'
          } shadow-lg`}>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <HiSparkles className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        )}

        {/* Input container */}
        <div className={`flex-1 flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
          focused 
            ? isDark 
              ? 'bg-gray-800 border-blue-500 shadow-lg shadow-blue-500/20' 
              : 'bg-white border-blue-500 shadow-lg shadow-blue-500/15 ring-1 ring-blue-500/5'
            : isDark
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
              : 'bg-white border-gray-300 hover:border-gray-400 shadow-sm'
        }`}>
          <HiMagnifyingGlass className={`w-5 h-5 flex-shrink-0 ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`} />
          
          <input
            type="text"
            placeholder="Enter website URL (e.g., github.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyPress={handleKeyPress}
            className={`flex-1 bg-transparent outline-none font-medium ${
              isDark 
                ? 'text-white placeholder-gray-500' 
                : 'text-gray-900 placeholder-gray-400'
            }`}
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSearch}
            disabled={loading || !url}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-black transition-all shadow-md hover:shadow-lg disabled:cursor-not-allowed flex-shrink-0 text-sm"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <HiMagnifyingGlass className="w-4 h-4" />
                </motion.div>
                <span>Analyzing...</span>
              </div>
            ) : (
              "Analyze"
            )}
          </motion.button>
        </div>
      </div>

      {/* Hint */}
      <p className={`text-center text-xs mt-2 ${
        isDark ? 'text-gray-500' : 'text-gray-600'
      }`}>
        💡 Tip: Press <kbd className={`px-2 py-0.5 rounded text-xs font-mono ${
          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-200 border border-gray-400'
        }`}>Enter</kbd> to analyze quickly
      </p>
    </motion.div>
  );
}
