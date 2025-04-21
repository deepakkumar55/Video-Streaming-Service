import React from 'react';

interface CertificationOverviewProps {
  description: string;
  skills: string[];
  benefits: string[];
}

const CertificationOverview: React.FC<CertificationOverviewProps> = ({
  description,
  skills,
  benefits
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">About This Certification</h2>
        <div className="prose prose-indigo dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Skills Validated</h3>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Benefits of Certification</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
        <div className="flex">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Why Get Certified?</h3>
            <p className="text-indigo-700 dark:text-indigo-300">
              Certification validates your expertise to employers and clients, setting you apart from the competition. 
              Research shows that certified professionals earn 15-20% higher salaries and are more likely to be 
              considered for promotions and advanced roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationOverview;
