import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  summary: string;
  tags: string[];
  categories?: string[];
  coverImage?: string;
  canonical?: string;
  draft?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  series?: string;
  seriesOrder?: number;
}

export interface TripFrontmatter {
  title: string;
  slug: string;
  dateRange: {
    start: string;
    end: string;
  };
  location: string;
  region?: string;
  summary: string;
  coverImage?: string;
  mapGPX?: string;
  coords?: {
    lat: number;
    lng: number;
  };
  gearList?: string[];
  difficulty?: string;
  distanceKm?: number;
  elevationGainM?: number;
  photos?: string[];
  tags: string[];
  draft?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
}

export interface Trip {
  slug: string;
  frontmatter: TripFrontmatter;
  content: string;
  readingTime: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function getContentBySlug<T extends PostFrontmatter | TripFrontmatter>(
  type: 'posts' | 'trips' | 'projects',
  slug: string
): Promise<{ frontmatter: T; content: string; readingTime: string }> {
  const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    frontmatter: data as T,
    content,
    readingTime: stats.text,
  };
}

export async function getAllContent<T extends PostFrontmatter | TripFrontmatter>(
  type: 'posts' | 'trips' | 'projects',
  includeDrafts = false
): Promise<Array<{ slug: string; frontmatter: T; readingTime: string }>> {
  const contentPath = path.join(CONTENT_DIR, type);
  
  if (!fs.existsSync(contentPath)) {
    return [];
  }

  const files = fs.readdirSync(contentPath);
  const content = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(contentPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        frontmatter: data as T,
        readingTime: stats.text,
      };
    })
    .filter((item) => includeDrafts || !item.frontmatter.draft);

  return content;
}

export async function compileMDXContent(source: string) {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
        ],
      },
    },
  });
}

export function getAllTags(type: 'posts' | 'trips' | 'projects'): string[] {
  const contentPath = path.join(CONTENT_DIR, type);
  
  if (!fs.existsSync(contentPath)) {
    return [];
  }

  const files = fs.readdirSync(contentPath);
  const tags = new Set<string>();

  files
    .filter((file) => file.endsWith('.mdx'))
    .forEach((file) => {
      const filePath = path.join(contentPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach((tag: string) => tags.add(tag));
      }
    });

  return Array.from(tags).sort();
}
