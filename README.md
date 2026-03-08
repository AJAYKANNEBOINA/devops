# WALKINS — India's #1 Walk-in Drive Platform

**walkindrives.in** — The only platform dedicated exclusively to walk-in hiring in India.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Font**: Inter (system font fallback via Tailwind CSS)
- **Icons**: lucide-react
- **Animation**: framer-motion (available for future use)
- **UI Primitives**: Radix UI (dialog, dropdown, select, accordion, slot)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── globals.css               # Global styles + Tailwind config
│   ├── drives/
│   │   ├── page.tsx              # Browse all drives (with filters)
│   │   └── [id]/page.tsx         # Drive detail page
│   ├── login/page.tsx            # Sign in page
│   ├── signup/page.tsx           # Sign up page
│   ├── dashboard/page.tsx        # Job seeker dashboard
│   ├── employer/dashboard/page.tsx # Employer dashboard
│   ├── robots.ts                 # SEO robots
│   └── sitemap.ts                # SEO sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky responsive navbar
│   │   └── Footer.tsx            # 4-column footer
│   └── drives/
│       ├── DriveCard.tsx         # Drive listing card
│       └── CountdownTimer.tsx    # Live countdown timer
└── lib/
    └── mock-data.ts              # Mock drive data + types
```

## Features

- Browse & filter walk-in drives by city, role, category, keyword
- Drive detail pages with countdown timer, document checklist, venue map link
- Verified / Hot / New badges on drive listings
- Employer dashboard shell (post drives, track applicants)
- Job seeker dashboard shell (track registrations)
- SEO: robots.txt, sitemap.xml, per-page metadata
- Fully responsive (mobile-first)
