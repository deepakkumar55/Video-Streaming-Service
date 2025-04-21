"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  preview: boolean;
}

interface Section {
  title: string;
  lessons: Lesson[];
}

interface CourseCurriculumProps {
  curriculum: Section[];
  courseId: string;
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ curriculum, courseId }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    curriculum.length > 0 ? [curriculum[0].title] : []
  );
  
  // Calculate total curriculum stats
  const totalLessons = curriculum.reduce((sum, section) => sum + section.lessons.length, 0);
  const totalDuration = curriculum.reduce((sum, section) => {
    return sum + section.lessons.reduce((sectionSum, lesson) => {
      const [mins, secs] = lesson.duration.split(':').map(Number);
      return sectionSum + mins + secs / 60;
    }, 0);
  }, 0);
  
  // Toggle section expansion
  const toggleSection = (title: string) => {
    setExpandedSections((prev) => 
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Course content</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {totalLessons} lessons • {Math.round(totalDuration)} min total length
        </div>
      </div>
      
      <div className="space-y-4">
        {curriculum.map((section, sectionIndex) => (
          <div 
            key={sectionIndex}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            {/* Section header */}
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
              onClick={() => toggleSection(section.title)}
            >
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {section.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {section.lessons.length} lessons • 
                  {Math.round(section.lessons.reduce((sum, lesson) => {
                    const [mins, secs] = lesson.duration.split(':').map(Number);
                    return sum + mins + secs / 60;
                  }, 0))} min
                </p>
              </div>
              <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg className={`w-5 h-5 transition-transform duration-200 ${expandedSections.includes(section.title) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Section lessons */}
            <AnimatePresence>
              {expandedSections.includes(section.title) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {lesson.preview ? (
                              <Link 
                                href={`/video/${courseId}-${lesson.id}`}
                                className="text-indigo-600 dark:text-indigo-400 mr-3"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                              </Link>
                            ) : (
                              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                            <span className={`${lesson.preview ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                              {lesson.title}
                              {lesson.preview && (
                                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs rounded-md">
                                  Preview
                                </span>
                              )}
                            </span>
                          </div>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {lesson.duration}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;
