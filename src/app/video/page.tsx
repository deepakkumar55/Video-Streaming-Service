"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoFilters from '@/components/video/VideoFilters';
import VideoCard from '@/components/video/VideoCard';

// Mock data for popular categories
const categories = [
  { id: 'all', name: 'All Videos' },
  { id: 'react', name: 'React' },
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'uiux', name: 'UI/UX' },
  { id: 'webdev', name: 'Web Development' },
  { id: 'dsa', name: 'Data Structures' },
  { id: 'machinelearning', name: 'Machine Learning' },
  { id: 'devops', name: 'DevOps' },
  { id: 'mobile', name: 'Mobile Dev' }
];

// Mock video data
const videos = Array(20).fill(0).map((_, i) => {
  const videoCategories = ['react', 'python', 'java', 'uiux', 'webdev', 'dsa', 'machinelearning', 'devops', 'mobile'];
  const category = videoCategories[i % videoCategories.length];
  
  return {
    id: `video-${i+1}`,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Tutorial ${i+1}: ${['Beginner Guide', 'Advanced Concepts', 'Tips & Tricks', 'Deep Dive', 'Quick Start'][i % 5]}`,
    thumbnail: `/images/thumbnails/${category}-${(i % 3) + 1}.jpg`,
    views: Math.floor(Math.random() * 900000) + 100000,
    uploadedAt: `${Math.floor(Math.random() * 11) + 1} ${['days', 'weeks', 'months'][Math.floor(Math.random() * 3)]} ago`,
    duration: `${Math.floor(Math.random() * 20) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    instructor: {
      id: `inst-${(i % 5) + 1}`,
      name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar"][i % 5],
      avatar: `/images/creators/avatar-${(i % 5) + 1}.jpg`,
      verified: i % 3 === 0
    },
    category: category
  };
});

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [sortBy, setSortBy] = useState('newest');
  
  // Function to filter videos by category
  const filterByCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(video => video.category === categoryId));
    }
  };
  
  // Function to sort videos
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sorted = [...filteredVideos];
    
    if (value === 'newest') {
      // For mock data, we'll just maintain current order
    } else if (value === 'popular') {
      sorted.sort((a, b) => b.views - a.views);
    } else if (value === 'oldest') {
      // For mock data, reverse the current order
      sorted.reverse();
    }
    
    setFilteredVideos(sorted);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn with Our Video Library</h1>
            <p className="text-lg text-indigo-100 mb-8">
              Explore thousands of high-quality educational videos on programming, web development, 
              data science, and more
            </p>
            
            <div className="relative mx-auto max-w-2xl">
              <input 
                type="text" 
                placeholder="Search for videos..." 
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8">
        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="overflow-x-auto scrollbar-hide pb-2 mb-4 md:mb-0 flex-grow max-w-full">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => filterByCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-shrink-0 flex items-center">
            <label htmlFor="sort" className="text-sm text-gray-600 dark:text-gray-400 mr-2">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="text-sm border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        
        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-indigo-600 text-white">1</button>
            <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">2</button>
            <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">3</button>
            <span className="text-gray-500 dark:text-gray-400">...</span>
            <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">10</button>
            <button className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
