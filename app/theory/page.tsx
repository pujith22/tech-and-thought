export const metadata = {
  title: 'Theory Blogs',
  description: 'Theoretical computer science, algorithms, and mathematical foundations',
};

export default function TheoryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Theory Blogs</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Exploring theoretical computer science, algorithms, complexity theory, and mathematical foundations
        </p>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-6xl mb-4">📐</div>
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This section will feature deep dives into algorithms, complexity theory, computational models, 
            graph theory, and other theoretical CS topics. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
