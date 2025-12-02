import ContactReveal from '@/components/ui/ContactReveal';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Pujith Sai Kumar Korlepara',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Contact</h1>
      
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I'd love to hear from you! Whether you want to discuss research ideas, brainstorm about systems and ML, 
          or just connect, feel free to reach out through any of these channels.
        </p>

        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Email</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ContactReveal type="email" value="pujith@cse.iitb.ac.in" label="(Academic)" />
              </div>
              <div className="flex items-center gap-2">
                <ContactReveal type="email" value="pujith22.sde@gmail.com" label="(Personal)" />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Phone / Messaging</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ContactReveal type="phone" value="+919996159269" label="(Call / WhatsApp / Telegram)" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              💡 Contact information is hidden to prevent scraping. Click to reveal.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Social Media</h2>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://github.com/pujith22" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/pujith22" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.x.com/pujith28" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Twitter/X
              </a>
              <a 
                href="https://www.instagram.com/pujith_k/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@pujith22" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                YouTube
              </a>
              <a 
                href="https://stackoverflow.com/users/17393596/pujith22" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Stack Overflow
              </a>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Competitive Programming</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <a href="https://codeforces.com/profile/pujith_k" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Codeforces</a>
              <a href="https://www.codechef.com/users/chef_pujith" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">CodeChef</a>
              <a href="https://leetcode.com/u/pujith22/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LeetCode</a>
              <a href="https://atcoder.jp/users/pujith22" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">AtCoder</a>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Resume</h2>
          <a 
            href="https://drive.google.com/file/d/10YWpm5BKU86dzrzwYCilKTn_gYIitjrU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            View or download my detailed resume from Google Drive
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
          <p className="text-sm">
            💡 <strong>Research Collaboration:</strong> If you're interested in brainstorming ideas related to systems, 
            machine intelligence, or information retrieval, I'm always open to discussions. Connect with me on LinkedIn!
          </p>
        </div>
      </div>
    </div>
  );
}
