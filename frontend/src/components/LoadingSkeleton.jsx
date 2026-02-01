export default function LoadingSkeleton({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full space-y-6 animate-pulse">
      <div className="grid grid-cols-2 gap-4">
        <div className={`rounded-lg h-20 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div className={`rounded-lg h-20 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`rounded-lg p-4 space-y-3 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'}`}>
            <div className={`h-4 rounded w-1/4 ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className={`h-8 rounded-full w-20 ${isDark ? 'bg-gray-600' : 'bg-gray-350'}`}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
