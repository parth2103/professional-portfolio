import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { ProjectsExpandable } from "./projects-expandable";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            A showcase of my latest work in web development, AI, and innovative solutions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <ProjectsExpandable />
        </motion.div>
      </div>
    </section>
  );
}
