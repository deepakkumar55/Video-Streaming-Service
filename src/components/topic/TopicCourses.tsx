import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  instructor: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  price: number;
  originalPrice: number;
  isBestseller?: boolean;
  isNew?: boolean;
  level: string;
}

interface TopicCoursesProps {
  courses: Course[];
  topicName: string;
}

const TopicCourses: React.FC<TopicCoursesProps> = ({ courses, topicName }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">{topicName} Courses</h2>
      
      <div className="space-y-6">
        {courses.map(course => (
          <div 
            key={course.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <Link href={`/course/${course.id}`} className="flex flex-col md:flex-row">
              {/* Course thumbnail */}
              <div className="relative md:w-64 aspect-video md:aspect-auto overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                
                {/* Bestseller or New badge */}
                {course.isBestseller && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </div>
                )}
                
                {course.isNew && !course.isBestseller && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
              </div>
              
              {/* Course details */}
              <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">
                  {course.title}
                </h3>
                
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {course.level}
                  </span>
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={24}
                      height={24}
                      className="rounded-full mr-1"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {course.instructor.name}
                    </span>
                    {course.instructor.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center mb-2">
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
                  <span className="text-xs text-gray-600 dark:text-gray-400">({course.reviewsCount.toLocaleString()})</span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {course.studentsCount.toLocaleString()} students
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white mr-2">₹{course.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">₹{course.originalPrice}</span>
                  </div>
                  
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full text-sm font-medium">
                    View Course
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicCourses;
