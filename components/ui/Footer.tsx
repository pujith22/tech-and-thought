import Link from 'next/link';
import CopyEmail from './CopyEmail';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent" style={{ fontSize: 'clamp(1.063rem, 0.938rem + 0.313vw, 1.25rem)' }}>
                Pujith Sai Kumar
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontSize: 'clamp(0.813rem, 0.75rem + 0.313vw, 0.938rem)' }}>
              M.Tech CS @ IIT Bombay | Algorithms, Math, Machine Intelligence and Systems
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100" style={{ fontSize: 'clamp(0.875rem, 0.813rem + 0.313vw, 1rem)' }}>Quick Links</h3>
            <ul className="space-y-2.5" style={{ fontSize: 'clamp(0.813rem, 0.75rem + 0.313vw, 0.938rem)' }}>
              <li>
                <Link href="/posts" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/rss.xml" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100" style={{ fontSize: 'clamp(0.875rem, 0.813rem + 0.313vw, 1rem)' }}>Categories</h3>
            <ul className="space-y-2.5" style={{ fontSize: 'clamp(0.813rem, 0.75rem + 0.313vw, 0.938rem)' }}>
              <li>
                <Link href="/theory" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Theory
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Science
                </Link>
              </li>
              <li>
                <Link href="/tech" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Tech
                </Link>
              </li>
              <li>
                <Link href="/cpblog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  CPBlog
                </Link>
              </li>
              <li>
                <Link href="/trips" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Trips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100" style={{ fontSize: 'clamp(0.875rem, 0.813rem + 0.313vw, 1rem)' }}>Connect</h3>
            <ul className="space-y-2.5" style={{ fontSize: 'clamp(0.813rem, 0.75rem + 0.313vw, 0.938rem)' }}>
              <li>
                <a href="https://github.com/pujith22" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:scale-110 transition-transform">🔗</span>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pujith22" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:scale-110 transition-transform">🔗</span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.x.com/pujith28" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:scale-110 transition-transform">🔗</span>
                  Twitter
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:scale-110 transition-transform">✉️</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>          
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400" style={{ fontSize: 'clamp(0.813rem, 0.75rem + 0.313vw, 0.938rem)' }}>
            © {currentYear} Pujith Sai Kumar Korlepara. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 mt-2" style={{ fontSize: 'clamp(0.688rem, 0.625rem + 0.313vw, 0.813rem)' }}>
            Built with Next.js • Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
