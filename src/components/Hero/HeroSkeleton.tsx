// components/HeroSkeleton.tsx
const HeroSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-zinc-900 animate-pulse">
      {/* Mobile Skeleton (< lg screens) */}
      <div className="lg:hidden px-4 sm:px-6 py-8">
        <div className="space-y-4">
          <div className="space-y-2">
            {/* Title */}
            <div className="h-7 sm:h-8 md:h-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-[85%] sm:w-3/4 mx-auto" />
            <div className="h-7 sm:h-8 md:h-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-[75%] sm:w-2/3 mx-auto" />
          </div>
          
          {/* Description */}
          <div className="space-y-2 mt-4">
            <div className="h-3 sm:h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full mx-auto" />
            <div className="h-3 sm:h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-[90%] mx-auto" />
            <div className="h-3 sm:h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-[95%] mx-auto" />
          </div>

          {/* Image Placeholder */}
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] bg-zinc-200 dark:bg-zinc-800 rounded-full mx-auto mt-8" />
          
          {/* Button */}
          <div className="w-full sm:w-2/3 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full mx-auto mt-6" />
        </div>
      </div>

      {/* Desktop Skeleton (lg+ screens) */}
      <div className="hidden lg:flex pb-[50px] border-b border-zinc-200 dark:border-zinc-700">
        {/* Left Section */}
        <div className="w-[45%] xl:w-[40%] p-8 lg:p-12 xl:p-16 bg-zinc-100 dark:bg-zinc-800 space-y-6">
          <div className="space-y-4">
            {/* Title */}
            <div className="space-y-3">
              <div className="h-10 xl:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-lg w-[85%]" />
              <div className="h-10 xl:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-lg w-[75%]" />
            </div>
            
            {/* Description */}
            <div className="space-y-2 mt-6">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded-lg w-full" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded-lg w-[90%]" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded-lg w-[95%]" />
            </div>
          </div>
          
          {/* Button */}
          <div className="w-44 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full mt-8" />
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 lg:p-8 xl:p-12 space-x-4 lg:space-x-8 flex justify-between">
          {/* Main Product Display */}
          <div className="flex flex-col items-center space-y-6 mx-auto">
            <div className="w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="w-40 lg:w-48 xl:w-56 h-6 lg:h-7 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
            <div className="w-36 lg:w-40 xl:w-44 h-10 lg:h-11 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
          </div>

          {/* Product List */}
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Up Arrow */}
            <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            
            {/* Product Items */}
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-3 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full w-[200px] lg:w-[240px] xl:w-[280px]"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-zinc-200 dark:bg-zinc-700 flex-shrink-0" />
                  <div className="flex-1 h-4 bg-zinc-200 dark:bg-zinc-700 rounded-lg" />
                </div>
              ))}
            </div>
            
            {/* Down Arrow */}
            <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;