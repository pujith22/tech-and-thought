import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Pujith Sai Kumar Korlepara
          </Link>
          
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/posts" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/theory" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Theory
              </Link>
            </li>
            <li>
              <Link href="/science" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Science
              </Link>
            </li>
            <li>
              <Link href="/tech" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Tech
              </Link>
            </li>
            <li>
              <Link href="/trips" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Trips
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
