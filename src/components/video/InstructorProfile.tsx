"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InstructorProps {
  instructor: {
    id: string;
    name: string;
    avatar: string;
    subscribers: string;
    verified: boolean;
    bio: string;
    courses: number;
  };
}

const InstructorProfile: React.FC<InstructorProps> = ({ instructor }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-start sm:items-center flex-col sm:flex-row">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
            <Image
              src={instructor.avatar}
              alt={instructor.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <div className="flex items-center">
              <Link 
                href={`/creator/${instructor.id}`}
                className="text-lg font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {instructor.name}
              </Link>
              
              {instructor.verified && (
                <svg className="w-5 h-5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {instructor.subscribers} subscribers • {instructor.courses} courses
            </div>
          </div>
        </div>
        
        <div className="flex-1 sm:text-right">
          <button 
            onClick={handleSubscribe}
            className={`px-4 py-2 rounded-lg font-medium ${
              isSubscribed 
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            } transition-colors`}
          >
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{instructor.bio}</p>
      </div>
      
      <div className="mt-4 flex space-x-3">
        <Link 
          href={`/creator/${instructor.id}/courses`}
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
        >
          View all courses
        </Link>
        <Link 
          href={`/creator/${instructor.id}/about`}
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
        >
          About instructor
        </Link>
      </div>
    </div>
  );
};

export default InstructorProfile;
