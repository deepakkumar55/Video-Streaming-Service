import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  reviewsCount: number;
  instructor: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  price: number;
  originalPrice: number;
  isBestseller?: boolean;
  level: string;
}

interface PathCoursesProps {
  courses: Course[];
}

const PathCourses: React.FC<PathCoursesProps> = ({ courses }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recommended Courses</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.slice(0, 4).map((course) => (
          <Link 
            key={course.id}
            href={`/course/${course.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
              />
              {course.isBestseller && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                  BESTSELLER
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                {course.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {course.level} • By {course.instructor.name}
              </p>
              
              <div className="flex items-center mt-2">
                <span className="font-bold text-gray-900 dark:text-white mr-1">{course.rating.toFixed(1)}</span>
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  ({course.reviewsCount.toLocaleString()})
                </span>
              </div>
              
              <div className="flex items-center mt-2">
                <span className="text-lg font-bold text-gray-900 dark:text-white">₹{course.price}</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">₹{course.originalPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {courses.length > 4 && (
        <div className="mt-6 text-center">
          <Link 
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors"
          >
            View all recommended courses
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PathCourses;
