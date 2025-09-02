// src/components/hero-section.tsx
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "./floating-shapes";
import { fadeInUp, buttonHover } from "@/lib/animations";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

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
      className="pt-20 md:pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent"
    >
      <FloatingShapes />

      {/* Hero Content + Profile Image */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-12">
        {/* Text Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center md:text-left flex-shrink-0 w-full md:w-[600px]"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg"
          >
            Hi, I'm Parth Gohil
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black leading-tight mb-6"
          >
            <div className="flex items-baseline justify-center md:justify-start mb-2">
              <ContainerTextFlip 
                words={["FULLSTACK", "CREATIVE", "PASSIONATE", "INNOVATIVE"]}
                interval={2000}
                className="border-2 border-white/30 rounded-lg p-2 text-3xl md:text-8xl font-black text-white bg-transparent"
                textClassName="text-3xl md:text-8xl font-black text-white"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-8xl font-black text-white drop-shadow-lg">DEVELOPER</span>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 max-w-xl mx-auto md:mx-0 mb-8 drop-shadow-lg"
          >
            I build full stack apps, play around with cloud stuff, and try to write code that won’t haunt me later.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
          <CardContainer className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <CardBody className="w-full h-full">
              <CardItem
                translateZ="50"
                className="w-full h-full"
              >
                <img
                  src="/profile.jpg"
                  alt="Parth Gohil"
                  className="w-full h-full rounded-full object-cover border-4 border-primary shadow-2xl"
                />
              </CardItem>
              <CardItem
                translateZ="20"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
              >
                <div className="w-full h-full" />
              </CardItem>
              <CardItem
                translateZ="10"
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/10 to-transparent"
              >
                <div className="w-full h-full" />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="scroll-indicator text-white cursor-pointer drop-shadow-lg"
        onClick={() => scrollToSection("#about")}
      >
        <ChevronDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
