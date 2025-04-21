import React from 'react';

interface LiveInfoProps {
  title: string;
  description: string;
  topics: string[];
  startsAt: string;
  scheduledEndTime: string;
  registeredAttendees: number;
}

const LiveInfo: React.FC<LiveInfoProps> = ({ 
  title, 
  description, 
  topics, 
  startsAt, 
  scheduledEndTime, 
  registeredAttendees 
}) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };
  
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{formatDate(startsAt)}</span>
        </div>
        
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {new Date(scheduledEndTime).getHours() - new Date(startsAt).getHours()} hours
          </span>
        </div>
        
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>{registeredAttendees.toLocaleString()} registered</span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">About this webinar</h3>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-6">{description}</p>
      
      <h3 className="text-lg font-semibold mb-2">What you'll learn</h3>
      <ul className="space-y-2 mb-6">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
            <svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveInfo;
