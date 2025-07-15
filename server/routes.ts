import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { sendThankYouEmail } from "./mailer.js";
import { insertContactMessageSchema } from "./shared/schema";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📥 Incoming Request:", req.body);

    const validatedData = insertContactMessageSchema.parse(req.body);
    console.log("✅ Validated Data:", validatedData);

    const message = await storage.createContactMessage(validatedData);
    console.log("💾 Saved Message:", message);

    await sendThankYouEmail(validatedData.email, validatedData.name);
    console.log("📧 Thank You Email Sent To:", validatedData.email);

    res.json({ success: true, message: "Message sent successfully", id: message.id });
  } catch (error) {
    console.error("❌ Error in /api/contact:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Validation failed", 
        errors: error.errors 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: "Failed to send message",
      error: error instanceof Error ? error.message : error
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
app.get("/api/resume/download", (req, res) => {
  const resumePath = path.join(__dirname, "public", "Parth_Gohil_SoftwareEngineer_Resume.docx");

  res.download(resumePath, "Parth_Gohil_SoftwareEngineer_Resume.docx", (err) => {
    if (err) {
      console.error("❌ Failed to download resume:", err);
      res.status(500).json({
        success: false,
        message: "Failed to download resume",
      });
    }
  });
});


  const httpServer = createServer(app);

  return httpServer;
}
