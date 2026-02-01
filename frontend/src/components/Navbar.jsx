// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDark 
          ? 'bg-gray-900/95 border-gray-800' 
          : 'bg-white/95 border-gray-200'
      } backdrop-blur-md border-b transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-lg overflow-hidden ${
                isDark 
                  ? 'bg-gray-800/50 shadow-lg' 
                  : 'bg-white shadow-md border-2 border-gray-200'
              }`}
            >
              <img 
                src="/logo.png" 
                alt="Coded-With Logo" 
                className="h-12 w-auto object-contain p-1.5"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                coded-with
              </span>
              <span className={`text-xs ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Tech Stack Analyzer
              </span>
            </div>
          </div>

          {/* Right side - Theme Toggle & Social Links */}
          <div className="flex items-center space-x-2">
            {/* GitHub Link */}
            <motion.a
              href="https://github.com/adamboudali1-commits"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-200 text-gray-700 hover:text-gray-900'
              }`}
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a
              href="https://www.linkedin.com/in/adam-boudali-2924a6360/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-blue-400'
                  : 'hover:bg-gray-200 text-gray-700 hover:text-blue-700'
              }`}
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-all duration-200 ml-2 ${
                isDark
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-200 text-amber-600 hover:bg-gray-300'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
