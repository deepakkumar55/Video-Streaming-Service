import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploadDate: string;
  instructor: {
    name: string;
    avatar: string;
    verified: boolean;
  };
}

interface TopicVideosProps {
  videos: Video[];
  topicName: string;
}

const TopicVideos: React.FC<TopicVideosProps> = ({ videos, topicName }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">{topicName} Videos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map(video => (
          <Link 
            key={video.id} 
            href={`/video/${video.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 mb-2">
                {video.title}
              </h3>
              
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0 mr-2">
                  <Image
                    src={video.instructor.avatar}
                    alt={video.instructor.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {video.instructor.name}
                </span>
                {video.instructor.verified && (
                  <svg className="w-3.5 h-3.5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <span>{video.views.toLocaleString()} views</span>
                <span className="mx-1">•</span>
                <span>{video.uploadDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href={`/search?topic=${topicName.toLowerCase()}`}
          className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors"
        >
          View all {topicName} videos
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TopicVideos;
