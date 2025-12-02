export const metadata = {
  title: 'Projects',
  description: 'Projects and work by Pujith Sai Kumar Korlepara',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Persistent Key-Value Store",
      description: "A multi-threaded server written in C++ with persistence support using Postgres as database layer and RESTful APIs for user interaction. Achieves ~35K RPM at peak on M2 MacBook Pro. Every component written in C++ from scratch.",
      tech: ["C++", "PostgreSQL", "Multi-threading", "REST API"],
      github: "https://github.com/pujith22/persistent-key-value-store",
    },
    {
      title: "FlightMate: Review Before you Fly",
      description: "A project based on web scraping, data analysis and visualization implemented in Python. Uses Flask for RESTful backend, MongoDB for persistence and Streamlit for frontend.",
      tech: ["Python", "Flask", "MongoDB", "Streamlit", "Data Analysis"],
      github: "https://github.com/pujith22/FlightMate-Review-before-you-Fly",
    },
    {
      title: "Epidemic Ender",
      description: "An Android + ML project that helps people identify contamination zones. Uses location data to track and predict epidemic spread patterns.",
      tech: ["Android", "Machine Learning", "Python", "Location Services"],
      github: "https://github.com/PUJITH22/EPIDEMICENDER",
    },
    {
      title: "N-Puzzle Problem Solver",
      description: "Implementation of A* algorithm to solve N-puzzle problems. Written in C language without using any fancy libraries by writing every implementation from scratch.",
      tech: ["C", "A* Algorithm", "State Space Search"],
      github: "https://github.com/pujith22/AI_Lab",
      demo: "https://drive.google.com/file/d/1ymSAKKRCB1a74EL3-9KWqGFwYY4dw729/view?usp=sharing",
    },
  ];

  const achievements = [
    {
      title: "Meta Hacker Cup 2025",
      description: "Achieved worldwide rank of 669 in Round 2",
      link: "https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/2635405103348480",
    },
    {
      title: "GATE 2025",
      description: "All India Rank 163 in Computer Science out of ~179,000 candidates",
      link: "https://drive.google.com/file/d/1rlCPu-xDI85TzV85ewelHql77_uno9AH/view?usp=sharing",
    },
    {
      title: "ICPC Kanpur Regionals 2021",
      description: "Team achieved 80th place",
      link: "https://drive.google.com/file/d/1XCSsXcm0NCKtLJHg9Rs-8w89p8FRX6K4/view?usp=sharing",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A collection of things I've built and worked on
        </p>
      </div>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certificate/Details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-bold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["C", "C++", "Java", "Python", "Ruby", "Golang"].map((skill) => (
                <span key={skill} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-bold mb-3">Databases & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Redis", "MongoDB", "Kafka", "Git", "Linux"].map((skill) => (
                <span key={skill} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-bold mb-3">Frameworks & Architecture</h3>
            <div className="flex flex-wrap gap-2">
              {["Ruby on Rails", "Flask", "Microservices", "Event-Driven"].map((skill) => (
                <span key={skill} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
        <p className="text-sm">
          💡 <strong>More projects coming soon!</strong> You can track ongoing projects by following me on{" "}
          <a
            href="https://github.com/pujith22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
