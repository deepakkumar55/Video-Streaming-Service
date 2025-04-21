import React from 'react';
import CategorySection from '@/components/sections/CategorySection';
import VideoGrid from '@/components/sections/VideoGrid';
import FeaturedCreator from '@/components/sections/FeaturedCreator';
import TrendingCourses from '@/components/sections/TrendingCourses';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black min-h-screen pb-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="border-b border-gray-200 dark:border-gray-800 sticky top-16 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
          <CategorySection />
        </div>
        
        <div className="px-4 md:px-6 lg:px-8 pt-6">
          {/* Featured creator of the month */}
          <FeaturedCreator />
          
          {/* Main content */}
          <h2 className="text-2xl font-bold mb-6 mt-12 pl-2 border-l-4 border-indigo-600 dark:border-indigo-400">
            Recommended for you
          </h2>
          <VideoGrid category="recommended" />
          
          {/* Trending courses */}
          <h2 className="text-2xl font-bold mb-6 mt-12 pl-2 border-l-4 border-red-600 dark:border-red-400">
            Trending Among Indian Developers
          </h2>
          <TrendingCourses />
          
          {/* Recently uploaded */}
          <h2 className="text-2xl font-bold mb-6 mt-12 pl-2 border-l-4 border-emerald-600 dark:border-emerald-400">
            Recently Uploaded
          </h2>
          <VideoGrid category="recent" />
        </div>
      </div>
    </div>
  );
}