import { notFound } from 'next/navigation';
import { getAllContent, getContentBySlug, PostFrontmatter } from '@/lib/mdx/mdx';
import { formatDate } from '@/lib/utils';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllContent<PostFrontmatter>('posts');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { frontmatter } = await getContentBySlug<PostFrontmatter>('posts', slug);
    return {
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.summary,
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const { frontmatter, content, readingTime } = await getContentBySlug<PostFrontmatter>('posts', slug);

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
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
            <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            <span>•</span>
            <span>{readingTime}</span>
          </div>

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

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {mdxContent}
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
