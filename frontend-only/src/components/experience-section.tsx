// src/components/ExperienceSection.tsx
import { motion } from "framer-motion";
import { staggerContainer, timelineSlideLeft, timelineSlideRight, timelineDot } from "@/lib/animations";
import { Calendar, Building2, Award } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  color: string;
  icon: React.ReactNode;
  year: string;
  startDate: string; // For sorting chronologically
  category: string;
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Data Analytics Manager",
      company: "PMI-Orange County Chapter",
      duration: "May 2025 – Present",
      description: [
        "Analyzed member engagement data using Excel pivot tables",
        "Applied data modeling to improve user retention",
        "Supported marketing with data-driven insights",
      ],
      color: "from-accent to-accent/80",
      icon: <Award className="w-5 h-5" />,
      year: "2025",
      startDate: "2025-05",
      category: "Volunteering"
    },
    {
      title: "Software Engineer Intern",
      company: "Cinema and Television Arts, CSU Fullerton",
      duration: "Oct 2024 – Present",
      description: [
        "Engineered full-stack apps for digital asset management (1,000+ students)",
        "Shipped optimized RESTful APIs reducing processing time by 35%",
        "Deployed and maintained AWS applications (EC2, S3) securely",
      ],
      color: "from-primary to-primary/80",
      icon: <Building2 className="w-5 h-5" />,
      year: "2024",
      startDate: "2024-10",
      category: "Professional"
    },
    {
      title: "Full Stack Developer",
      company: "Tseng College, CSU Northridge",
      duration: "Jan 2021 – Dec 2023",
      description: [
        "Collaborated with cross-functional IT teams using Agile (500+ users)",
        "Designed dynamic UI improvements and backend automation (JS/Python)",
        "Optimized system response time by 30% through error tracking",
        "Built real-time dashboards reducing incident response by 25%",
      ],
      color: "from-secondary to-secondary/80",
      icon: <Building2 className="w-5 h-5" />,
      year: "2021-2023",
      startDate: "2021-01",
      category: "Professional"
    },
  ];

  // Sort experiences by start date (most recent first)
  const sortedExperiences = experiences.sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section id="experience" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            My career journey through the years, showcasing growth and diverse experiences
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline Line - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line opacity-40 hidden lg:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-line opacity-30 lg:hidden"></div>
          
          {/* Timeline Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 lg:space-y-12"
          >
            {sortedExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={isLeft ? timelineSlideLeft : timelineSlideRight}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } flex-col lg:gap-16 gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div 
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white/20 shadow-lg`}
                      variants={timelineDot}
                      initial="hidden"
                      whileInView="visible"
                      animate="pulse"
                      whileHover={{ scale: 1.3 }}
                      viewport={{ once: true }}
                    />
                  </div>


                  {/* Experience Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <CardContainer className="w-full">
                      <CardBody className="glass-effect border-white/10 hover:border-primary/30 timeline-card hover:shadow-2xl hover:shadow-primary/10 p-5 rounded-xl w-full max-w-[500px] mx-auto flex flex-col justify-start">
                        {/* Header */}
                        <div className="mb-3">
                          <CardItem translateZ="50" className={`flex items-start gap-4 mb-2 ${
                            isLeft ? 'lg:flex-row-reverse lg:text-right' : 'lg:flex-row lg:text-left'
                          } flex-row text-center justify-center lg:justify-start`}>
                            <div className={`p-2.5 rounded-lg bg-gradient-to-r ${exp.color} text-white flex-shrink-0`}>
                              {exp.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-white leading-tight">
                                {exp.title}
                              </h3>
                              <p className="text-primary/80 font-semibold text-sm leading-tight">
                                {exp.company}
                              </p>
                            </div>
                          </CardItem>

                          {/* Duration */}
                          <CardItem translateZ="30" className={`flex items-center gap-2 text-sm text-white/80 ${
                            isLeft ? 'lg:justify-end' : 'lg:justify-start'
                          } justify-center mb-3`}>
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </CardItem>
                        </div>

                        {/* Description */}
                        <CardItem translateZ="20" className="mb-2">
                          <ul className="space-y-2 text-left">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex gap-2 text-sm text-white/90 leading-snug">
                                <span className="text-primary mt-0.5 flex-shrink-0 text-xs">•</span>
                                <span className="flex-1 break-words hyphens-auto">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardItem>

                        {/* Category Badge */}
                        <CardItem translateZ="40" className={`${
                          isLeft ? 'lg:text-right' : 'lg:text-left'
                        } text-center`}>
                          <span className="inline-block text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
                            {exp.category}
                          </span>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </div>

                  {/* Empty space for opposite side on desktop */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
