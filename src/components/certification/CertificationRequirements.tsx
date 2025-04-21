import React from 'react';

interface ExamTopic {
  title: string;
  percentage: number;
  subtopics: string[];
}

interface CertificationRequirementsProps {
  prerequisites: string[];
  examTopics: ExamTopic[];
}

const CertificationRequirements: React.FC<CertificationRequirementsProps> = ({
  prerequisites,
  examTopics
}) => {
  // Calculate total percentage for validation
  const totalPercentage = examTopics.reduce((sum, topic) => sum + topic.percentage, 0);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Certification Requirements</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Before registering for this certification, ensure you meet the following prerequisites
          and understand the exam topics that will be covered.
        </p>
      </div>
      
      {/* Prerequisites */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
        <ul className="space-y-3">
          {prerequisites.map((prerequisite, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{prerequisite}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Exam Topics */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Exam Topics</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The certification exam covers the following topics. The percentage indicates the weight of each topic in the exam.
        </p>
        
        <div className="space-y-6">
          {examTopics.map((topic, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Topic header with percentage */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {topic.title}
                </h4>
                <span className="text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 py-1 px-2 rounded">
                  {topic.percentage}% of Exam
                </span>
              </div>
              
              {/* Subtopics */}
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {topic.subtopics.map((subtopic, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{subtopic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Percentage validation message */}
        {totalPercentage !== 100 && (
          <div className="mt-4 text-sm text-amber-600 dark:text-amber-400">
            Note: The exam topics add up to {totalPercentage}% of the total exam content.
          </div>
        )}
      </div>
      
      {/* Recommended preparation */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
        <div className="flex">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Recommended Preparation</h3>
            <p className="text-indigo-700 dark:text-indigo-300">
              We recommend at least 40-60 hours of preparation for this certification exam. Complete our official preparation course,
              practice with hands-on exercises, and review all exam topics thoroughly before attempting the exam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationRequirements;
