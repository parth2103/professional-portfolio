import { motion } from "framer-motion";
import { 
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiCplusplus,

  SiDocker,
  SiKubernetes,
  SiGit,
  SiTerraform,
  SiJenkins
} from "react-icons/si";
import { FiCode, FiCoffee } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import { FloatingDock } from "@/components/ui/floating-dock";

export function SkillsSection() {
  const allSkills = [
    // Frontend
    { title: "React", icon: <SiReact className="h-6 w-6" /> },
    { title: "TypeScript", icon: <SiTypescript className="h-6 w-6" /> },
    { title: "JavaScript", icon: <SiJavascript className="h-6 w-6" /> },
    { title: "HTML5", icon: <SiHtml5 className="h-6 w-6" /> },
    { title: "CSS3", icon: <SiCss3 className="h-6 w-6" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="h-6 w-6" /> },
    
    // Backend
    { title: "Node.js", icon: <SiNodedotjs className="h-6 w-6" /> },
    { title: "Python", icon: <SiPython className="h-6 w-6" /> },
    { title: "Java", icon: <FiCoffee className="h-6 w-6" /> },
    { title: "SQL", icon: <SiMysql className="h-6 w-6" /> },
    { title: "C++", icon: <SiCplusplus className="h-6 w-6" /> },
    { title: "APIs", icon: <FiCode className="h-6 w-6" /> },
    
    // Cloud & DevOps
    { title: "AWS", icon: <FaAws className="h-6 w-6" /> },
    { title: "Docker", icon: <SiDocker className="h-6 w-6" /> },
    { title: "Kubernetes", icon: <SiKubernetes className="h-6 w-6" /> },
    { title: "Git", icon: <SiGit className="h-6 w-6" /> },
    { title: "Terraform", icon: <SiTerraform className="h-6 w-6" /> },
    { title: "Jenkins", icon: <SiJenkins className="h-6 w-6" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Technical Skills
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <FloatingDock 
            items={allSkills}
            desktopClassName="max-w-6xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
