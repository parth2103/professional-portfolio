# Parth Gohil - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Live Demo

**[View Live Site](https://parthgohil.site)**

## ✨ Features

- **Modern Design**: Dark/light theme with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive**: Animated sections and hover effects using Framer Motion
- **Contact Form**: Working contact form using FormSubmit service
- **Blog Section**: Technical articles and industry insights
- **Resume Download**: Direct download link to my resume
- **SEO Optimized**: Open Graph meta tags and proper meta descriptions
- **Performance**: Fast loading with Vite build optimization

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library with TypeScript
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible and customizable components
- **React Query** - Data fetching and state management
- **Wouter** - Lightweight routing solution
- **Lucide React** - Beautiful icons

### Build Tools
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS processing
- **TypeScript** - Type checking and compilation

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/parth2103/professional-portfolio.git
   cd professional-portfolio/frontend-only
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
frontend-only/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── blog-section.tsx
│   │   ├── contact-section.tsx
│   │   └── navigation.tsx
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── main.tsx           # App entry point
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vercel.json            # Vercel deployment configuration
```

## 🎨 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Professional background and contact info
3. **Skills Section** - Technical competencies with visual indicators
4. **Projects Section** - Showcase of key projects with tech stacks
5. **Experience Section** - Professional work history
6. **Blog Section** - Technical articles and insights
7. **Contact Section** - Contact form and social links

## 🚀 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌐 Deployment

This project is deployed on **Vercel** for optimal performance and easy deployment.

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📧 Contact Form

The contact form uses **FormSubmit** service, which:
- Sends emails directly to my inbox
- No backend required
- Includes spam protection
- Automatically redirects to a thank-you page

## 🎯 Key Features

- **Performance**: Optimized with Vite for fast loading
- **Accessibility**: Built with Radix UI for better accessibility
- **SEO**: Proper meta tags and Open Graph data
- **Mobile-First**: Responsive design that works on all devices
- **Modern Stack**: Latest React and TypeScript features
- **Clean Code**: Well-structured components and hooks

## 🔧 Customization

### Adding New Projects
Edit `src/components/projects-section.tsx` to add new projects to your portfolio.

### Updating Skills
Modify `src/components/skills-section.tsx` to update your technical skills.

### Changing Content
All content is in the respective component files in the `src/components/` directory.

## 📬 Contact

- **Email**: parth.gohil.work@gmail.com
- **LinkedIn**: [Parth Gohil](https://www.linkedin.com/in/parth--gohil/)
- **GitHub**: [parth2103](https://github.com/parth2103)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
