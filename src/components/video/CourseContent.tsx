"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface Chapter {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface CourseContentProps {
  chapters: Chapter[];
  title: string;
}

const CourseContent: React.FC<CourseContentProps> = ({ chapters, title }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const totalChapters = chapters.length;
  const completedChapters = chapters.filter(ch => ch.completed).length;
  const progressPercentage = Math.round((completedChapters / totalChapters) * 100);
  
  // Calculate total duration
  const calculateTotalDuration = () => {
    let totalMinutes = 0;
    
    chapters.forEach(chapter => {
      const [minutes, seconds] = chapter.duration.split(':').map(Number);
      totalMinutes += minutes + seconds / 60;
    });
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Course Content</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
        >
          {isExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      
      <div className="flex justify-between items-center mb-2 text-sm text-gray-600 dark:text-gray-400">
        <div>{totalChapters} chapters • {calculateTotalDuration()} total</div>
        <div>{progressPercentage}% complete</div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
        <div 
          className="h-full bg-indigo-600 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-2">
          {chapters.map((chapter, index) => (
            <div 
              key={chapter.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  chapter.completed 
                    ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }`}>
                  {chapter.completed ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium">{chapter.title}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{chapter.duration}</div>
                </div>
              </div>
              
              <Link 
                href={`#chapter-${chapter.id}`}
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
              >
                {chapter.completed ? 'Rewatch' : 'Watch'}
              </Link>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
          Enroll in Full Course
        </button>
        <div className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
          Get access to all {totalChapters} chapters and course materials
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
