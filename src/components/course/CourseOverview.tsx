import React from 'react';
import Link from 'next/link';

interface CourseOverviewProps {
  description: string;
  highlights: string[];
  requirements: string[];
  whatYouWillLearn: string[];
  tags: string[];
}

const CourseOverview: React.FC<CourseOverviewProps> = ({
  description,
  highlights,
  requirements,
  whatYouWillLearn,
  tags
}) => {
  return (
    <div className="space-y-10">
      {/* What you'll learn */}
      <div>
        <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatYouWillLearn.map((item, index) => (
              <li key={index} className="flex">
                <div className="flex-shrink-0 mr-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Course description */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Course description</h3>
        <div className="prose prose-indigo dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{description}</p>
        </div>
      </div>
      
      {/* Course highlights */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Course highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Requirements */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Requirements</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
      
      {/* Tags */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link 
              key={index}
              href={`/search?tag=${tag}`}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
