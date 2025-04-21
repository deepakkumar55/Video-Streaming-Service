import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  coursesCount: number;
  studentsCount: number;
  rating: number;
}

interface TopicInstructorsProps {
  instructors: Instructor[];
  topicName: string;
}

const TopicInstructors: React.FC<TopicInstructorsProps> = ({ instructors, topicName }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Top {topicName} Instructors</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors.map(instructor => (
          <Link 
            key={instructor.id} 
            href={`/instructor/${instructor.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3">
              <Image
                src={instructor.avatar}
                alt={instructor.name}
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="font-medium text-gray-900 dark:text-white">
              {instructor.name}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {instructor.title}
            </p>
            
            <div className="flex items-center justify-center mb-2">
              <span className="font-medium text-gray-900 dark:text-white mr-1">
                {instructor.rating.toFixed(1)}
              </span>
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <div className="text-xs text-gray-600 dark:text-gray-400">
              <span>{instructor.coursesCount} courses</span>
              <span className="mx-1">•</span>
              <span>{instructor.studentsCount.toLocaleString()} students</span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href={`/search?topic=${topicName.toLowerCase()}&filter=instructors`}
          className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors"
        >
          View all {topicName} instructors
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TopicInstructors;
