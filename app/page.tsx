import Link from 'next/link';
import { getAllContent } from '@/lib/mdx/mdx';
import { PostFrontmatter } from '@/lib/mdx/mdx';
import PostCard from '@/components/ui/PostCard';

export default async function Home() {
  const posts = await getAllContent<PostFrontmatter>('posts');
  
  // Sort by date and get latest 3
  const latestPosts = posts
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-12">
        <h1 className="text-5xl font-bold">
          Hi, I'm Pujith 👋
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          M.Tech CS @ IIT Bombay | Systems & Machine Intelligence | GATE 2025 AIR 163
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-3xl mx-auto">
          Exploring the intersection of distributed systems, machine learning, and information retrieval. 
          This is my digital space for technical deep dives, research explorations, and personal reflections.
        </p>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link 
            href="/posts" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all →
          </Link>
        </div>
        
        {latestPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                frontmatter={post.frontmatter}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No posts yet. Check back soon!</p>
        )}
      </section>

      {/* Expeditions - Coming Soon */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Expeditions</h2>
          <Link 
            href="/trips" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Coming Soon →
          </Link>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Travel and expedition logs will be added soon. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
}
