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
    <article className="group relative border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 bg-white dark:bg-gray-900 hover:-translate-y-1">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-blue-950/20 dark:group-hover:to-purple-950/20 rounded-xl transition-all duration-300"></div>
      
      <div className="relative">
        <Link href={`/posts/${slug}`}>
          <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {frontmatter.title}
          </h2>
        </Link>
        
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={frontmatter.date} className="flex items-center gap-1">
            <span className="text-xs">📅</span>
            {formatDate(frontmatter.date)}
          </time>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <span className="flex items-center gap-1">
            <span className="text-xs">⏱️</span>
            {readingTime}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-5 line-clamp-3 leading-relaxed">{frontmatter.summary}</p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
