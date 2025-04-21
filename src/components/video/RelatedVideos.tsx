import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedVideosProps {
  currentVideoId: string;
  category: string;
}

// Mock data for related videos
const getRelatedVideos = (currentId: string, category: string) => {
  return Array(6).fill(0).map((_, i) => {
    const id = `video-${parseInt(currentId.split('-')[1]) + i + 1}`;
    return {
      id,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Tutorial: ${['Advanced Concepts', 'Getting Started', 'Tips & Tricks', 'Project Setup', 'Best Practices', 'Common Mistakes'][i % 6]}`,
      thumbnail: `/images/thumbnails/${category}-${(i % 3) + 1}.jpg`,
      views: Math.floor(Math.random() * 900000) + 100000,
      uploadDate: `${Math.floor(Math.random() * 11) + 1} ${['days', 'weeks', 'months'][Math.floor(Math.random() * 3)]} ago`,
      duration: `${Math.floor(Math.random() * 15) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      instructor: {
        name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar"][i % 5],
        verified: i % 3 === 0
      }
    };
  });
};

const RelatedVideos: React.FC<RelatedVideosProps> = ({ currentVideoId, category }) => {
  const relatedVideos = getRelatedVideos(currentVideoId, category);
  
  // Format the views count
  const formatViews = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    } else {
      return `${count} views`;
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Videos</h3>
      
      <div className="space-y-4">
        {relatedVideos.map((video) => (
          <Link 
            key={video.id}
            href={`/video/${video.id}`}
            className="flex hover:bg-gray-50 dark:hover:bg-gray-750 rounded-lg p-2 transition-colors"
          >
            {/* Video thumbnail */}
            <div className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              
              {/* Duration badge */}
              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-medium px-1 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            
            {/* Video details */}
            <div className="ml-3 flex-1 overflow-hidden">
              <h4 className="text-gray-900 dark:text-white font-medium line-clamp-2">
                {video.title}
              </h4>
              
              <div className="flex items-center mt-1 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <span>{video.instructor.name}</span>
                  {video.instructor.verified && (
                    <svg className="w-3 h-3 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="flex items-center mt-1 text-xs text-gray-600 dark:text-gray-400">
                <span>{formatViews(video.views)}</span>
                <span className="mx-1">•</span>
                <span>{video.uploadDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link 
          href={`/topic/${category}`}
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
        >
          View more {category} videos →
        </Link>
      </div>
    </div>
  );
};

export default RelatedVideos;
