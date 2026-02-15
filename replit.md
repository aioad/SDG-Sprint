# TechSprint 2.0 - Hackathon Landing Page

## Overview

A high-end, modern landing page for "TechSprint 2.0," a 3-day hackathon focused on Sustainable Development Goals (SDGs), organized by Google Developer Group on Campus at Punjabi University Patiala. The app is a static single-page application with no backend data persistence needed.

## Recent Changes

- **Feb 2026**: Built complete landing page with dark theme, Google-colored ambient glows, glassmorphism cards, Framer Motion animations, and all required sections (Hero, Venue, Themes, Timeline, Resources, Organizers, Footer).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Overall Structure
The project is a monorepo with three main directories:
- `client/` — React single-page application (frontend)
- `server/` — Express API server (backend, minimal - serves static content)
- `shared/` — Shared code (database schema, types)

### Frontend Architecture
- **Framework**: React with TypeScript
- **Bundler**: Vite (config in `vite.config.ts`)
- **Routing**: Wouter (single page at `/`)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with dark mode by default, custom glassmorphism cards
- **Animations**: Framer Motion for scroll-triggered fade-ins and floating logo animations
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (loaded from Google Fonts)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Key Pages
- `client/src/pages/home.tsx` — Complete landing page with all sections:
  - Navbar (fixed, glassmorphism background)
  - Hero (floating logos, gradient title, CTA buttons)
  - Venue (Punjabi University Patiala)
  - Themes (4 SDG tracks: Clean Energy, Climate Action, Waste Management, Social Equity)
  - Timeline (3-day vertical schedule)
  - Resources (Event Rules + Pitch Deck Template)
  - Organizers (6 team member profile cards with Avatars)
  - Footer (social links, branding)

### Design System
- Dark theme (#0a0a0a background)
- Google brand colors: Blue (#4285F4), Red (#EA4335), Yellow (#FBBC05), Green (#34A853)
- Glassmorphism cards with `backdrop-filter: blur(20px)` and white/5-10% borders
- Floating ambient glows using animated blurred div elements
- Scroll-triggered fade-in animations via Framer Motion `useInView`

## External Dependencies

### Frontend Libraries
- **Framer Motion** — Animation library (scroll animations, floating effects)
- **react-icons** — Google, LinkedIn, GitHub, Instagram brand icons
- **Lucide React** — UI icon library
- **shadcn/ui** — Pre-styled component library (Card, Button, Avatar)

### Build Tools
- **Vite** — Frontend bundler with React plugin
- **esbuild** — Server bundler for production
- **tsx** — TypeScript execution for development
- **Tailwind CSS** — Utility-first CSS framework
