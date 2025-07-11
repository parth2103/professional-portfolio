import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export function ProgressiveImage({ 
  src, 
  alt, 
  className = "", 
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJoc2woMjE3LCAzMiUsIDE3JSkiLz4KPC9zdmc+"
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.querySelector(`[data-src="${src}"]`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [src]);
  
  useEffect(() => {
    if (isInView) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = src;
    }
  }, [isInView, src]);
  
  return (
    <div className={`relative overflow-hidden ${className}`} data-src={src}>
      {/* Placeholder */}
      <motion.img
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(10px)" }}
      />
      
      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}