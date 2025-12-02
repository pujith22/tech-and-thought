export const metadata = {
  title: 'Tech Blogs',
  description: 'Software engineering, distributed systems, ML/AI, and technology insights',
};

export default function TechPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Tech Blogs</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Deep dives into software engineering, distributed systems, machine learning, and cutting-edge technology
        </p>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-6xl mb-4">💻</div>
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This section will feature technical articles on system design, microservices architecture, 
            ML/AI implementations, database internals, and engineering best practices. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
