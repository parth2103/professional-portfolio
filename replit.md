# Parth Gohil Portfolio Website

## Overview

This is a modern, full-stack portfolio website built for showcasing Parth Gohil's professional experience as a Full Stack Developer. The application features a sleek, animated frontend with a contact form system backed by a Node.js/Express API and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod for schema validation and type safety
- **Session Management**: PostgreSQL database storage with DatabaseStorage class

### Development Setup
- **Development Mode**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: Static assets served by Express with fallback routing
- **Environment**: Replit-optimized with development banner integration

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated landing with personal introduction and resume download
2. **About Section**: Professional background and contact information
3. **Skills Section**: Technical competencies with visual progress indicators
4. **Projects Section**: Showcase of key projects with technology stacks
5. **Experience Section**: Professional work history with detailed descriptions
6. **Contact Section**: Interactive contact form with real-time validation

### UI Component System
- **Design System**: shadcn/ui components with consistent theming
- **Animations**: Custom Framer Motion variants for page transitions
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA labels and keyboard navigation support

### Contact Management
- **Form Handling**: Real-time validation with React Hook Form
- **Data Storage**: Contact messages stored in PostgreSQL
- **Admin Interface**: API endpoints for retrieving submitted messages
- **Toast Notifications**: User feedback for form submissions

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Form data validated on client-side using Zod schemas
3. POST request sent to `/api/contact` endpoint
4. Server validates data and stores in database
5. Success/error response sent back to client
6. Toast notification displays result to user

### Resume Download
1. User clicks download button in hero section
2. GET request sent to `/api/resume/download` endpoint
3. Server returns resume data (currently as JSON)
4. Client creates downloadable blob and triggers download

### Database Operations
1. Drizzle ORM handles database connections and queries
2. Schema definitions shared between client and server
3. Type-safe database operations with TypeScript
4. Automatic migration support with Drizzle Kit

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React Query, React Hook Form
- **UI Libraries**: Radix UI, Framer Motion, Lucide React icons
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS, class-variance-authority
- **Build Tools**: Vite, TypeScript, ESBuild

### Development Dependencies
- **Replit Integration**: Vite plugins for Replit environment
- **Type Checking**: TypeScript with strict configuration
- **Database Management**: Drizzle Kit for migrations

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Assets**: Static files served from Express with routing fallback
4. **Database**: Neon PostgreSQL with connection pooling

### Environment Configuration
- **Development**: Local development with Vite dev server
- **Production**: Single Node.js process serving both API and static files
- **Database**: Connection string via `DATABASE_URL` environment variable
- **Migrations**: Drizzle Kit handles schema changes

### Performance Considerations
- **Code Splitting**: Vite handles automatic code splitting
- **Caching**: Static assets with proper cache headers
- **Database**: Connection pooling for efficient database usage
- **Animations**: Optimized Framer Motion animations with reduced motion support

### Security Features
- **Input Validation**: Server-side validation for all form inputs
- **CORS**: Configured for secure cross-origin requests
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Session Security**: Secure session configuration for production