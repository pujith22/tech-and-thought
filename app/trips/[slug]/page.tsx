import { notFound } from 'next/navigation';
import { getAllContent, getContentBySlug, TripFrontmatter } from '@/lib/mdx/mdx';
import { formatDate } from '@/lib/utils';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export async function generateStaticParams() {
  const trips = await getAllContent<TripFrontmatter>('trips');
  return trips.map((trip) => ({
    slug: trip.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { frontmatter } = await getContentBySlug<TripFrontmatter>('trips', slug);
    return {
      title: frontmatter.title,
      description: frontmatter.summary,
    };
  } catch {
    return {};
  }
}

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const { frontmatter, content, readingTime } = await getContentBySlug<TripFrontmatter>('trips', slug);

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'wrap',
              },
            ],
          ],
        },
      },
    });

    return (
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
            <time dateTime={frontmatter.dateRange.start}>
              {formatDate(frontmatter.dateRange.start)} - {formatDate(frontmatter.dateRange.end)}
            </time>
            <span>•</span>
            <span>{frontmatter.location}</span>
            <span>•</span>
            <span>{readingTime}</span>
          </div>

          {(frontmatter.distanceKm || frontmatter.elevationGainM || frontmatter.difficulty) && (
            <div className="flex flex-wrap gap-4 mb-4 text-sm">
              {frontmatter.distanceKm && (
                <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded">
                  Distance: {frontmatter.distanceKm} km
                </div>
              )}
              {frontmatter.elevationGainM && (
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded">
                  Elevation: {frontmatter.elevationGainM} m
                </div>
              )}
              {frontmatter.difficulty && (
                <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded">
                  {frontmatter.difficulty}
                </div>
              )}
            </div>
          )}

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Map placeholder - will be added in trip features task */}
        {frontmatter.coords && (
          <div className="mb-8 aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              Map component will be added here
            </p>
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {mdxContent}
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
