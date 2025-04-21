import React from 'react';
import Image from 'next/image';

interface CertificationHeaderProps {
  name: string;
  description: string;
  banner: string;
  icon: string;
  color: string;
  difficulty: string;
  duration: string;
  cost: string;
  validityPeriod: string;
}

const CertificationHeader: React.FC<CertificationHeaderProps> = ({
  name,
  description,
  banner,
  icon,
  color,
  difficulty,
  duration,
  cost,
  validityPeriod
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Banner background */}
      <div className="h-64 md:h-80 relative">
        <Image
          src={banner}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-80`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Certification icon */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-white dark:bg-gray-800 shadow-lg p-4 flex items-center justify-center">
              <Image
                src={icon}
                alt={`${name} icon`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {name}
              </h1>
              
              <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                {description}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-white">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{difficulty}</span>
                  </div>
                  <span className="text-xs text-gray-300 mt-1">Difficulty</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{duration}</span>
                  </div>
                  <span className="text-xs text-gray-300 mt-1">Exam Duration</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{cost}</span>
                  </div>
                  <span className="text-xs text-gray-300 mt-1">Exam Cost</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationHeader;
