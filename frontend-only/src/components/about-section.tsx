// src/components/about-section.tsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { slideUp, fadeInUp } from "@/lib/animations";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-white leading-relaxed">
              <motion.p variants={fadeInUp}>
                I'm a passionate Full Stack Developer with 3+ years of experience building scalable web applications. 
                Currently pursuing my Master's in Computer Science, I specialize in React, Node.js, and cloud infrastructure.
              </motion.p>
              
              <motion.p variants={fadeInUp}>
                From optimizing backend performance to creating stunning user interfaces, I love bringing ideas to life 
                through code. My experience spans from startup environments to enterprise-level applications.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="space-y-4 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-foreground" />
                </div>
                <span className="text-white">parth.gohil.work@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-foreground" />
                </div>
                <span className="text-white">(818) 574-9345</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-lg mx-auto"
          >
            <CardContainer className="w-full">
              <CardBody className="w-full">
                <CardItem
                  translateZ="50"
                  className="w-full"
                >
                  <img
                    src="https://media.giphy.com/media/LaVp0AyqR5bGsC5Cbm/giphy.gif"
                    alt="Coding animation - developer working on computer"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </CardItem>
                <CardItem
                  translateZ="20"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20"
                >
                  <div className="w-full h-full" />
                </CardItem>
                <CardItem
                  translateZ="10"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/10 to-transparent"
                >
                  <div className="w-full h-full" />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
