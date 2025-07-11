# Parth Gohil Portfolio Website

A modern, full-stack portfolio website built with React, TypeScript, Node.js, and PostgreSQL.

## 🚀 Quick Start

### Prerequisites

Before running this project locally, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **PostgreSQL** database (local or cloud)
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```bash
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"
   
   # PostgreSQL Connection Details
   PGHOST="localhost"
   PGPORT="5432"
   PGUSER="your_username"
   PGPASSWORD="your_password"
   PGDATABASE="portfolio_db"
   
   # Session Configuration
   SESSION_SECRET="your-secret-key-here"
   ```

4. **Set up the database**
   ```bash
   # Create database tables
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5000`

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run check` | Type checking |
| `npm run db:push` | Push database schema changes |

## 🗄️ Database Setup Options

### Option 1: Local PostgreSQL

1. **Install PostgreSQL**
   - **Windows**: Download from [postgresql.org](https://www.postgresql.org/download/windows/)
   - **macOS**: `brew install postgresql`
   - **Linux**: `sudo apt-get install postgresql`

2. **Create database**
   ```bash
   psql -U postgres
   CREATE DATABASE portfolio_db;
   CREATE USER your_username WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO your_username;
   \q
   ```

### Option 2: Cloud Database (Recommended)

Use a cloud provider like:
- **Neon** (free tier available)
- **Supabase** (free tier available)
- **Railway** (free tier available)
- **PlanetScale** (free tier available)

Just replace the `DATABASE_URL` in your `.env` file with your cloud database URL.

## 🏗️ Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── index.html
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── db.ts               # Database connection
│   └── storage.ts          # Data access layer
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema
├── package.json
└── README.md
```

## 🎨 Features

- **Modern Design**: Dark/light theme with smooth animations
- **Responsive**: Works on desktop, tablet, and mobile
- **Interactive**: Animated sections and hover effects
- **Contact Form**: Working contact form with database storage
- **Blog Section**: Technical articles and posts
- **Resume Download**: Downloadable resume functionality
- **SEO Friendly**: Optimized for search engines

## 🔧 Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **React Query** - Data fetching
- **Wouter** - Routing

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Drizzle ORM** - Database queries
- **Zod** - Validation

### Tools
- **Vite** - Build tool
- **ESBuild** - Fast bundling
- **Drizzle Kit** - Database migrations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

The built files will be in the `dist/` directory.

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `PGHOST` | Database host | `localhost` |
| `PGPORT` | Database port | `5432` |
| `PGUSER` | Database username | `your_username` |
| `PGPASSWORD` | Database password | `your_password` |
| `PGDATABASE` | Database name | `portfolio_db` |
| `SESSION_SECRET` | Session encryption key | `your-secret-key` |

## 🔍 Troubleshooting

### Common Issues

1. **Database connection failed**
   - Check your `DATABASE_URL` is correct
   - Ensure PostgreSQL is running
   - Verify database credentials

2. **Port already in use**
   - Change port in `server/index.ts`
   - Kill process using port 5000: `lsof -ti:5000 | xargs kill`

3. **Dependencies not installing**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

4. **Build errors**
   - Check TypeScript errors: `npm run check`
   - Ensure all dependencies are installed

## 📧 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure database is running and accessible
4. Check Node.js version compatibility

## 🔄 Updates

To update dependencies:
```bash
npm update
```

To check for outdated packages:
```bash
npm outdated
```

---

**Happy coding!** 🚀