"use client";

import { useState } from "react";

export default function CopyEmail({ email, label }: { email: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="flex items-center gap-2">
      <a href={`mailto:${email}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {email}
      </a>
      {label ? <span className="text-gray-500 text-xs">{label}</span> : null}
      <button
        type="button"
        onClick={onCopy}
        className="px-2 py-1 text-xs rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={`Copy ${email}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
