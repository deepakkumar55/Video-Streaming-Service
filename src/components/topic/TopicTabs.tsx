"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TopicTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TopicTabs: React.FC<TopicTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'courses', label: 'Courses' },
    { id: 'videos', label: 'Videos' },
    { id: 'instructors', label: 'Instructors' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-4 px-6 font-medium text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            } transition-colors`}
          >
            {tab.label}
            
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                layoutId="activeTopicTab"
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TopicTabs;
