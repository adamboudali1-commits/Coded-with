import { motion } from "framer-motion";
import { HiXMark, HiExclamationTriangle } from "react-icons/hi2";

export default function ErrorBanner({ error, onClose, theme }) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className={`rounded-lg p-4 shadow-lg flex items-start gap-3 border ${
        isDark 
          ? 'bg-red-900/20 border-red-800' 
          : 'bg-red-50 border-red-300 shadow-md'
      }`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isDark ? 'bg-red-900' : 'bg-red-500'
        }`}>
          <HiExclamationTriangle className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold text-sm ${
            isDark ? 'text-red-400' : 'text-red-800'
          }`}>Analysis Error</h3>
          <p className={`text-sm mt-1 ${
            isDark ? 'text-red-300' : 'text-red-800'
          }`}>{error}</p>
        </div>
        <button
          onClick={onClose}
          className={`transition-colors p-1 rounded ${
            isDark 
              ? 'text-red-400 hover:text-red-300 hover:bg-red-900/30' 
              : 'text-red-600 hover:text-red-700 hover:bg-red-100'
          }`}
        >
          <HiXMark className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
