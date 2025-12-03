export const metadata = {
  title: 'Science Blogs',
  description: 'Physics, mathematics, biology, chemistry, and scientific explorations',
};

export default function SciencePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Science Blogs</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Exploring mostly physics, mathematics and the wonders of natural science
        </p>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-6xl mb-4">🔬</div>
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This section will feature articles on interesting topics in Physics, mathematical proofs, 
            and fascinating scientific innovations and discoveries. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
