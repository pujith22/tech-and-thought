import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { TripFrontmatter } from '@/lib/mdx/mdx';

interface TripCardProps {
  slug: string;
  frontmatter: TripFrontmatter;
  readingTime: string;
}

export default function TripCard({ slug, frontmatter, readingTime }: TripCardProps) {
  return (
    <article className="group border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      {frontmatter.coverImage && (
        <div className="aspect-video bg-gray-200 dark:bg-gray-800">
          {/* Image will be added later with proper optimization */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Cover Image
          </div>
        </div>
      )}
      
      <div className="p-6">
        <Link href={`/trips/${slug}`}>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {frontmatter.title}
          </h2>
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <time dateTime={frontmatter.dateRange.start}>
            {formatDate(frontmatter.dateRange.start)} - {formatDate(frontmatter.dateRange.end)}
          </time>
          <span>•</span>
          <span>{frontmatter.location}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">{frontmatter.summary}</p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
