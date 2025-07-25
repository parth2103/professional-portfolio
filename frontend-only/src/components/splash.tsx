// src/components/Splash.tsx
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
interface SplashProps {
  onFinish: () => void
}

export function Splash({ onFinish }: SplashProps) {
  useEffect(() => {
    // Dismiss after 2s—feel free to adjust
    const timeout = setTimeout(onFinish, 2000)
    return () => clearTimeout(timeout)
  }, [onFinish])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {/* swap in your logo or initials SVG here */}
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="w-90 h-90"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1, transition: { duration: 1, ease: 'easeOut' } }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
