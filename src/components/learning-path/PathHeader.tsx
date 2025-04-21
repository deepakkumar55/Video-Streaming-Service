import React from 'react';
import Image from 'next/image';

interface PathHeaderProps {
  name: string;
  description: string;
  banner: string;
  icon: string;
  color: string;
  estimatedTime: string;
  level: string;
  jobProspects: string[];
}

const PathHeader: React.FC<PathHeaderProps> = ({
  name,
  description,
  banner,
  icon,
  color,
  estimatedTime,
  level,
  jobProspects
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
            {/* Path icon */}
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
                {name} Career Path
              </h1>
              
              <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                {description}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-white">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{estimatedTime}</span>
                  </div>
                  <span className="text-xs text-gray-300 mt-1">Completion Time</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{level}</span>
                  </div>
                  <span className="text-xs text-gray-300 mt-1">Difficulty Level</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{jobProspects.length} Career Options</span>
                  </div>
                  <span className="text-xs text-gray-300 mt-1">Job Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathHeader;
