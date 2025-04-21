import React from 'react';
import Image from 'next/image';

interface InstructorHeaderProps {
  name: string;
  title: string;
  avatar: string;
  coverImage: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  coursesCount: number;
  location: string;
  specialization: string;
  lastActive: string;
}

const InstructorHeader: React.FC<InstructorHeaderProps> = ({
  name,
  title,
  avatar,
  coverImage,
  rating,
  reviewsCount,
  studentsCount,
  coursesCount,
  location,
  specialization,
  lastActive
}) => {
  return (
    <div>
      {/* Cover image */}
      <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={`${name}'s cover`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      {/* Instructor info */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 -mt-16 md:-mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 md:items-end">
          {/* Avatar */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-lg">
            <Image
              src={avatar}
              alt={name}
              width={144}
              height={144}
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {name}
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
              {title} • {specialization} Expert
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Last active {lastActive}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">Total Students</span>
                <span className="font-bold">{studentsCount.toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">Courses</span>
                <span className="font-bold">{coursesCount}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">Reviews</span>
                <span className="font-bold">{reviewsCount.toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">Rating</span>
                <div className="flex items-center">
                  <span className="font-bold mr-1">{rating.toFixed(1)}</span>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHeader;
