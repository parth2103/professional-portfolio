import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendThankYouEmail(to: string, name: string) {
  await transporter.sendMail({
    from: `"Parth Gohil" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject: "Thank you for reaching out!",
    text: `Hi ${name},\n\nThanks for getting in touch with me. I’ll get back to you soon.\n\nBest,\nParth`,
  });
}
