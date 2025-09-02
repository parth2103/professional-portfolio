# Parth Gohil - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Live Demo

**[View Live Site](https://parthgohil.site)**

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Animations**: 
  - Dynamic animated text with FULLSTACK/CREATIVE/PASSIONATE/INNOVATIVE rotation
  - Smooth Framer Motion transitions and hover effects
  - Aceternity UI carousel for articles showcase
- **Advanced UI Components**:
  - Animated text flip component with smooth transitions
  - Interactive article carousel with 3-slide preview
  - Streamlined experience timeline with compact cards
  - 3D card effects and floating shapes
- **Contact Form**: Working contact form using FormSubmit service
- **Blog Section**: Technical articles displayed in modern carousel format
- **Resume Download**: Direct download link to my resume
- **SEO Optimized**: Open Graph meta tags and proper meta descriptions
- **Performance**: Fast loading with Vite build optimization

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library with TypeScript
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Smooth animations and page transitions
- **Aceternity UI** - Modern UI components including carousel and animated text
- **shadcn/ui** - Accessible and customizable component library
- **Radix UI** - Headless UI primitives for accessibility
- **React Query** - Data fetching and state management
- **Wouter** - Lightweight routing solution
- **Lucide React** - Beautiful SVG icon library
- **Tabler Icons** - Additional icon set for enhanced UI

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

1. **Hero Section** - Dynamic animated introduction with rotating descriptive words and 3D profile image
2. **About Section** - Professional background and contact information
3. **Skills Section** - Technical competencies with visual skill indicators
4. **Projects Section** - Interactive expandable project showcase with detailed tech stacks
5. **Experience Section** - Streamlined professional timeline with compact experience cards
6. **Blog Section** - Technical articles displayed in modern carousel with 3-slide preview
7. **Contact Section** - Working contact form with social media links

## 🆕 Recent Updates

### Latest Enhancements (2025)
- ✨ **New Animated Hero Text**: Dynamic word rotation with FULLSTACK/CREATIVE/PASSIONATE/INNOVATIVE
- 🎠 **Article Carousel**: Replaced static grid with interactive Aceternity UI carousel
- 📱 **Mobile Optimization**: Improved font sizing and responsive behavior across all devices
- 🖼️ **Fixed Layout Issues**: Resolved animated text vertical shifting and image movement
- 🎯 **Streamlined Experience**: Compact experience cards showing only essential information
- 🎨 **Enhanced Animations**: Smooth transitions and improved visual feedback

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

- **Performance**: Optimized with Vite for lightning-fast loading and hot module replacement
- **Accessibility**: Built with Radix UI and shadcn/ui for WCAG compliance
- **SEO**: Comprehensive meta tags, Open Graph data, and semantic HTML
- **Mobile-First**: Fully responsive design optimized for all screen sizes
- **Modern Stack**: Latest React 18, TypeScript, and cutting-edge libraries
- **Clean Code**: Well-structured components with TypeScript interfaces
- **Smooth Animations**: Framer Motion and Aceternity UI for professional interactions
- **Interactive Elements**: Engaging UI with hover effects and dynamic content

## 🧩 UI Components

### Custom Components
- **ContainerTextFlip** - Animated text rotation with smooth width transitions
- **Carousel** - Aceternity UI carousel with navigation controls
- **ProjectsExpandable** - Modal-based project showcase with detailed views
- **FloatingShapes** - Background decoration with animated elements
- **3D Card Effects** - Interactive profile image with depth effects

### Component Architecture
```
src/components/
├── ui/                     # Reusable UI components
│   ├── carousel.tsx        # Article carousel component
│   ├── container-text-flip.tsx # Animated text component
│   ├── 3d-card.tsx        # 3D interactive cards
│   └── [shadcn components] # UI primitives
├── hero-section.tsx        # Landing page hero
├── projects-expandable.tsx # Interactive project grid
├── experience-section.tsx  # Professional timeline
└── blog-section.tsx       # Article carousel section
```

## 🔧 Customization

### Adding New Projects
Edit `src/components/projects-expandable.tsx` to add new projects to your portfolio showcase.

### Updating Skills
Modify `src/components/skills-section.tsx` to update your technical competencies.

### Customizing Animations
Adjust animation settings in `src/lib/animations.ts` for different transition effects.

### Changing Content
All content is modular and located in the respective component files in `src/components/`.

## 📬 Contact

- **Email**: parth.gohil.work@gmail.com
- **LinkedIn**: [Parth Gohil](https://www.linkedin.com/in/parth--gohil/)
- **GitHub**: [parth2103](https://github.com/parth2103)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
