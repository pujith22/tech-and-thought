# Pujith's Personal Blog

Personal blog and portfolio of Pujith Sai Kumar Korlepara - M.Tech CS @ IIT Bombay. A modern, full-stack blog built with Next.js 15, focusing on systems engineering, machine intelligence, and technical explorations.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **MDX Content**: Write posts and trips in MDX with frontmatter
- **Zero Database**: Content stored as files, no database maintenance
- **SEO Optimized**: Automatic sitemap, RSS feed, Open Graph tags
- **Dark Mode**: Built-in dark mode support
- **Performance**: Static generation with ISR for optimal speed
- **Typography**: Beautiful reading experience with @tailwindcss/typography

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Content**: MDX with next-mdx-remote
- **Maps**: Leaflet / React-Leaflet
- **Deployment**: Vercel (recommended)
- **Analytics**: Plausible (optional)
- **Comments**: Giscus (optional)

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
│   ├── trips/             # Trip pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # Reusable UI components
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

- Email: pujith@cse.iitb.ac.in / pujith22.sde@gmail.com
- GitHub: [@pujith22](https://github.com/pujith22)
- LinkedIn: [pujith22](https://www.linkedin.com/in/pujith22)
- Twitter: [@pujith28](https://www.x.com/pujith28)

---

## 🤖 Development

This project was built with assistance from **GitHub Copilot**, which helped accelerate development, improve code quality, and implement best practices throughout the codebase.

---

Built with ❤️ using Next.js and deployed on Vercel.
