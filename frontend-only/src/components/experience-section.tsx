import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { slideUp, staggerContainer } from "@/lib/animations";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  color: string;
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Software Engineer Intern",
      company: "Cinema and Television Arts, CSU Fullerton",
      duration: "Oct 2024 – Present",
      description: [
        "Engineered full-stack web applications supporting digital asset management for 1,000+ students",
        "Shipped RESTful APIs with optimized backend logic, reducing data processing time by 35%",
        "Deployed and maintained applications on AWS (EC2, S3) with secure configurations",
      ],
      color: "bg-primary",
    },
    {
      title: "Full Stack Developer",
      company: "Tseng College, CSU Northridge",
      duration: "Jan 2021 – Dec 2023",
      description: [
        "Collaborated with cross-functional IT teams using Agile practices for 500+ users",
        "Designed dynamic UI improvements and backend automation with JavaScript and Python",
        "Optimized system response time by 30% through proactive error tracking",
        "Built real-time dashboards reducing incident response time by 25%",
      ],
      color: "bg-secondary",
    },
    {
      title: "Data Analytics Manager",
      company: "PMI-Orange County Chapter",
      duration: "May 2025 – Present",
      description: [
        "Analyzed member engagement data using Excel pivot tables and dashboards",
        "Applied data modeling and segmentation to improve user retention strategies",
        "Supported product marketing initiatives with data-driven insights",
      ],
      color: "bg-accent",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="relative mb-12 ml-16"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-12 top-2 w-4 h-4 ${exp.color} rounded-full border-4 border-background`}
                />

                <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-primary font-semibold mb-2">
                      {exp.company}
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
