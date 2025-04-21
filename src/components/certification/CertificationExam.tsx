"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExamFormat {
  totalQuestions: number;
  passingScore: number;
  questionTypes: string[];
  duration: string;
  proctoring: string;
  attempts: string;
  languages: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface CertificationExamProps {
  examFormat: ExamFormat;
  passRate: string;
  faqs: FAQ[];
}

const CertificationExam: React.FC<CertificationExamProps> = ({
  examFormat,
  passRate,
  faqs
}) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Exam Information</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Exam Format & Structure</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Questions</div>
              <div className="font-medium text-gray-900 dark:text-white">{examFormat.totalQuestions} questions</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Passing Score</div>
              <div className="font-medium text-gray-900 dark:text-white">{examFormat.passingScore}% or higher</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
              <div className="font-medium text-gray-900 dark:text-white">{examFormat.duration}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Pass Rate</div>
              <div className="font-medium text-gray-900 dark:text-white">{passRate} of candidates pass</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Question Types</div>
              <ul className="mt-1 space-y-1">
                {examFormat.questionTypes.map((type, index) => (
                  <li key={index} className="font-medium text-gray-900 dark:text-white">
                    • {type}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Languages Available</div>
              <div className="font-medium text-gray-900 dark:text-white">{examFormat.languages.join(', ')}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Proctoring</div>
              <div className="font-medium text-gray-900 dark:text-white">{examFormat.proctoring}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Attempts</div>
              <div className="font-medium text-gray-900 dark:text-white">{examFormat.attempts}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Exam Day Requirements</h3>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              A reliable computer with webcam, microphone, and stable internet connection
            </span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              A quiet, private room where you won't be disturbed during the exam
            </span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Government-issued photo ID for identity verification
            </span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              No notes, books, or additional electronic devices
            </span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Permission to install our secure proctoring software
            </span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300">
                        {faq.answer}
                      </p>
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

export default CertificationExam;
