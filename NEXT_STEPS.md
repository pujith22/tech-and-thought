# Next Steps

## ✅ What's Been Completed

1. **Next.js 15 Setup**: Full-stack blog with App Router, TypeScript, and Tailwind CSS
2. **Content Pipeline**: MDX support with frontmatter parsing for posts and trips
3. **Core Pages**: Home, Posts (listing + detail), Trips (listing + detail), About, Contact, Projects
4. **UI Components**: Reusable PostCard, TripCard, Header, Footer
5. **Sample Content**: 3 blog posts and 2 trip reports
6. **Static Features**: RSS feed, sitemap.xml, robots.txt
7. **Development Environment**: Dev server running on localhost:3000

## 🚀 Immediate Next Steps

### 1. Test the Site

Visit http://localhost:3000 and verify:
- Home page displays latest posts and trips
- Navigation works
- Posts listing (/posts) shows all posts
- Individual post pages load correctly
- Trips listing (/trips) shows all trips
- Individual trip pages load correctly

### 2. Customize Site Information

Update the following files with your personal information:

**`app/layout.tsx`** - Site metadata:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Name - Your Tagline",
    template: "%s | Your Name",
  },
  description: "Your description",
  openGraph: {
    url: "https://yourdomain.com",
    siteName: "Your Name",
  },
};
```

**`components/ui/Header.tsx`** - Logo/brand name

**`components/ui/Footer.tsx`** - Social links and footer text

**`app/contact/page.tsx`** - Your email and social media links

**`app/about/page.tsx`** - Your personal bio

**All RSS/sitemap files** - Replace `https://yoursite.com` with your actual domain

### 3. Add Trip Map Component (Optional)

The trip detail pages have a map placeholder. To add interactive maps:

1. Install Leaflet CSS:
```bash
npm install leaflet-css
```

2. Create a Map component in `components/ui/Map.tsx`
3. Import and use in `app/trips/[slug]/page.tsx`

### 4. Deploy to Vercel

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial blog setup"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure environment variables (if any)
5. Deploy!

### 5. Set Up Analytics (Optional)

**Plausible** (privacy-friendly):
1. Sign up at [plausible.io](https://plausible.io)
2. Add to `app/layout.tsx`:
```typescript
import Script from 'next/script';

// In the <body>:
<Script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js" />
```

### 6. Enable Comments (Optional)

**Giscus** (GitHub Discussions):
1. Enable Discussions on your GitHub repo
2. Install Giscus app
3. Get configuration from [giscus.app](https://giscus.app)
4. Create a Giscus component and add to post/trip detail pages

### 7. Image Optimization

For better image handling:

1. Set up Cloudinary account
2. Add env variable:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```
3. Use Next.js Image component with Cloudinary loader

## 📝 Content Management

### Adding New Posts

1. Create a new file in `content/posts/your-post-slug.mdx`
2. Add frontmatter and content
3. Post will automatically appear on the site

### Adding New Trips

1. Create a new file in `content/trips/your-trip-slug.mdx`
2. Add frontmatter with trip details
3. (Optional) Add GPX file to `public/gpx/`

## 🛠️ Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### TypeScript Errors in IDE

The TypeScript server may need to be reloaded:
- VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"

### Module Not Found Errors

If packages aren't found:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear the Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)
- [Vercel Deployment](https://vercel.com/docs)

## 🎉 You're All Set!

Your personal blog is ready. Start by testing it locally, then customize the content and deploy to Vercel. Happy blogging!
