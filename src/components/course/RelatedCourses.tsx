import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedCoursesProps {
  currentCourseId: string;
  category: string;
}

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ currentCourseId, category }) => {
  // Generate mock related courses
  const courses = Array.from({ length: 3 }, (_, i) => {
    const id = `${category}-${i + 1}`;
    // Skip the current course
    if (id === currentCourseId) {
      return {
        id: `${category}-${i + 10}`,
        title: `Complete ${category.toUpperCase()} ${i + 10} Masterclass`,
        instructor: ["Rahul Sharma", "Priya Patel", "Vikram Thapar"][i % 3],
        price: 499 + (i * 100),
        rating: 4.5 + (i * 0.1),
        thumbnail: `/images/thumbnails/${category}-${i + 1}.jpg`,
        level: ["Beginner", "Intermediate", "All Levels"][i % 3],
      };
    }
    
    return {
      id,
      title: `Complete ${category.toUpperCase()} ${i + 1} Masterclass`,
      instructor: ["Rahul Sharma", "Priya Patel", "Vikram Thapar"][i % 3],
      price: 499 + (i * 100),
      rating: 4.5 + (i * 0.1),
      thumbnail: `/images/thumbnails/${category}-${i + 1}.jpg`,
      level: ["Beginner", "Intermediate", "All Levels"][i % 3],
    };
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-medium">Students also bought</h3>
      </div>
      
      <div className="p-4">
        <div className="space-y-4">
          {courses.map(course => (
            <Link
              key={course.id}
              href={`/course/${course.id}`}
              className="block p-2 -mx-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750"
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 relative w-20 h-20 rounded-md overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                    {course.title}
                  </h4>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {course.instructor}
                  </p>
                  
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium text-gray-900 dark:text-white mr-1">
                      {course.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs font-medium text-gray-900 dark:text-white mt-1">
                    ₹{course.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/category/${category}`}
            className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Show more courses on {category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;
