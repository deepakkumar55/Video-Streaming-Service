import React from 'react';
import Link from 'next/link';

interface VideoInformationProps {
  title: string;
  views: number;
  uploadDate: string;
  tags: string[];
  language: string;
  difficulty: string;
}

const VideoInformation: React.FC<VideoInformationProps> = ({ 
  title, 
  views, 
  uploadDate, 
  tags,
  language,
  difficulty
}) => {
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
  
  // Format the upload date
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="mt-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h1>
      
      <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div className="mr-4">{formatViews(views)}</div>
        <div className="mr-4">Uploaded: {formatDate(uploadDate)}</div>
        
        <div className="flex items-center mr-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span>{language}</span>
        </div>
        
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>{difficulty}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Link 
            key={index}
            href={`/topic/${tag.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoInformation;
