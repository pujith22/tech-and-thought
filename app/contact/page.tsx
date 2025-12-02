import ContactReveal from '@/components/ui/ContactReveal';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Pujith Sai Kumar Korlepara',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'd love to hear from you! Whether you want to discuss research ideas, brainstorm about systems and ML, 
          or just connect, feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-100 dark:border-blue-900 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✉️</span>
            <h2 className="text-xl font-bold">Email</h2>
          </div>
          <div className="space-y-3">
            <ContactReveal type="email" value="pujith@cse.iitb.ac.in" label="(Academic)" />
            <ContactReveal type="email" value="pujith22.sde@gmail.com" label="(Personal)" />
          </div>
        </div>

        {/* Phone */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-100 dark:border-green-900 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📱</span>
            <h2 className="text-xl font-bold">Phone / Messaging</h2>
          </div>
          <div className="space-y-3">
            <ContactReveal type="phone" value="+919996159269" label="(Call / WhatsApp / Telegram)" />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
            💡 Click to reveal • Hidden to prevent scraping
          </p>
        </div>

        {/* Social Media */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌐</span>
            <h2 className="text-xl font-bold">Social Media</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://github.com/pujith22" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>🔗</span> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/pujith22" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>🔗</span> LinkedIn
            </a>
            <a 
              href="https://www.x.com/pujith28" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>🔗</span> Twitter/X
            </a>
            <a 
              href="https://www.instagram.com/pujith_k/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>🔗</span> Instagram
            </a>
            <a 
              href="https://www.youtube.com/@pujith22" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>🔗</span> YouTube
            </a>
            <a 
              href="https://stackoverflow.com/users/17393596/pujith22" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>🔗</span> Stack Overflow
            </a>
          </div>
        </div>

        {/* Competitive Programming */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-100 dark:border-orange-900 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💻</span>
            <h2 className="text-xl font-bold">Competitive Programming</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://codeforces.com/profile/pujith_k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>🏆</span> Codeforces
            </a>
            <a href="https://www.codechef.com/users/chef_pujith" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>🏆</span> CodeChef
            </a>
            <a href="https://leetcode.com/u/pujith22/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>🏆</span> LeetCode
            </a>
            <a href="https://atcoder.jp/users/pujith22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>🏆</span> AtCoder
            </a>
          </div>
        </div>
      </div>

      {/* Resume & Research Collab */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📄</span>
            <h2 className="text-xl font-bold">Resume</h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            View or download my detailed resume from Google Drive
          </p>
          <a 
            href="https://drive.google.com/file/d/10YWpm5BKU86dzrzwYCilKTn_gYIitjrU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🔬</span>
            <h2 className="text-xl font-bold">Research Collaboration</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Interested in brainstorming ideas related to <strong>systems</strong>, <strong>machine intelligence</strong>, or <strong>information retrieval</strong>? 
            I'm always open to discussions. Connect with me on LinkedIn or shoot me an email!
          </p>
        </div>
      </div>
    </div>
  );
}
