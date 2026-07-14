export function AnnouncementSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4" role="status" aria-label="Loading announcements">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="border-l-4 border-gray-200 dark:border-gray-600 p-4 rounded-r-lg animate-pulse">
          <div className="flex items-center justify-between mb-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
            <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-20" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-full" />
            <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-4/5" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading announcements...</span>
    </div>
  );
}
