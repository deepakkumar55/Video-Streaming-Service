import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedTopic {
  slug: string;
  name: string;
  icon: string;
  coursesCount: number;
}

interface TopicRelatedProps {
  topics: RelatedTopic[];
}

const TopicRelated: React.FC<TopicRelatedProps> = ({ topics }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4">Related Topics</h3>
      
      <div className="space-y-4">
        {topics.map(topic => (
          <Link 
            key={topic.slug} 
            href={`/topic/${topic.slug}`}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
              <Image
                src={topic.icon}
                alt={topic.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {topic.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {topic.coursesCount} courses
              </p>
            </div>
            
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicRelated;
