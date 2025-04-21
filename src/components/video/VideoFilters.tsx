import React from 'react';

interface VideoFiltersProps {
  topics: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const VideoFilters: React.FC<VideoFiltersProps> = ({ 
  topics, 
  activeFilter, 
  setActiveFilter 
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Explore Topics</h2>
        
        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
          View All Categories
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => setActiveFilter(topic)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === topic
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoFilters;
