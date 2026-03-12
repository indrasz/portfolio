export function SkeletonBlock({ className = "" }: { className?: string }) {
    return (
      <div
        className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`}
      />
    );
  }
  
  export function ProjectCardSkeleton() {
    return (
      <div className="flex-shrink-0 w-[280px] sm:w-auto">
        <div className="h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
          {/* Thumbnail */}
          <SkeletonBlock className="h-44 w-full rounded-none" />
  
          {/* Content */}
          <div className="p-4 space-y-3">
            {/* company + year */}
            <div className="flex items-center justify-between">
              <SkeletonBlock className="h-3.5 w-24" />
              <SkeletonBlock className="h-3.5 w-10" />
            </div>
  
            {/* title */}
            <SkeletonBlock className="h-5 w-3/4" />
  
            {/* subtitle */}
            <SkeletonBlock className="h-3.5 w-1/2" />
  
            {/* stack pills */}
            <div className="flex gap-1.5 pt-1">
              <SkeletonBlock className="h-5 w-14 rounded-full" />
              <SkeletonBlock className="h-5 w-16 rounded-full" />
              <SkeletonBlock className="h-5 w-12 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Skeleton untuk halaman detail project
  export function ProjectDetailSkeleton() {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-pulse">
        {/* Hero image */}
        <SkeletonBlock className="h-56 sm:h-72 md:h-96 w-full rounded-none" />
  
        <div className="p-5 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div className="flex-1 space-y-2">
              {/* company badge + year */}
              <div className="flex items-center gap-2">
                <SkeletonBlock className="h-5 w-28 rounded-full" />
                <SkeletonBlock className="h-4 w-10" />
              </div>
              {/* title */}
              <SkeletonBlock className="h-8 w-2/3" />
              {/* subtitle */}
              <SkeletonBlock className="h-4 w-1/2" />
            </div>
            {/* buttons */}
            <div className="flex gap-2">
              <SkeletonBlock className="h-9 w-24 rounded-lg" />
            </div>
          </div>
  
          {/* Body grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: description */}
            <div className="space-y-3">
              <SkeletonBlock className="h-5 w-32 mb-1" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
              <SkeletonBlock className="h-4 w-4/6" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-3/4" />
            </div>
  
            {/* Right: stack + features */}
            <div className="space-y-7">
              <div>
                <SkeletonBlock className="h-5 w-24 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {[80, 64, 72, 56, 68].map((w, i) => (
                    <SkeletonBlock key={i} className={`h-6 w-${w === 80 ? '20' : w === 64 ? '16' : w === 72 ? '[72px]' : w === 56 ? '14' : '[68px]'} rounded-full`} />
                  ))}
                </div>
              </div>
  
              <div>
                <SkeletonBlock className="h-5 w-28 mb-3" />
                <div className="space-y-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <SkeletonBlock className="h-4 w-4 rounded-full flex-shrink-0" />
                      <SkeletonBlock className={`h-4 ${i % 2 === 0 ? 'w-3/4' : 'w-5/6'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }