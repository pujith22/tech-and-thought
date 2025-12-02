export const metadata = {
  title: 'Expeditions',
  description: 'Travel and expedition logs - coming soon',
};

export default function TripsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Expeditions</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Travel and outdoor adventure logs
        </p>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This section will be updated soon with travel logs, expedition reports, and outdoor adventure stories. 
            Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
