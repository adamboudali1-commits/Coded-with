// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/**
 * Skeleton loader component for BentoCard
 * Displays animated placeholder while data is loading
 */
export default function BentoCardSkeleton({ index = 0 }) {
  const skeletonVariants = {
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

  const shimmerVariants = {
    shimmer: {
      backgroundPosition: ["200% center", "-200% center"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={skeletonVariants}
      className="relative group"
    >
      {/* Gradient background */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Main skeleton card */}
      <div className="relative h-full rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="p-6 md:p-8 h-full flex flex-col">
          {/* Icon skeleton */}
          <motion.div
            animate={shimmerVariants.shimmer}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%)",
              backgroundSize: "200% center"
            }}
            className="w-12 h-12 rounded-xl mb-4"
          ></motion.div>

          {/* Title skeleton */}
          <motion.div
            animate={shimmerVariants.shimmer}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%)",
              backgroundSize: "200% center"
            }}
            className="h-8 rounded-lg mb-3 w-3/4"
          ></motion.div>

          {/* Description skeleton */}
          <motion.div
            animate={shimmerVariants.shimmer}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%)",
              backgroundSize: "200% center"
            }}
            className="h-4 rounded-lg mb-2 w-full"
          ></motion.div>

          <motion.div
            animate={shimmerVariants.shimmer}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%)",
              backgroundSize: "200% center"
            }}
            className="h-4 rounded-lg w-5/6 mb-4"
          ></motion.div>

          {/* Footer skeleton */}
          <motion.div
            animate={shimmerVariants.shimmer}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%)",
              backgroundSize: "200% center"
            }}
            className="h-4 rounded-lg w-1/3 mt-auto"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
