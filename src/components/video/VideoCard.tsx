import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    views: number;
    uploadedAt: string;
    duration: string;
    instructor: {
      id: string;
      name: string;
      avatar: string;
      verified: boolean;
    };
    category: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  // Format views
  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  return (
    <div className="group">
      <Link href={`/video/${video.id}`} className="block">
        <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
      </Link>
      
      <div className="flex space-x-3">
        <Link href={`/creator/${video.instructor.id}`} className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <Image
              src={video.instructor.avatar}
              alt={video.instructor.name}
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        </Link>
        
        <div className="flex-1 min-w-0">
          <Link href={`/video/${video.id}`} className="block">
            <h3 className="text-base font-medium text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {video.title}
            </h3>
          </Link>
          
          <Link href={`/creator/${video.instructor.id}`} className="block">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span className="truncate">{video.instructor.name}</span>
              {video.instructor.verified && (
                <svg className="w-3.5 h-3.5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </Link>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span>{formatViews(video.views)}</span>
            <span className="mx-1">•</span>
            <span>{video.uploadedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
