import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { slideUp, fadeInUp, buttonHover } from "@/lib/animations";

export function ContactSection() {
/*  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }; */

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "parth.gohil.work@gmail.com",
      color: "bg-primary",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "(818) 574-9345",
      color: "bg-secondary",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Los Angeles, CA",
      color: "bg-accent",
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "#", color: "hover:bg-primary" },
    { icon: <Github size={24} />, href: "#", color: "hover:bg-secondary" },
    { icon: <Twitter size={24} />, href: "#", color: "hover:bg-accent" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, or just having a 
                conversation about technology. Let's build something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center transition-all duration-300 ${link.color}`}
                >
                  <div className="text-foreground">{link.icon}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
<form
  action="https://formsubmit.co/parth.gohil.work@gmail.com"
  method="POST"
  className="space-y-6"
>
  {/* Disable CAPTCHA and optionally redirect to a thank you page */}
  <input type="hidden" name="_captcha" value="false" />
  {/* Optional: <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

  <div>
    <Label htmlFor="name" className="text-foreground">
      Name
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Your Name"
      required
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="email" className="text-foreground">
      Email
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
      placeholder="your@email.com"
      required
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="subject" className="text-foreground">
      Subject
    </Label>
    <Input
      id="subject"
      name="subject"
      placeholder="Project Discussion"
      required
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="message" className="text-foreground">
      Message
    </Label>
    <Textarea
      id="message"
      name="message"
      placeholder="Tell me about your project..."
      rows={4}
      required
      className="mt-2"
    />
  </div>

  <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
    <Button
      type="submit"
      className="w-full gradient-bg py-3 font-semibold"
    >
      Send Message
    </Button>
  </motion.div>
</form>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
