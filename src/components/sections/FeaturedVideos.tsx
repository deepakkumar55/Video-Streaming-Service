import React from 'react';
import VideoCard from '../ui/VideoCard';
import Link from 'next/link';

// Mock data
const featuredVideos = [
  {
    id: '1',
    title: 'Introduction to JavaScript Programming',
    thumbnail: '/thumbnails/js-intro.jpg',
    duration: '12:34',
    views: 45290,
    author: 'John Smith',
    uploadDate: '2 weeks ago'
  },
  {
    id: '2',
    title: 'Advanced React Hooks Tutorial',
    thumbnail: '/thumbnails/react-hooks.jpg',
    duration: '28:15',
    views: 32150,
    author: 'Sarah Johnson',
    uploadDate: '3 days ago'
  },
  {
    id: '3',
    title: 'Data Structures Explained Simply',
    thumbnail: '/thumbnails/data-structures.jpg',
    duration: '42:18',
    views: 18750,
    author: 'Michael Chen',
    uploadDate: '1 month ago'
  },
  {
    id: '4',
    title: 'Python for Data Science - Complete Course',
    thumbnail: '/thumbnails/python-data.jpg',
    duration: '1:15:43',
    views: 65432,
    author: 'Alex Williams',
    uploadDate: '2 months ago'
  }
];

interface FeaturedVideosProps {
  title: string;
  viewAllLink?: string;
}

const FeaturedVideos: React.FC<FeaturedVideosProps> = ({ title, viewAllLink }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View all
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredVideos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
