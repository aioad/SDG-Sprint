# TechSprint 2.0 - Hackathon Landing Page

## Overview

A high-end, modern landing page for "TechSprint 2.0," a 3-day hackathon focused on Sustainable Development Goals (SDGs), organized by Google Developer Group on Campus at Punjabi University Patiala. The app is a Multi-Page Application (MPA) with separate routes for each major section.

## Recent Changes

- **Feb 2026**: Refactored from single-page scroll layout to Multi-Page Application using wouter router with separate routes for Home, Themes, Timeline, Resources, and FAQ.
- **Feb 2026**: Built complete landing page with dark theme, Google-colored ambient glows, glassmorphism cards, Framer Motion animations, and all required sections.

## User Preferences

Preferred communication style: Simple, everyday language.
- Use "Google Developer Group on Campus" (singular "Group")
- "MANDATORY" should be bold in rules about Google Technology requirements
- Dr. Jaswinder Singh's avatar photo uses custom positioning (center 15%) to fit turban in circle

## System Architecture

### Overall Structure
The project is a monorepo with three main directories:
- `client/` — React multi-page application (frontend)
- `server/` — Express API server (backend, minimal - serves static content)
- `shared/` — Shared code (database schema, types)

### Frontend Architecture
- **Framework**: React with TypeScript
- **Bundler**: Vite (config in `vite.config.ts`)
- **Routing**: Wouter with routes: `/`, `/themes`, `/timeline`, `/resources`, `/faq`
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with dark mode by default, custom glassmorphism cards
- **Animations**: Framer Motion for scroll-triggered fade-ins and floating logo animations
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (loaded from Google Fonts)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Key Files
- `client/src/App.tsx` — Router setup with Layout wrapper
- `client/src/components/layout.tsx` — Shared Layout (Navbar with wouter Links + active state, Footer, ScrollToTop)
- `client/src/components/shared.tsx` — Reusable components (AnimatedSection, FloatingGlow)
- `client/src/lib/constants.ts` — Shared data (colors, URLs, themes, timeline, rules, organizers, FAQs)
- `client/src/pages/home.tsx` — Home page: Splash screen, Hero, Venue, Prizes, Organizers
- `client/src/pages/themes.tsx` — Themes page: 4 SDG theme cards
- `client/src/pages/timeline.tsx` — Timeline page: 3-day vertical schedule
- `client/src/pages/resources.tsx` — Resources page: Rules & Pitch Deck Template
- `client/src/pages/faq.tsx` — FAQ page: Accordion-style Q&A

### Design System
- Dark theme (#0a0a0a background)
- Google brand colors: Blue (#4285F4), Red (#EA4335), Yellow (#FBBC05), Green (#34A853)
- Glassmorphism cards with `backdrop-filter: blur(20px)` and white/5-10% borders
- Floating ambient glows using animated blurred div elements
- Scroll-triggered fade-in animations via Framer Motion `useInView`
- Fixed navbar with active state highlighting for current route

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
