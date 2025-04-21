import React from 'react';
import Image from 'next/image';

interface TopicHeaderProps {
  name: string;
  description: string;
  banner: string;
  icon: string;
  color: string;
  studentsCount: number;
  coursesCount: number;
  videosCount: number;
  averageRating: number;
}

const TopicHeader: React.FC<TopicHeaderProps> = ({
  name,
  description,
  banner,
  icon,
  color,
  studentsCount,
  coursesCount,
  videosCount,
  averageRating
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Banner background */}
      <div className="h-64 md:h-80 relative">
        <Image
          src={banner}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-80`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Topic icon */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-white dark:bg-gray-800 shadow-lg p-4 flex items-center justify-center">
              <Image
                src={icon}
                alt={`${name} icon`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {name}
              </h1>
              
              <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                {description}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-white">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold">{studentsCount.toLocaleString()}</span>
                  <span className="text-sm text-gray-300">Students</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold">{coursesCount}</span>
                  <span className="text-sm text-gray-300">Courses</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl font-bold">{videosCount.toLocaleString()}</span>
                  <span className="text-sm text-gray-300">Videos</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold mr-2">{averageRating.toFixed(1)}</span>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicHeader;
