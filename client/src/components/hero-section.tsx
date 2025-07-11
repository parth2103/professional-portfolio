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

  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume/download");
      const data = await response.json();
      
      if (data.success) {
        // Create a downloadable file from the resume data
        const blob = new Blob([JSON.stringify(data.data, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Parth_Gohil_Resume.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      <FloatingShapes />

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
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
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Full Stack Developer • Software Engineer • Cloud Enthusiast
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
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
                onClick={handleDownloadResume}
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
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
