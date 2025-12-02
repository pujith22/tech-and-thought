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
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-16 md:py-24">
        <div className="inline-block animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Hi, I'm Pujith
            </span>
            <span className="inline-block animate-wave ml-2">👋</span>
          </h1>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium px-4">
          M.Tech CS @ IIT Bombay | Systems & Machine Intelligence
        </p>
        
        <div className="flex items-center justify-center gap-3 flex-wrap px-4">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800 text-sm font-semibold text-blue-700 dark:text-blue-300">
            🎯 GATE 2025 AIR 163
          </span>
        </div>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Exploring the intersection of distributed systems, machine learning, and information retrieval. 
          This is my digital space for technical deep dives, research explorations, and personal reflections.
        </p>
        
        <div className="flex gap-4 justify-center pt-4 flex-wrap px-4">
          <Link 
            href="/posts"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Read Posts →
          </Link>
          <Link 
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-105 transition-all"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="px-4 md:px-0">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Posts</h2>
            <p className="text-gray-600 dark:text-gray-400">Recent thoughts and technical explorations</p>
          </div>
          <Link 
            href="/posts" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-1 group transition-all"
          >
            View all 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
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
      <section className="px-4 md:px-0">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Expeditions</h2>
            <p className="text-gray-600 dark:text-gray-400">Adventures and travel experiences</p>
          </div>
          <Link 
            href="/trips" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-1 group transition-all"
          >
            Coming Soon 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        <div className="relative overflow-hidden border border-gray-200 dark:border-gray-800 rounded-xl p-12 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="relative">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Travel and expedition logs will be added soon. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
