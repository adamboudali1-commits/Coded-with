// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * Reusable Bento Card component with glassmorphism aesthetic
 * Supports multiple variants and interactive states
 */
export default function BentoCard({
  title,
  subtitle,
  value,
  icon: Icon,
  description,
  onClick,
  accentColor = "from-purple-400 to-purple-600",
  children,
  className = "",
  isInteractive = true,
  index = 0
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -4,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const finalVariants = isInteractive 
    ? { ...cardVariants, hover: hoverVariants.hover } 
    : cardVariants;

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={finalVariants}
      whileHover={isInteractive ? "hover" : {}}
      onClick={onClick}
      className={`relative group ${isInteractive ? "cursor-pointer" : ""}`}
    >
      {/* Animated gradient background (hidden by default, shown on hover) */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-br ${accentColor} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
          isInteractive ? "" : "opacity-20"
        }`}
      ></div>

      {/* Main card */}
      <div
        className={`relative h-full rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] 
        hover:border-white/20 transition-all duration-300 overflow-hidden
        ${className}`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Content container */}
        <div className="p-6 md:p-8 h-full flex flex-col">
          {/* Header section */}
          <header className="flex items-start justify-between gap-4 mb-4">
            {Icon && (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex-shrink-0"
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </motion.div>
            )}

            {value && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className="text-right flex-1"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                  {value}
                </div>
                {subtitle && (
                  <p className="text-xs md:text-sm text-white/50 mt-1 font-medium">
                    {subtitle}
                  </p>
                )}
              </motion.div>
            )}
          </header>

          {/* Title */}
          {title && (
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">
              {title}
            </h3>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm text-white/60 mb-4 flex-1 line-clamp-3">
              {description}
            </p>
          )}

          {/* Custom children content */}
          {children && <div className="flex-1 mb-4">{children}</div>}

          {/* Footer with action indicator */}
          {isInteractive && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 + 0.2 }}
              className="flex items-center text-white/50 group-hover:text-white/100 transition-colors text-sm font-medium mt-auto"
            >
              <span>View details</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="ml-2"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
