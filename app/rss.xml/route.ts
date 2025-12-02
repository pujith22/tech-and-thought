import { getAllContent, PostFrontmatter, TripFrontmatter } from '@/lib/mdx/mdx';

const SITE_URL = 'https://pujith-tech-and-thought.vercel.app';

export async function GET() {
  const posts = await getAllContent<PostFrontmatter>('posts');
  const trips = await getAllContent<TripFrontmatter>('trips');

  const allContent = [
    ...posts.map(post => ({
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      date: post.frontmatter.date,
      url: `${SITE_URL}/posts/${post.slug}`,
      type: 'post' as const,
    })),
    ...trips.map(trip => ({
      title: trip.frontmatter.title,
      description: trip.frontmatter.summary,
      date: trip.frontmatter.dateRange.start,
      url: `${SITE_URL}/trips/${trip.slug}`,
      type: 'trip' as const,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Pujith Sai Kumar Korlepara - Systems &amp; ML</title>
    <link>${SITE_URL}</link>
    <description>M.Tech CS @ IIT Bombay | Systems Engineering &amp; Machine Intelligence</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${allContent
      .map(
        item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <guid>${item.url}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}
