// src/pages/thank-you.tsx
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { Link } from "wouter";

export default function ThankYouPage() {
  return (
    <section
      id="thank-you"
      className="min-h-screen flex items-center justify-center bg-background text-foreground"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center px-6 py-12"
      >
        <CheckCircle2 size={64} className="mx-auto text-primary mb-4" />
        <h1 className="gradient-text text-4xl md:text-5xl font-bold mb-2">
          Thank You!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Your message has been sent successfully. I’ll get back to you soon.
        </p>
        <Button asChild variant="secondary" className="px-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </motion.div>
    </section>
  );
}
