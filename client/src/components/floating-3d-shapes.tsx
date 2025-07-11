import { motion } from "framer-motion";

export function Floating3DShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3D Cube */}
      <motion.div
        className="absolute w-32 h-32 opacity-10"
        style={{ top: "20%", right: "15%" }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full relative transform-gpu">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl transform rotate-12 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-xl transform -rotate-12 translate-x-2 translate-y-2 shadow-2xl" />
        </div>
      </motion.div>

      {/* 3D Sphere */}
      <motion.div
        className="absolute w-24 h-24 opacity-15"
        style={{ top: "60%", left: "10%" }}
        animate={{
          rotateX: [0, 360],
          rotateZ: [0, 360],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan to-emerald shadow-2xl" />
      </motion.div>

      {/* 3D Pyramid */}
      <motion.div
        className="absolute w-28 h-28 opacity-12"
        style={{ bottom: "30%", right: "25%" }}
        animate={{
          rotateY: [0, 360],
          rotateZ: [0, 180, 360],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-t from-orange to-yellow clip-path-triangle transform rotate-45 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow to-pink clip-path-triangle transform -rotate-45 translate-x-1 translate-y-1 shadow-2xl" />
        </div>
      </motion.div>

      {/* 3D Hexagon */}
      <motion.div
        className="absolute w-20 h-20 opacity-10"
        style={{ top: "40%", left: "70%" }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple to-pink rounded-full shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink to-red rounded-full transform scale-75 shadow-2xl" />
        </div>
      </motion.div>

      {/* Floating Code Blocks */}
      <motion.div
        className="absolute w-16 h-16 opacity-8"
        style={{ bottom: "50%", left: "25%" }}
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue to-cyan rounded-lg shadow-2xl flex items-center justify-center">
          <div className="text-white text-xs font-mono">{`</>`}</div>
        </div>
      </motion.div>

      {/* Database Symbol */}
      <motion.div
        className="absolute w-12 h-12 opacity-8"
        style={{ top: "70%", right: "45%" }}
        animate={{
          rotateY: [0, 360],
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-green to-emerald rounded-full shadow-2xl flex items-center justify-center">
          <div className="text-white text-xs">DB</div>
        </div>
      </motion.div>
    </div>
  );
}