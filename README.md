<div align="center">

# Navaneethan KV — Portfolio

**Associate Software Analyst · Front-End Developer · Angular & React**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EF008F?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel&logoColor=white)](https://navaneethan.vercel.app)

[🌐 Live Site](https://navaneethan.vercel.app) &nbsp;·&nbsp; [💼 LinkedIn](https://www.linkedin.com/in/navaneethan-k-v-546a9025b) &nbsp;·&nbsp; [🐙 GitHub](https://github.com/navanee1609) &nbsp;·&nbsp; [📧 Email](mailto:navaneethanvs18@gmail.com)

</div>

---

## Overview

A high-performance personal portfolio built with **Next.js**, **TypeScript**, and **Framer Motion** — designed to leave a lasting impression through rich animations, interactive sections, and a clean dark-first UI.

- ✅ JSON-LD structured data for Google rich results
- ✅ Optimised images via `next/image` with WebP & lazy loading
- ✅ Smooth scroll, scroll-linked animations & micro-interactions throughout

---

## Sections

| Section | What's Inside |
|---|---|
| **Hero** | Animated orbit rings, floating sparkles, profile intro & resume side panel |
| **About** | Visual web design card, VS Code snippet, persona breakdown & contact animation |
| **Skills** | Tech stack toolbox with icons & categorised skill groups |
| **Projects** | Sticky scroll project cards — live links, tech pills & real-world context |
| **Timeline** | Career & education journey with animated vertical timeline & expandable highlights |
| **Awards** | Rockstar & Super Squad awards with certificate lightbox viewer |
| **AI Workflow** | How I integrate AI tools (Claude, Copilot, GPT-4o) into my daily dev process |
| **Articles** | Auto-scrolling marquee of LinkedIn articles & technical write-ups |
| **Contact** | Full contact hub — message form, email copy, WhatsApp, LinkedIn & more |

---

## Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** — App Router, Server Components, metadata API
- **[TypeScript 5](https://www.typescriptlang.org/)** — Strict typing across all components
- **[React 18](https://react.dev/)** — Hooks, concurrent features, `createPortal`

### Styling & Animation
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first with custom design tokens & animations
- **[Framer Motion 11](https://www.framer.com/motion/)** — Scroll animations, spring transitions & staggered reveals
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Conflict-free class composition

### Icons & Fonts
- **[Lucide React](https://lucide.dev/)** — Primary icon system
- **[React Icons](https://react-icons.github.io/react-icons/)** — Brand icons (LinkedIn, GitHub, WhatsApp, Instagram)
- **[Google Fonts](https://fonts.google.com/)** — Inter (sans) + Calistoga (serif) via `next/font`

### Forms & Integrations
- **[Web3Forms](https://web3forms.com/)** — Contact form email delivery (no backend needed)
- **[FontAwesome](https://fontawesome.com/)** — Supplementary icon set

### SEO & Performance
- **Next.js Metadata API** — Dynamic `<title>`, Open Graph & meta descriptions
- **JSON-LD Schema** — `Person` structured data for Google rich results eligibility
- **`next/image`** — Automatic WebP conversion, lazy loading & CLS prevention
- **`next/font`** — Zero layout shift font loading

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** `>= 9.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/navanee1609/navaneethan.git
cd navaneethan

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint checks
```

---

## Project Structure

```
navaneethan/
├── public/
│   ├── video/                   # Background video assets
│   ├── assets/                  # Static images & icons
│   └── favicon.avif
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, metadata & JSON-LD
│   │   ├── page.tsx             # Main page — section composition
│   │   └── globals.css          # Global styles & custom scrollbar
│   ├── assets/                  # SVG icons, grain texture, project images
│   ├── components/              # Reusable UI components
│   │   ├── AppButton.tsx
│   │   ├── AppModal.tsx
│   │   ├── Card.tsx
│   │   ├── CommandPalette.tsx
│   │   ├── DiveIntoMyWorldModal.tsx
│   │   ├── PillBadge.tsx
│   │   └── ...
│   ├── constants/               # Shared URLs & profile image path
│   └── sections/                # One file per page section
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Timeline.tsx
│       ├── Awards.tsx
│       ├── AiWorkflow.tsx
│       ├── Article.tsx
│       ├── Contact.tsx
│       ├── WelcomeToast.tsx
│       ├── FixedIcon.tsx
│       └── Footer.tsx
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Design System

| Token | Value |
|---|---|
| **Base** | `bg-gray-900` / `bg-gray-950` dark surfaces |
| **Primary Accent** | `emerald-400` — active states, highlights & CTAs |
| **Secondary Accent** | `sky-400` — gradients, links, secondary elements |
| **Tertiary** | `purple-400` / `cyan-400` / `amber-400` — colour-coded badges |
| **Text** | `white` → `white/70` → `white/50` — three-level hierarchy |
| **Cards** | `bg-white/5` + `border-white/10` glassmorphism surfaces |
| **Border Radius** | `rounded-2xl` / `rounded-3xl` consistently throughout |

---

## Connect

| Platform | Handle |
|---|---|
| 🌐 Portfolio | [navaneethan.vercel.app](https://navaneethan.vercel.app) |
| 💼 LinkedIn | [navaneethan-k-v](https://www.linkedin.com/in/navaneethan-k-v-546a9025b) |
| 🐙 GitHub | [navanee1609](https://github.com/navanee1609) |
| 📸 Instagram | [@navneethkrishna_05](https://www.instagram.com/navneethkrishna_05) |
| 💬 WhatsApp | [+91 76390 96688](https://wa.me/917639096688) |
| 📧 Email | [navaneethanvs18@gmail.com](mailto:navaneethanvs18@gmail.com) |

---

<div align="center">

Designed & built with ❤️ by **Navaneethan KV**

*Front-End Developer · Chennai, Tamil Nadu*

</div>


