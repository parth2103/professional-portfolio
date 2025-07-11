import { motion } from "framer-motion";

export function CodingWorkspaceArt() {
  return (
    <motion.div
      className="w-full h-full min-h-[400px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(222, 84%, 8%)" />
            <stop offset="100%" stopColor="hsl(222, 84%, 12%)" />
          </linearGradient>
          
          <linearGradient id="keyboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 20%, 25%)" />
            <stop offset="100%" stopColor="hsl(220, 20%, 15%)" />
          </linearGradient>
        </defs>
        
        <rect width="800" height="600" fill="url(#bgGradient)" />
        
        {/* Desk */}
        <rect x="50" y="450" width="700" height="150" fill="hsl(30, 20%, 30%)" rx="10" />
        
        {/* Monitor Base */}
        <rect x="320" y="420" width="160" height="40" fill="hsl(220, 20%, 20%)" rx="5" />
        <rect x="370" y="400" width="60" height="30" fill="hsl(220, 20%, 25%)" rx="3" />
        
        {/* Monitor Screen */}
        <rect x="250" y="150" width="300" height="250" fill="hsl(220, 20%, 15%)" rx="10" />
        <rect x="260" y="160" width="280" height="230" fill="url(#screenGradient)" rx="5" />
        
        {/* Code on Screen */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Code Lines */}
          <rect x="280" y="180" width="60" height="3" fill="hsl(var(--primary))" />
          <rect x="350" y="180" width="80" height="3" fill="hsl(var(--secondary))" />
          <rect x="440" y="180" width="40" height="3" fill="hsl(var(--accent))" />
          
          <rect x="280" y="200" width="40" height="3" fill="hsl(var(--cyan))" />
          <rect x="330" y="200" width="100" height="3" fill="hsl(var(--emerald))" />
          <rect x="440" y="200" width="60" height="3" fill="hsl(var(--orange))" />
          
          <rect x="280" y="220" width="80" height="3" fill="hsl(var(--purple))" />
          <rect x="370" y="220" width="50" height="3" fill="hsl(var(--pink))" />
          <rect x="430" y="220" width="70" height="3" fill="hsl(var(--blue))" />
          
          <rect x="280" y="240" width="50" height="3" fill="hsl(var(--green))" />
          <rect x="340" y="240" width="90" height="3" fill="hsl(var(--yellow))" />
          <rect x="440" y="240" width="45" height="3" fill="hsl(var(--red))" />
          
          {/* Cursor */}
          <motion.rect
            x="330" y="240"
            width="2"
            height="10"
            fill="hsl(var(--primary))"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>
        
        {/* Keyboard */}
        <rect x="200" y="480" width="400" height="80" fill="url(#keyboardGradient)" rx="8" />
        
        {/* Keys */}
        <g>
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <rect
                x={220 + (i % 13) * 28}
                y={490 + Math.floor(i / 13) * 15}
                width="20"
                height="10"
                fill="hsl(220, 20%, 35%)"
                rx="2"
              />
            </g>
          ))}
        </g>
        
        {/* Mouse */}
        <ellipse cx="650" cy="500" rx="25" ry="35" fill="hsl(220, 20%, 25%)" />
        <ellipse cx="650" cy="500" rx="20" ry="30" fill="hsl(220, 20%, 30%)" />
        
        {/* Coffee Cup */}
        <ellipse cx="120" cy="480" rx="20" ry="25" fill="hsl(30, 40%, 60%)" />
        <ellipse cx="120" cy="470" rx="18" ry="23" fill="hsl(30, 40%, 70%)" />
        <ellipse cx="120" cy="465" rx="15" ry="3" fill="hsl(30, 60%, 30%)" />
        
        {/* Coffee Steam */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M115 450 Q118 440 115 430" stroke="hsl(0, 0%, 80%)" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M120 450 Q123 440 120 430" stroke="hsl(0, 0%, 80%)" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M125 450 Q128 440 125 430" stroke="hsl(0, 0%, 80%)" strokeWidth="2" fill="none" opacity="0.5" />
        </motion.g>
        
        {/* Plant */}
        <ellipse cx="680" cy="490" rx="15" ry="20" fill="hsl(120, 40%, 35%)" />
        <ellipse cx="680" cy="485" rx="12" ry="15" fill="hsl(120, 50%, 45%)" />
        <circle cx="675" cy="480" r="8" fill="hsl(120, 60%, 50%)" />
        <circle cx="685" cy="475" r="6" fill="hsl(120, 60%, 55%)" />
        
        {/* Books */}
        <rect x="600" y="440" width="20" height="80" fill="hsl(220, 80%, 60%)" />
        <rect x="620" y="445" width="20" height="75" fill="hsl(280, 80%, 60%)" />
        <rect x="640" y="450" width="20" height="70" fill="hsl(340, 80%, 60%)" />
        
        {/* Floating Code Particles */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="600" cy="200" r="2" fill="hsl(var(--primary))" opacity="0.6" />
          <circle cx="650" cy="250" r="1.5" fill="hsl(var(--secondary))" opacity="0.5" />
          <circle cx="180" cy="300" r="2.5" fill="hsl(var(--accent))" opacity="0.4" />
          <circle cx="700" cy="350" r="1.8" fill="hsl(var(--cyan))" opacity="0.6" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

export function TechStackVisualization() {
  return (
    <motion.div
      className="w-full h-full min-h-[300px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Central Hub */}
        <circle cx="300" cy="200" r="40" fill="url(#techGradient)" />
        <text x="300" y="205" textAnchor="middle" className="fill-white text-sm font-bold">Dev</text>
        
        {/* Tech Nodes */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 200px" }}
        >
          {/* React */}
          <circle cx="200" cy="100" r="25" fill="hsl(var(--cyan))" opacity="0.8" />
          <text x="200" y="105" textAnchor="middle" className="fill-white text-xs font-semibold">React</text>
          
          {/* Node.js */}
          <circle cx="400" cy="120" r="25" fill="hsl(var(--green))" opacity="0.8" />
          <text x="400" y="125" textAnchor="middle" className="fill-white text-xs font-semibold">Node</text>
          
          {/* AWS */}
          <circle cx="480" cy="280" r="25" fill="hsl(var(--orange))" opacity="0.8" />
          <text x="480" y="285" textAnchor="middle" className="fill-white text-xs font-semibold">AWS</text>
          
          {/* Database */}
          <circle cx="120" cy="300" r="25" fill="hsl(var(--purple))" opacity="0.8" />
          <text x="120" y="305" textAnchor="middle" className="fill-white text-xs font-semibold">DB</text>
        </motion.g>
        
        {/* Connecting Lines */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 200px" }}
        >
          <line x1="300" y1="200" x2="200" y2="100" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
          <line x1="300" y1="200" x2="400" y2="120" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.5" />
          <line x1="300" y1="200" x2="480" y2="280" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.5" />
          <line x1="300" y1="200" x2="120" y2="300" stroke="hsl(var(--cyan))" strokeWidth="2" opacity="0.5" />
        </motion.g>
      </svg>
    </motion.div>
  );
}