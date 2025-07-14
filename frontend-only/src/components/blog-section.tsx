import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  link: string;
  tags: string[];
}

export function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  const blogPosts: BlogPost[] = [
    {
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt: "Learn how to architect and deploy robust microservices using modern containerization techniques and best practices for production environments.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      link: "#",
      tags: ["Node.js", "Docker", "Microservices", "DevOps"]
    },
    {
      title: "Modern React Patterns: Server Components and Streaming",
      excerpt: "Exploring the latest React patterns including Server Components, Suspense, and streaming for better performance and user experience.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      link: "#",
      tags: ["React", "TypeScript", "Performance", "SSR"]
    },
    {
      title: "AWS Infrastructure as Code: From Zero to Production",
      excerpt: "Complete guide to building and managing cloud infrastructure using Terraform, covering everything from basic setup to advanced patterns.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      link: "#",
      tags: ["AWS", "Terraform", "IaC", "Cloud"]
    },
    {
      title: "Database Performance Optimization: PostgreSQL Edition",
      excerpt: "Deep dive into PostgreSQL optimization techniques, indexing strategies, and query performance tuning for high-traffic applications.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      link: "#",
      tags: ["PostgreSQL", "Performance", "Database", "Optimization"]
    },
    {
      title: "Building Real-time Applications with WebSockets",
      excerpt: "Learn how to implement real-time features using WebSockets, including chat systems, live updates, and collaborative features.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      link: "#",
      tags: ["WebSockets", "Real-time", "Node.js", "JavaScript"]
    },
    {
      title: "Machine Learning in Production: Deployment Strategies",
      excerpt: "Practical guide to deploying ML models in production environments, covering containerization, monitoring, and scaling strategies.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      link: "#",
      tags: ["ML", "Python", "Deployment", "MLOps"]
    }
  ];
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);
  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
        >
          Latest Articles
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Insights, tutorials, and thoughts on modern web development, cloud architecture, and software engineering best practices.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        <AnimatePresence mode="wait">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="h-full"
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-secondary transition-colors p-0 justify-start mt-auto"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
        {blogPosts.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "View All Articles"}
              </Button>
            </div>
          </motion.div>

        )}
      </div>
    </section>
  );
}