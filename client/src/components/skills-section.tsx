import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  GitBranch, 
  Cpu,
  Palette,
  Zap,
  Globe,
  Settings,
  Monitor,
  Smartphone
} from "lucide-react";
import { staggerContainer, skillCardHover } from "@/lib/animations";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

export function SkillsSection() {
  const frontendSkills: Skill[] = [
    { name: "React", icon: <Code size={32} />, level: 90, color: "text-cyan" },
    { name: "JavaScript", icon: <Zap size={32} />, level: 95, color: "text-yellow" },
    { name: "HTML5", icon: <Globe size={32} />, level: 95, color: "text-orange" },
    { name: "CSS3", icon: <Palette size={32} />, level: 90, color: "text-blue" },
    { name: "UI/UX", icon: <Monitor size={32} />, level: 75, color: "text-purple" },
    { name: "Tailwind", icon: <Smartphone size={32} />, level: 85, color: "text-primary" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", icon: <Server size={32} />, level: 85, color: "text-green" },
    { name: "Python", icon: <Code size={32} />, level: 90, color: "text-blue" },
    { name: "Java", icon: <Cpu size={32} />, level: 80, color: "text-red" },
    { name: "SQL", icon: <Database size={32} />, level: 85, color: "text-emerald" },
    { name: "C++", icon: <Settings size={32} />, level: 75, color: "text-secondary" },
    { name: "APIs", icon: <Zap size={32} />, level: 90, color: "text-accent" },
  ];

  const cloudSkills: Skill[] = [
    { name: "AWS", icon: <Cloud size={32} />, level: 85, color: "text-orange" },
    { name: "Docker", icon: <Server size={32} />, level: 80, color: "text-blue" },
    { name: "Kubernetes", icon: <Settings size={32} />, level: 75, color: "text-cyan" },
    { name: "Jenkins", icon: <GitBranch size={32} />, level: 70, color: "text-muted-foreground" },
    { name: "Git", icon: <GitBranch size={32} />, level: 95, color: "text-orange" },
    { name: "Terraform", icon: <Cloud size={32} />, level: 80, color: "text-emerald" },
  ];

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <motion.div
      variants={skillCardHover}
      whileHover="hover"
      className="skill-card bg-card p-6 rounded-xl text-center cursor-pointer border border-border hover:border-primary/30 transition-all duration-300"
    >
      <div className={`${skill.color} mb-4 flex justify-center`}>
        {skill.icon}
      </div>
      <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-2 rounded-full bg-gradient-to-r from-primary to-secondary`}
        />
      </div>
      <span className="text-xs text-muted-foreground mt-1 block">
        {skill.level}%
      </span>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Technical Skills
        </motion.h2>

        {/* All Skills in One Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {[...frontendSkills, ...backendSkills, ...cloudSkills].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-primary">Frontend</h3>
            <p className="text-muted-foreground text-sm">React, JavaScript, UI/UX</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-secondary">Backend</h3>
            <p className="text-muted-foreground text-sm">Node.js, Python, Databases</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-accent">Cloud & DevOps</h3>
            <p className="text-muted-foreground text-sm">AWS, Docker, Kubernetes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
