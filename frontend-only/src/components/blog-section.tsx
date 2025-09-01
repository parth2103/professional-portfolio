// src/components/BlogSection.tsx
import { motion } from "framer-motion";
import Carousel from "@/components/ui/carousel";

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

  const blogPosts: BlogPost[] = [
    {
      title: "What I’m Learning While Building an AI Cybersecurity Tool",
      excerpt:
        "From fraud detection to deepfakes, here’s how AI is transforming cybersecurity and what I’ve discovered along the way.",
      date: "2025-07-07",
      readTime: "6 min read",
      category: "Cyber-AI",
      image:
        "/cybersecurity-2.jpg",
      link:
        "https://medium.com/@parth2103/what-im-learning-while-building-an-ai-cybersecurity-tool-c64573fca342",
      tags: ["My Article"],
    },
    {
      title: "5 AI Trends Shaping Innovation and ROI in 2025",
      excerpt:
        "A look at how AI reasoning, custom silicon, hyperscale migrations, and agentic models are driving enterprise value this year.",
      date: "2025-03-20",
      readTime: "8 min read",
      category: "AI",
      image:
        "/artificial-intelligence.jpg",
      link:
        "https://www.morganstanley.com/insights/articles/ai-trends-reasoning-frontier-models-2025-tmt",
      tags: ["AI Trends", "Custom Silicon", "Agentic Models"],
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
      title: "Top 12 Cyber Security Trends And Predictions For 2025",
      excerpt:
        "Splashtop forecasts how AI will supercharge threat intelligence, automated response, and zero-trust adoption.",
      date: "2025-02-10",
      readTime: "10 min read",
      category: "Cybersecurity",
      image:
        "/cybersecurity-3.jpg",
      link: "https://www.splashtop.com/blog/cybersecurity-trends-2025",
      tags: ["Threat Intelligence", "Automated Response", "Zero Trust"],
    },
    {
      title: "25 New Technology Trends for 2025",
      excerpt:
        "Simplilearn’s exhaustive list—from quantum computing and XR to neuromorphic chips and biotech innovations.",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Emerging Tech",
      image:
        "/emerging-tech-1.jpg",
      link:
        "https://www.simplilearn.com/top-technology-trends-and-jobs-article",
      tags: ["Quantum Computing", "XR", "Biotech"],
    },
  ];

  // Transform blog posts to carousel slide format
  const carouselSlides = blogPosts.map(post => ({
    title: post.title,
    button: "Read Article",
    src: post.image,
    link: post.link,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
    category: post.category,
    tags: post.tags
  }));

  return (
    <section id="blog" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          Latest Articles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white mb-16 max-w-2xl mx-auto"
        >
          Insights, tutorials, and thoughts on modern web development, cloud architecture, and software engineering best practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Carousel slides={carouselSlides} />
        </motion.div>
      </div>
    </section>
  );
}
