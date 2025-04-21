import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LiveInstructorBioProps {
  instructor: {
    id: string;
    name: string;
    avatar: string;
    title: string;
    company: string;
    bio: string;
    social: {
      twitter: string;
      linkedin: string;
      github: string;
    };
    verified: boolean;
  };
}

const LiveInstructorBio: React.FC<LiveInstructorBioProps> = ({ instructor }) => {
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4">Meet Your Instructor</h3>
      
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
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {instructor.name}
              </span>
              
              {instructor.verified && (
                <svg className="w-5 h-5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {instructor.title} at {instructor.company}
            </div>
          </div>
        </div>
        
        <div className="flex mt-4 sm:mt-0 sm:ml-auto space-x-3">
          <a 
            href={instructor.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a 
            href={instructor.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a 
            href={instructor.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{instructor.bio}</p>
      </div>
      
      <div className="mt-4">
        <Link 
          href={`/creator/${instructor.id}`}
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
        >
          View instructor profile →
        </Link>
      </div>
    </div>
  );
};

export default LiveInstructorBio;
