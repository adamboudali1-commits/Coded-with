// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiSparkles, HiCodeBracket } from "react-icons/hi2";

export default function Header({ theme }) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-4 mb-8"
    >
      <div className={`flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest ${
        isDark ? 'text-blue-400' : 'text-blue-600'
      }`}>
        <div className={`h-px flex-1 max-w-20 ${
          isDark ? 'bg-gradient-to-r from-transparent to-blue-500' : 'bg-gradient-to-r from-transparent to-blue-300'
        }`}></div>
        <span className="flex items-center gap-1.5">
          <HiCodeBracket className="w-4 h-4" />
          TECH STACK ANALYZER
          <HiSparkles className="w-4 h-4" />
        </span>
        <div className={`h-px flex-1 max-w-20 ${
          isDark ? 'bg-gradient-to-l from-transparent to-blue-500' : 'bg-gradient-to-l from-transparent to-blue-300'
        }`}></div>
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
      >
        <span className={isDark ? 'text-white' : 'text-gray-900'}>
          Discover Web Technologies
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className={`text-base max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
        Instantly analyze any website's complete technology stack. Detect frameworks, languages, libraries, and tools with confidence scoring.
      </motion.p>
    </motion.div>
  );
}
