// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiChartBar, HiCube } from "react-icons/hi2";

export default function StatsBar({ total, categories, theme }) {
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-4 mb-6"
    >
      <motion.div variants={itemVariants} className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className={`relative rounded-xl p-5 shadow-lg hover:shadow-xl transition-all ${
          isDark ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Technologies
              </p>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              >
                {total}
              </motion.p>
            </div>
            <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-900/50' : 'bg-blue-50'}`}>
              <HiChartBar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className={`relative rounded-xl p-5 shadow-lg hover:shadow-xl transition-all ${
          isDark ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Categories
              </p>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                {categories}
              </motion.p>
            </div>
            <div className={`p-3 rounded-lg ${isDark ? 'bg-purple-900/50' : 'bg-purple-50'}`}>
              <HiCube className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
