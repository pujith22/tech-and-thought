import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              M.Tech CS @ IIT Bombay | Exploring Systems Engineering & Machine Intelligence
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/posts" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/trips" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Trips
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/rss.xml" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/pujith22" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pujith22" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.x.com/pujith28" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Pujith Sai Kumar Korlepara. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
