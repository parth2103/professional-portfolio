import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      // In a real app, this would serve the actual resume file
      // For now, we'll return resume data as JSON
      const resumeData = {
        name: "Parth Gohil",
        title: "Full Stack Developer",
        location: "Los Angeles, CA",
        email: "parth.gohil.work@gmail.com",
        phone: "(818) 574-9345",
        linkedin: "https://linkedin.com/in/parth-gohil",
        summary: "Experienced Full Stack Developer with 3+ years of professional experience building scalable web applications using React, Node.js, and cloud infrastructure.",
        experience: [
          {
            title: "Software Engineer Intern",
            company: "Cinema and Television Arts, California State University Fullerton",
            duration: "Oct 2024 – Present",
            description: "Engineered full-stack web applications supporting digital asset management and content workflows using React.js, Node.js, and Express.js, improving media workflows for 1,000+ students across content-heavy departments."
          },
          {
            title: "Full Stack Developer",
            company: "Tseng College, California State University Northridge",
            duration: "Jan 2021 – Dec 2023",
            description: "Collaborated with cross-functional IT teams to debug, enhance, and maintain internal tools using Agile practices, improving system reliability and usability for over 500 users across the department."
          }
        ],
        education: [
          {
            degree: "Master of Science in Computer Science",
            school: "California State University, Fullerton",
            duration: "Jan 2023 – Dec 2025"
          },
          {
            degree: "Bachelor of Science in Computer Information Technology",
            school: "California State University, Northridge",
            duration: "Aug 2020 – Dec 2023"
          }
        ],
        skills: {
          languages: ["Python", "Go", "Java", "SQL", "C++", "JavaScript"],
          backend: ["Node.js", "REST APIs", "Microservices Architecture"],
          frontend: ["React", "HTML5", "CSS3", "TypeScript"],
          tools: ["Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "CircleCI"],
          cloud: ["AWS (EC2, Lambda, S3, RDS)", "Terraform"],
          databases: ["PostgreSQL", "MongoDB", "MySQL"]
        }
      };

      res.json({ success: true, data: resumeData });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to download resume" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
