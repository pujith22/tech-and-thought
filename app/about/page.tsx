import Image from 'next/image';

export const metadata = {
  title: 'About',
  description: 'Learn more about Pujith Sai Kumar Korlepara',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/profile_pic.png"
            alt="Pujith Sai Kumar Korlepara"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        
        <div className="flex-1">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome! I'm Pujith Sai Kumar Korlepara, currently pursuing my M.Tech in Computer Science and Engineering at IIT Bombay (2025-2027).
          </p>
        </div>
      </div>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold mt-8 mb-4">Background</h2>
        <p className="leading-relaxed mb-4">
          Prior to joining <strong>IIT Bombay</strong>, I worked as a <strong>Senior Software Engineer</strong> at <a href="https://my.getsimpl.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Simpl Inc.</a>, a BNPL (Buy Now Pay Later) fintech startup. 
          I owned the <strong>payments-api microservice</strong> responsible for handling inbound re-payments, working with technologies like <strong>Ruby on Rails</strong>, <strong>Golang</strong>, <strong>Postgres</strong>, <strong>Kafka</strong>, and event-driven architecture.
        </p>

        <p className="leading-relaxed mb-6">
          After about <strong>2 years of work experience</strong>, I took a career break to pursue personal goals and prepare for GATE 2025. I cracked it with an <strong className="text-blue-600 dark:text-blue-400">All India Rank of 163</strong> out of ~179,000 candidates, which led me to IIT Bombay.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Research Interests</h2>
        <p className="leading-relaxed mb-4">
          My interests lie at the intersection of <strong className="text-purple-600 dark:text-purple-400">systems engineering and machine intelligence</strong>. I'm currently investigating how intelligent agents can be deployed over the web to complement traditional information retrieval techniques for better query processing and relevancy enhancement.
        </p>

        <p className="leading-relaxed mb-6">
          I'm exploring both traditional <strong>IR methods</strong> and how <strong>LLMs</strong> store corpus information and evaluate search queries. If you're interested in <strong>Mathematics</strong>, <strong>Machine Intelligence</strong>, or <strong>Computer Science</strong> and would like to brainstorm ideas, feel free to connect!
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
        <ul className="space-y-3 mb-6">
          <li className="leading-relaxed">
            <strong>Meta Hacker Cup 2025:</strong> Worldwide rank <strong className="text-orange-600 dark:text-orange-400">669</strong> in Round 2
          </li>
          <li className="leading-relaxed">
            <strong>GATE 2025:</strong> <strong className="text-green-600 dark:text-green-400">AIR 163</strong> in Computer Science
          </li>
          <li className="leading-relaxed">
            <strong>ICPC Kanpur Regionals 2021:</strong> 80th place
          </li>
          <li className="leading-relaxed">
            <strong>Freelance Tutor:</strong> Trained students for ICPC, IOI, USACO with notable results including a <strong className="text-amber-600 dark:text-amber-400">bronze medalist at NOI Singapore 2024</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Beyond Work</h2>
        <p className="leading-relaxed mb-6">
          I enjoy <strong>volleyball</strong>, <strong>badminton</strong>, <strong>chess</strong>, gaming (PC/PS5), playing <strong>piano</strong>, reading books, and freelance tutoring. 
          I've been teaching <strong>Data Structures and Algorithms</strong> online since the COVID pandemic (2021) on the Teacheron platform.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">This Blog</h2>
        <p className="leading-relaxed mb-4">
          This is my digital space to share <strong>technical deep dives</strong>, <strong>research explorations</strong>, and <strong>personal reflections</strong>. 
          It's a window into my journey of continuous learning in systems, ML, and beyond.
        </p>
      </div>
    </div>
  );
}
