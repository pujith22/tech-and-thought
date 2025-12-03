import CopyEmail from '@/components/ui/CopyEmail';
import Image from 'next/image';

export const metadata = {
  title: 'About',
  description: 'Learn more about Pujith Sai Kumar Korlepara',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Systems Engineer • Machine Intelligence Researcher • Competitive Programmer
        </p>
      </div>
      
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25"></div>
            <Image
              src="/images/profile_pic.png"
              alt="Pujith Sai Kumar Korlepara"
              width={200}
              height={200}
              className="relative rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">Pujith Sai Kumar Korlepara</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            M.Tech in Computer Science @ <strong>IIT Bombay</strong> (2025-2027)
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              🎯 GATE AIR 163
            </span>
            <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
              🏆 Meta Hacker Cup
            </span>
            <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
              💻 Ex-Simpl Inc.
            </span>
          </div>
        </div>
      </div>
      
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">

        {/* Background Section */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">👨‍💻</span>
            Background
          </h2>
          <p className="leading-relaxed mb-4">
            Prior to joining <strong>IIT Bombay</strong>, I worked as a <strong>Senior Software Engineer</strong> at <a href="https://my.getsimpl.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Simpl Inc.</a>, a BNPL (Buy Now Pay Later) fintech startup. 
            I owned the <strong>payments-api microservice</strong> responsible for handling inbound re-payments, working with technologies like <strong>Ruby on Rails</strong>, <strong>Golang</strong>, <strong>Postgres</strong>, <strong>Kafka</strong>, and event-driven architecture.
          </p>

          <p className="leading-relaxed">
            After about <strong>2 years of work experience</strong>, I took a career break to pursue personal goals and prepare for GATE 2025. I cracked it with an <strong className="text-blue-600 dark:text-blue-400">All India Rank of 163</strong> out of ~179,000 candidates, which led me to IIT Bombay.
          </p>
        </div>

        {/* Research Interests */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 md:p-8 shadow-lg border border-purple-100 dark:border-purple-900">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            Research Interests
          </h2>
          <p className="leading-relaxed mb-4">
            My interests lie at the intersection of <strong className="text-purple-600 dark:text-purple-400">systems engineering and machine intelligence</strong>. I'm currently investigating how intelligent agents can be deployed over the web to complement traditional information retrieval techniques for better query processing and relevancy enhancement.
          </p>

          <p className="leading-relaxed">
            I'm exploring both traditional <strong>IR methods</strong> and how <strong>LLMs</strong> store corpus information and evaluate search queries. If you're interested in <strong>Mathematics</strong>, <strong>Machine Intelligence</strong>, or <strong>Computer Science</strong> and would like to brainstorm ideas, feel free to connect!
          </p>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            Achievements
          </h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-100 dark:border-orange-900">
              <span className="text-2xl">🥇</span>
              <div>
                <strong className="block mb-1">Meta Hacker Cup 2025</strong>
                <span className="text-gray-700 dark:text-gray-300">Worldwide rank <strong className="text-orange-600 dark:text-orange-400">669</strong> in Round 2</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-100 dark:border-green-900">
              <span className="text-2xl">🎯</span>
              <div>
                <strong className="block mb-1">GATE 2025</strong>
                <span className="text-gray-700 dark:text-gray-300"><strong className="text-green-600 dark:text-green-400">AIR 163</strong> in Computer Science</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-100 dark:border-blue-900">
              <span className="text-2xl">💻</span>
              <div>
                <strong className="block mb-1">ICPC Kanpur Regionals 2021</strong>
                <span className="text-gray-700 dark:text-gray-300">80th place</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900">
              <span className="text-2xl">🎓</span>
              <div>
                <strong className="block mb-1">Freelance Tutor</strong>
                <span className="text-gray-700 dark:text-gray-300">Trained students for ICPC, IOI, USACO with notable results including a <strong className="text-amber-600 dark:text-amber-400">bronze medalist at NOI Singapore 2024</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Beyond Work */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            Beyond Work
          </h2>
          <p className="leading-relaxed">
            I enjoy <strong>volleyball</strong>, <strong>badminton</strong>, <strong>chess</strong>, gaming (PC/PS5), playing <strong>piano</strong>, reading books, and freelance tutoring. 
            I've been teaching <strong>Data Structures and Algorithms</strong> online since the COVID pandemic (2021) on the Teacheron platform.
          </p>
        </div>

        {/* This Blog */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">✍️</span>
            This Blog
          </h2>
          <p className="leading-relaxed">
            This is my digital space to share <strong>technical deep dives</strong>, <strong>research explorations</strong>, and <strong>personal reflections</strong>. 
            It's a window into my journey of continuous learning in systems, ML, and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
