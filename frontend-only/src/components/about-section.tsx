import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { slideUp, fadeInUp } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
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
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-foreground" />
                </div>
                <span className="text-foreground">Los Angeles, CA</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-foreground" />
                </div>
                <span className="text-foreground">parth.gohil.work@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-foreground" />
                </div>
                <span className="text-foreground">(818) 574-9345</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://media.giphy.com/media/LaVp0AyqR5bGsC5Cbm/giphy.gif"
              alt="Coding animation - developer working on computer"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
