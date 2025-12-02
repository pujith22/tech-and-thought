import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { PostFrontmatter } from '@/lib/mdx/mdx';

interface PostCardProps {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: string;
}

export default function PostCard({ slug, frontmatter, readingTime }: PostCardProps) {
  return (
    <article className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <Link href={`/posts/${slug}`}>
        <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {frontmatter.title}
        </h2>
      </Link>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
        <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
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
    </article>
  );
}
