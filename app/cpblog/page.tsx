export const metadata = {
  title: 'Competitive Programming Blog',
  description: 'Advanced algorithms, data structures, and competitive programming insights',
};

export default function CPBlogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Competitive Programming Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Deep dives into algorithms, problem-solving techniques, and competitive programming strategies
        </p>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This section will feature in-depth articles on advanced algorithms, data structures, 
            competitive programming techniques, and problem-solving strategies for timed CP environment.
          </p>
        </div>
      </div>
    </div>
  );
}
