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
  isOfficial?: boolean;
}

interface CertificationCoursesProps {
  courses: Course[];
}

const CertificationCourses: React.FC<CertificationCoursesProps> = ({ courses }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Preparation Courses</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Prepare effectively for your certification exam with our recommended courses. 
        Official preparation courses are specifically designed to cover all exam topics.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Link 
            key={course.id}
            href={`/course/${course.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
          >
            {/* Course thumbnail with badges */}
            <div className="relative aspect-video">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-2">
                {course.isBestseller && (
                  <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </div>
                )}
                
                {course.isOfficial && (
                  <div className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OFFICIAL PREP
                  </div>
                )}
              </div>
            </div>
            
            {/* Course details */}
            <div className="p-4">
              <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 mb-2">
                {course.title}
              </h3>
              
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {course.level}
                </span>
              </div>
              
              {/* Instructor */}
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {course.instructor.name}
                </span>
                {course.instructor.verified && (
                  <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
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
              
              {/* Price */}
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
        ))}
      </div>
      
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 mt-8">
        <div className="flex">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Pass Guarantee</h3>
            <p className="text-indigo-700 dark:text-indigo-300">
              Our official preparation courses come with a pass guarantee. If you complete the course and still don't pass your certification exam, 
              we'll give you free access to the course for an additional 3 months to help you prepare for your next attempt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCourses;
