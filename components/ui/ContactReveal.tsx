'use client';

import { useState } from 'react';

interface ContactRevealProps {
  type: 'email' | 'phone';
  value: string;
  label?: string;
}

export default function ContactReveal({ type, value, label }: ContactRevealProps) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!revealed) {
    return (
      <button
        onClick={handleReveal}
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors"
      >
        <span className="text-blue-600 dark:text-blue-400 blur-sm select-none">
          {type === 'email' ? 'user@example.com' : '+91 XXXXXXXXXX'}
        </span>
        <span className="text-sm text-blue-600 dark:text-blue-400">Click to reveal</span>
      </button>
    );
  }

  const href = type === 'email' ? `mailto:${value}` : `tel:${value}`;

  return (
    <div className="inline-flex items-center gap-2">
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {value}
      </a>
      {label && <span className="text-sm text-gray-500">{label}</span>}
      <button
        onClick={handleCopy}
        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
        title="Copy to clipboard"
      >
        Copy
      </button>
    </div>
  );
}