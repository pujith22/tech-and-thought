# Pujith's Personal Blog

Personal blog and portfolio of Pujith Sai Kumar Korlepara - M.Tech CS @ IIT Bombay. A modern, full-stack blog built with Next.js 16, focusing on systems engineering, machine intelligence, and technical explorations.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- **MDX Content**: Write posts and trips in MDX with frontmatter
- **Zero Database**: Content stored as files, no database maintenance
- **SEO Optimized**: Automatic sitemap, RSS feed, Open Graph tags, canonical URLs
- **Dark Mode**: Built-in dark mode support via `prefers-color-scheme`
- **Performance**: Static generation with ISR for optimal speed
- **Typography**: Beautiful reading experience with @tailwindcss/typography
- **Privacy**: Email/phone obfuscation with click-to-reveal and copy-to-clipboard
- **Analytics**: Plausible integration (privacy-friendly)
- **Comments**: Giscus integration for GitHub Discussions-based comments
- **Responsive Design**: Viewport-based autoscaling for optimal display across all devices

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Content**: MDX with next-mdx-remote, gray-matter, reading-time
- **Syntax Highlighting**: rehype-highlight with auto dark mode
- **Deployment**: Vercel
- **Analytics**: Plausible (privacy-friendly)
- **Comments**: Giscus (GitHub Discussions)
- **Asset Hosting**: GitHub Releases for large files (PDFs)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp env.sample .env.local
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Content

### Posts

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2025-12-01"
summary: "A brief summary of your post"
tags: ["tag1", "tag2"]
categories: ["Technology"]
draft: false
---

# Your Post Title

Your content here...
```

### Trips

Create a new `.mdx` file in `content/trips/`:

```mdx
---
title: "Your Trip Title"
slug: "your-trip-slug"
dateRange:
  start: "2025-11-01"
  end: "2025-11-07"
location: "Location Name"
summary: "Trip summary"
tags: ["hiking", "adventure"]
distanceKm: 50
elevationGainM: 2000
difficulty: "Moderate"
coords:
  lat: 40.7128
  lng: -74.0060
draft: false
---

# Your Trip

Trip details...
```

## 🎨 Customization

### Site Configuration

Update site metadata in `app/layout.tsx` and replace placeholder URLs throughout the codebase.

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind utility classes
- Dark mode: Automatic with `dark:` prefix

### Navigation

Update navigation links in `components/ui/Header.tsx` and `components/ui/Footer.tsx`.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Enable Analytics (Plausible)

- Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in your environment (e.g., `pujith.com`).
- The Plausible script is automatically injected by `app/layout.tsx` when this variable is set.

### Enable Comments (Giscus)

- Set the following environment variables:
  - `NEXT_PUBLIC_GISCUS_REPO` (e.g., `pujith22/tech-and-thought`)
  - `NEXT_PUBLIC_GISCUS_REPO_ID` (get from https://giscus.app)
  - `NEXT_PUBLIC_GISCUS_CATEGORY` (e.g., `Announcements`)
  - `NEXT_PUBLIC_GISCUS_CATEGORY_ID` (get from https://giscus.app)
- Comments automatically appear on blog post pages when env vars are configured.
- Requirements:
  1. Repository must be public
  2. Discussions must be enabled in GitHub repo settings
  3. giscus app must be installed: https://github.com/apps/giscus
- Path: `components/ui/GiscusComments.tsx`
- Auto-maps discussions by `pathname` and respects dark mode via `preferred_color_scheme`.

### Build Locally

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pujith-tech-and-thought/
├── app/                    # Next.js App Router pages
│   ├── posts/             # Blog posts pages
│   ├── trips/             # Trip pages (coming soon)
│   ├── theory/            # Theory category
│   ├── science/           # Science category
│   ├── tech/              # Tech category
│   ├── cpblog/            # Competitive Programming blog
│   ├── about/             # About page
│   ├── contact/           # Contact page with privacy features
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout with Plausible integration
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # Reusable UI components
│       ├── Header.tsx     # Responsive header with mobile menu
│       ├── Footer.tsx     # Footer with scaled typography
│       ├── ContactReveal.tsx  # Privacy-friendly contact display
│       ├── CopyEmail.tsx  # Copy-to-clipboard for emails
│       └── GiscusComments.tsx # GitHub Discussions comments
├── content/
│   ├── posts/             # Blog post MDX files
│   └── trips/             # Trip MDX files
├── lib/
│   ├── mdx/               # MDX utilities
│   └── utils.ts           # Helper functions
└── public/                # Static assets
    ├── images/            # Image files
    └── gpx/               # GPX track files
```

## 📧 Contact

- Email: contact@pujith.com (Primary)
- Email: hola@pujith.com (Alternate)
- Email: pujith@cse.iitb.ac.in (Academic)
- GitHub: [@pujith22](https://github.com/pujith22)
- LinkedIn: [pujith22](https://www.linkedin.com/in/pujith22)
- Twitter: [@pujith28](https://www.x.com/pujith28)

---

## 🤖 Development

This project was built with assistance from **GitHub Copilot**, which helped accelerate development, improve code quality, and implement best practices throughout the codebase.

---

Built with ❤️ using Next.js and deployed on Vercel.
