// src/pages/home.tsx
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-6">
          {/* Profile + Name/Role/Legal Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Your Image */}
            <img
              src="/profile.jpg"
              alt="Parth Gohil"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary"
            />

            {/* Text Block */}
            <div className="text-center md:text-left space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="gradient-text text-3xl md:text-4xl font-bold"
              >
                Parth Gohil
              </motion.div>
              <p className="text-muted-foreground text-lg">
                Full Stack Developer & Software Engineer
              </p>
              <nav className="flex justify-center md:justify-start gap-6">
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/sitemap"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sitemap
                </a>
              </nav>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/parth2103"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary transition-colors"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/parth--gohil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary transition-colors"
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-primary hover:underline"
            >
              ↑ Back to Top
            </button>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Parth Gohil. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
