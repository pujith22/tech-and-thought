'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className={`max-w-2xl mx-auto text-center space-y-8 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* 404 Number with gradient */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10"></div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The resource you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            ← Back to Home
          </Link>
          <Link
            href="/posts"
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
          >
            Browse Posts
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="pt-8 text-gray-400 dark:text-gray-600">
          <p className="text-sm">
            Lost? Try searching from the{' '}
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              homepage
            </Link>{' '}
            or check out our{' '}
            <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
              about page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
