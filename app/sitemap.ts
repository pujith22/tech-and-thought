import { MetadataRoute } from 'next';
import { getAllContent, PostFrontmatter, TripFrontmatter } from '@/lib/mdx/mdx';

const SITE_URL = 'https://pujith-tech-and-thought.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllContent<PostFrontmatter>('posts');
  const trips = await getAllContent<TripFrontmatter>('trips');

  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/posts/${post.slug}`,
    lastModified: post.frontmatter.updated || post.frontmatter.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const tripEntries: MetadataRoute.Sitemap = trips.map(trip => ({
    url: `${SITE_URL}/trips/${trip.slug}`,
    lastModified: trip.frontmatter.dateRange.start,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/trips`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...staticPages, ...postEntries, ...tripEntries];
}
