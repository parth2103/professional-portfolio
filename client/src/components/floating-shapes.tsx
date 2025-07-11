import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="floating-shape w-32 h-32 bg-primary"
        style={{ top: "20%", right: "20%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-shape w-24 h-24 bg-secondary"
        style={{ top: "40%", left: "10%" }}
        animate={{
          y: [0, -15, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="floating-shape w-40 h-40 bg-accent"
        style={{ bottom: "20%", right: "40%" }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="floating-shape w-20 h-20 bg-cyan"
        style={{ bottom: "40%", left: "20%" }}
        animate={{
          y: [0, -10, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="floating-shape w-28 h-28 bg-emerald"
        style={{ top: "60%", right: "10%" }}
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
}
