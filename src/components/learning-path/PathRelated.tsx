import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedPath {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

interface PathRelatedProps {
  paths: RelatedPath[];
}

const PathRelated: React.FC<PathRelatedProps> = ({ paths }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4">Related Career Paths</h3>
      
      <div className="space-y-4">
        {paths.map((path) => (
          <Link 
            key={path.slug}
            href={`/learning-path/${path.slug}`}
            className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors group"
          >
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path.color} p-2 flex items-center justify-center mr-4 flex-shrink-0`}>
                <Image
                  src={path.icon}
                  alt={path.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {path.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {path.description}
                </p>
              </div>
              
              <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PathRelated;
