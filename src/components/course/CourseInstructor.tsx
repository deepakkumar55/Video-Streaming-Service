import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InstructorProps {
  instructor: {
    id: string;
    name: string;
    avatar: string;
    title?: string;
    bio: string;
    rating?: number;
    coursesCount?: number;
    studentsCount?: number;
    reviewsCount?: number;
  };
  detailed?: boolean;
}

const CourseInstructor: React.FC<InstructorProps> = ({ instructor, detailed = false }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <Image
              src={instructor.avatar}
              alt={instructor.name}
              width={detailed ? 96 : 64}
              height={detailed ? 96 : 64}
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {instructor.name}
            </h3>
            {instructor.title && (
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {instructor.title}
              </span>
            )}
          </div>
          
          {detailed && instructor.rating && (
            <div className="flex flex-wrap gap-6 mb-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 dark:text-gray-400">Instructor Rating</span>
                <div className="flex items-center">
                  <span className="font-bold mr-1">{instructor.rating.toFixed(1)}</span>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 dark:text-gray-400">Reviews</span>
                <span className="font-bold">{instructor.reviewsCount?.toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 dark:text-gray-400">Students</span>
                <span className="font-bold">{instructor.studentsCount?.toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 dark:text-gray-400">Courses</span>
                <span className="font-bold">{instructor.coursesCount}</span>
              </div>
            </div>
          )}
          
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-4">
            {detailed ? instructor.bio : instructor.bio.split('\n')[0]}
          </p>
          
          {!detailed && (
            <Link
              href={`/instructor/${instructor.id}`}
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              View profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
