import { getAllContent, PostFrontmatter } from '@/lib/mdx/mdx';
import PostCard from '@/components/ui/PostCard';

export const metadata = {
  title: 'Posts',
  description: 'All blog posts about technology and science',
};

export default async function PostsPage() {
  const posts = await getAllContent<PostFrontmatter>('posts');
  
  // Sort by date
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts on technology, science, and software engineering
        </p>
      </div>

      {sortedPosts.length > 0 ? (
        <div className="grid gap-6">
          {sortedPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              frontmatter={post.frontmatter}
              readingTime={post.readingTime}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          No posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}
