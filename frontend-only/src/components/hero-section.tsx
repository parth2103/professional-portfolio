// src/components/hero-section.tsx
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "./floating-shapes";
import { fadeInUp, buttonHover } from "@/lib/animations";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      <FloatingShapes />

      {/* Hero Content + Profile Image */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold text-muted-foreground mb-4"
          >
            Hi, I'm Parth Gohil
          </motion.h1>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black leading-tight"
          >
            <span className="gradient-text">CREATIVE</span>
            <br />
            <span className="text-foreground">DEVELOPER</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mt-4"
          >
            I build full stack apps, play around with cloud stuff, and try to write code that won’t haunt me later.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8"
          >
            <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="gradient-bg px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
              <Button
                asChild
                className="gradient-bg px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1Xx87Bsl8jylkXqlDIF0a6TIrhcnGbvyh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/profile.jpg"
            alt="Parth Gohil"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="scroll-indicator text-foreground cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <ChevronDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
