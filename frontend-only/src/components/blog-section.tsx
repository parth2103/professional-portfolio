// src/components/BlogSection.tsx
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer } from "@/lib/animations";

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
      title: "5 AI Trends Shaping Innovation and ROI in 2025",
      excerpt:
        "A look at how AI reasoning, custom silicon, hyperscale migrations, and agentic models are driving enterprise value this year.",
      date: "2025-03-20",
      readTime: "8 min read",
      category: "AI",
      image:
        "/public/artificial-intelligence.jpg",
      link:
        "https://www.morganstanley.com/insights/articles/ai-trends-reasoning-frontier-models-2025-tmt",
      tags: ["AI Trends", "Custom Silicon", "Agentic Models"],
    },
    {
      title: "The 2025 AI Index Report",
      excerpt:
        "Stanford HAI’s annual deep dive into AI performance benchmarks, real-world deployments, and investment flows across sectors.",
      date: "2025-01-15",
      readTime: "12 min read",
      category: "AI",
      image:
        "/public/articial-intelligence-2.jpg",
      link: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
      tags: ["AI Benchmarks", "Investments", "Deployments"],
    },
    {
      title: "Five Transformative AI Technology Trends Shaping 2025",
      excerpt:
        "Forbes experts explore autonomous agents, online learning systems, micro-LLMs, and more breakthroughs to watch.",
      date: "2025-04-15",
      readTime: "7 min read",
      category: "AI",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link:
        "https://www.forbes.com/councils/forbestechcouncil/2025/04/15/five-transformative-ai-technology-trends-shaping-2025/",
      tags: ["Autonomous Agents", "Online Learning", "Micro-LLMs"],
    },
    {
      title: "10 Cyber Security Trends For 2025",
      excerpt:
        "SentinelOne breaks down the top threat vectors, rising vulnerabilities, and prevention strategies for the year ahead.",
      date: "2025-01-10",
      readTime: "9 min read",
      category: "Cybersecurity",
      image:
        "/public/cybersecurity-1.jpg",
      link:
        "https://www.sentinelone.com/cybersecurity-101/cybersecurity/cyber-security-trends/",
      tags: ["Threat Vectors", "Vulnerabilities", "Prevention Strategies"],
    },
    {
      title: "Top Cybersecurity Trends to Watch in 2025",
      excerpt:
        "J.P. Morgan’s view on nation-state activity, AI-powered exploits, supply-chain attacks, and more key vectors.",
      date: "2025-02-01",
      readTime: "8 min read",
      category: "Cybersecurity",
      image:
        "/public/cybersecurity-2.jpg",
      link:
        "https://www.jpmorgan.com/technology/technology-blog/top-cybersecurity-trends-to-watch-in-2025",
      tags: ["Nation-State Threats", "Supply-Chain Attacks", "AI Exploits"],
    },
    {
      title: "Top 12 Cyber Security Trends And Predictions For 2025",
      excerpt:
        "Splashtop forecasts how AI will supercharge threat intelligence, automated response, and zero-trust adoption.",
      date: "2025-02-10",
      readTime: "10 min read",
      category: "Cybersecurity",
      image:
        "/public/cybersecurity-3.jpg",
      link: "https://www.splashtop.com/blog/cybersecurity-trends-2025",
      tags: ["Threat Intelligence", "Automated Response", "Zero Trust"],
    },
    {
      title: "Top 10 Emerging Technologies of 2025",
      excerpt:
        "World Economic Forum highlights breakthrough domains—from generative-AI watermarking to green fertilizer production.",
      date: "2025-06-01",
      readTime: "11 min read",
      category: "Emerging Tech",
      image:
        "/public/emerging-tech-3.jpeg",
      link:
        "https://www.weforum.org/stories/2025/06/top-10-emerging-technologies-of-2025/",
      tags: ["Generative AI", "Green Tech", "Watermarking"],
    },
    {
      title: "Tech Trends 2025",
      excerpt:
        "Deloitte dives into spatial computing, AI-powered IT transformation, and next-gen software development paradigms.",
      date: "2025-01-20",
      readTime: "10 min read",
      category: "Emerging Tech",
      image:
        "/public/emerging-tech-2.jpeg",
      link:
        "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends.html",
      tags: ["Spatial Computing", "IT Transformation", "Software Development"],
    },
    {
      title: "25 New Technology Trends for 2025",
      excerpt:
        "Simplilearn’s exhaustive list—from quantum computing and XR to neuromorphic chips and biotech innovations.",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Emerging Tech",
      image:
        "/public/emerging-tech-1.jpg",
      link:
        "https://www.simplilearn.com/top-technology-trends-and-jobs-article",
      tags: ["Quantum Computing", "XR", "Biotech"],
    },
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
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-secondary transition-colors p-0 justify-start mt-auto"
                      onClick={() => window.open(post.link, "_blank")}
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
