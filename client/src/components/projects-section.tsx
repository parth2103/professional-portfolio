import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, projectCardHover } from "@/lib/animations";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "AI-Powered Checkers Game",
      description: "Developed an unbeatable checkers AI using Python, Minimax algorithm, and alpha-beta pruning. Optimized for speed with custom heuristics.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "PyGame", "AI/ML"],
      github: "#",
      demo: "#",
      colors: {
        primary: "bg-blue",
        secondary: "bg-purple",
        accent: "bg-green",
      },
    },
    {
      title: "Infrastructure as Code",
      description: "Provisioned 15+ AWS resources using Terraform and deployed microservices on EKS. Automated CI/CD with GitHub Actions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tech: ["AWS", "Terraform", "Kubernetes"],
      github: "#",
      demo: "#",
      colors: {
        primary: "bg-orange",
        secondary: "bg-purple",
        accent: "bg-blue",
      },
    },
    {
      title: "Student Information System",
      description: "Built a backend enrollment system with RBAC and optimized SQL queries. Supports 1,000+ concurrent users with real-time updates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tech: ["Node.js", "PostgreSQL", "React"],
      github: "#",
      demo: "#",
      colors: {
        primary: "bg-green",
        secondary: "bg-blue",
        accent: "bg-cyan",
      },
    },
    {
      title: "Cloud-Based Chat Server",
      description: "Deployed secure chat system with VoIP and video conferencing using Kubernetes. Achieved 99.9% uptime with real-time communication.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tech: ["Kubernetes", "PostgreSQL", "Nginx"],
      github: "#",
      demo: "#",
      colors: {
        primary: "bg-blue",
        secondary: "bg-green",
        accent: "bg-muted-foreground",
      },
    },
    {
      title: "ML-Based Resume Parser",
      description: "Built a serverless resume parsing tool using scikit-learn and spaCy. Deployed on AWS Lambda for real-time candidate data classification.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "AWS Lambda", "ML"],
      github: "#",
      demo: "#",
      colors: {
        primary: "bg-blue",
        secondary: "bg-orange",
        accent: "bg-purple",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectCardHover}
              whileHover="hover"
              className="project-card h-full"
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-secondary transition-colors p-0"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-secondary transition-colors p-0"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
