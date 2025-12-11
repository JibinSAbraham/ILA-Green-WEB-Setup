# Ila Green - Corporate Waste Management Website

## Overview

Ila Green is a B2B corporate website for a sustainability and waste management company based in India. The platform helps businesses transform waste into measurable social and environmental impact through services including corporate waste management, CSR-backed sustainability projects, and employee awareness programs.

The application follows a full-stack TypeScript architecture with React on the frontend and Express on the backend, designed for professional credibility and lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Data Layer**: Drizzle ORM with PostgreSQL schema definitions
- **Storage**: Currently uses in-memory storage (MemStorage class) with database schema prepared for PostgreSQL migration

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema and Zod validators
└── migrations/       # Database migrations (Drizzle Kit)
```

### Design Patterns
- **Shared Schema**: Single source of truth for database schemas and validation in `shared/schema.ts`
- **Type Safety**: End-to-end TypeScript with Zod schemas generating both database types and runtime validation
- **Component Architecture**: Composable UI components following shadcn/ui patterns with CVA (class-variance-authority) for variants

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database operations with `drizzle-kit` for migrations

### UI Framework Dependencies
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build tool with HMR
- **Replit Plugins**: Custom Vite plugins for Replit environment (cartographer, dev-banner, runtime-error-modal)

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `react-hook-form` + `@hookform/resolvers`: Form handling with Zod integration
- `wouter`: Client-side routing
- `class-variance-authority`: Component variant management
- `date-fns`: Date utilities
- `embla-carousel-react`: Carousel component