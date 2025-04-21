"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Course {
  id: string;
  title: string;
  duration: string;
}

interface Milestone {
  title: string;
  description: string;
  courses: Course[];
  projects: string[];
  skills: string[];
}

interface PathMilestonesProps {
  milestones: Milestone[];
}

const PathMilestones: React.FC<PathMilestonesProps> = ({ milestones }) => {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(0);

  const toggleMilestone = (index: number) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Path Milestones</h2>
      
      <div className="relative">
        {/* Vertical line connecting milestones */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-indigo-200 dark:bg-indigo-900"></div>
        
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div 
                className={`flex items-start cursor-pointer ${
                  expandedMilestone === index 
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 rounded-t-xl' 
                    : 'bg-white dark:bg-gray-800 rounded-xl'
                } p-4 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow`}
                onClick={() => toggleMilestone(index)}
              >
                {/* Milestone number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-xl mr-4 z-10">
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {milestone.description}
                      </p>
                    </div>
                    
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedMilestone === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <AnimatePresence>
                {expandedMilestone === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-0 border border-gray-200 dark:border-gray-700 rounded-b-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm"
                  >
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                            Courses
                          </h4>
                          <ul className="space-y-3">
                            {milestone.courses.map((course, idx) => (
                              <li key={idx} className="bg-gray-50 dark:bg-gray-750 rounded-lg p-3">
                                <h5 className="font-medium text-gray-900 dark:text-white">
                                  {course.title}
                                </h5>
                                <div className="flex justify-between mt-1">
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Duration: {course.duration}
                                  </span>
                                  <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                                    View Course
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="mb-6">
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                              Projects
                            </h4>
                            <ul className="space-y-2">
                              {milestone.projects.map((project, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                  </svg>
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                              Skills Gained
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {milestone.skills.map((skill, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathMilestones;
