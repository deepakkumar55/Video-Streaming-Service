import React, { useState } from 'react';
import Image from 'next/image';

interface Attendee {
  id: string;
  name: string;
  avatar: string;
  role: string;
  joinedAt: string;
}

interface LiveAttendeesProps {
  attendees: Attendee[];
  totalCount: number;
}

const LiveAttendees: React.FC<LiveAttendeesProps> = ({ attendees, totalCount }) => {
  const [showAll, setShowAll] = useState(false);
  
  const formatTime = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };
  
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-lg flex items-center justify-between">
          <span>Attendees</span>
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm px-2 py-1 rounded-full">
            {totalCount.toLocaleString()} watching
          </span>
        </h3>
      </div>
      
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {attendees.slice(0, showAll ? attendees.length : 3).map((attendee) => (
          <div key={attendee.id} className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={attendee.avatar}
                  alt={attendee.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{attendee.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{attendee.role}</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Joined at {formatTime(attendee.joinedAt)}
            </div>
          </div>
        ))}
      </div>
      
      {attendees.length > 3 && (
        <div className="p-3 text-center border-t border-gray-100 dark:border-gray-700">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            {showAll ? 'Show less' : `Show ${attendees.length - 3} more attendees`}
          </button>
        </div>
      )}
      
      {totalCount > attendees.length && (
        <div className="p-3 text-center bg-gray-50 dark:bg-gray-750 text-sm text-gray-500 dark:text-gray-400">
          And {totalCount - attendees.length} more viewers
        </div>
      )}
    </div>
  );
};

export default LiveAttendees;
