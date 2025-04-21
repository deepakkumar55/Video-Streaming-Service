"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for course categories
const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'web-dev', name: 'Web Development' },
  { id: 'programming', name: 'Programming' },
  { id: 'mobile', name: 'Mobile Dev' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'devops', name: 'DevOps' },
  { id: 'design', name: 'UI/UX Design' },
  { id: 'cloud', name: 'Cloud Computing' },
  { id: 'database', name: 'Databases' },
  { id: 'security', name: 'Cybersecurity' }
];

// Mock data for course levels
const levels = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' }
];

// Mock courses data
const generateMockCourses = () => {
  const courseNames = [
    'Complete Web Development Bootcamp 2023',
    'React - The Complete Guide',
    'Python for Data Science and Machine Learning',
    'JavaScript Mastery: Zero to Hero',
    'iOS App Development with Swift',
    'Flutter & Dart - The Complete Guide',
    'Java Programming Masterclass',
    'Full Stack MERN Development',
    'AWS Certified Solutions Architect',
    'Docker and Kubernetes: The Complete Guide',
    'UI/UX Design: From Wireframe to Prototype',
    'Data Structures & Algorithms in Java',
    'MongoDB - The Complete Developer Guide',
    'Node.js - The Complete Guide',
    'Angular - The Complete Guide',
    'Vue.js - The Complete Guide',
    'Professional Game Development with Unity',
    'Blockchain Development & Ethereum',
    'Artificial Intelligence with Python',
    'TypeScript Advanced Concepts'
  ];
  
  const courseCategories = [
    'web-dev', 'programming', 'mobile', 'data-science', 
    'devops', 'design', 'cloud', 'database', 'security'
  ];
  
  const instructors = [
    { name: 'Rahul Sharma', avatar: '/images/creators/avatar-1.jpg', verified: true },
    { name: 'Priya Patel', avatar: '/images/creators/avatar-2.jpg', verified: true },
    { name: 'Vikram Thapar', avatar: '/images/creators/avatar-3.jpg', verified: false },
    { name: 'Anjali Gupta', avatar: '/images/creators/avatar-4.jpg', verified: true },
    { name: 'Rajesh Kumar', avatar: '/images/creators/avatar-5.jpg', verified: false }
  ];
  
  const courseLevels = ['beginner', 'intermediate', 'advanced', 'all'];
  
  return Array(20).fill(0).map((_, i) => {
    const category = courseCategories[i % courseCategories.length];
    return {
      id: `course-${i+1}`,
      title: courseNames[i % courseNames.length],
      thumbnail: `/images/thumbnails/${category}-${(i % 3) + 1}.jpg`,
      category: category,
      level: courseLevels[i % courseLevels.length],
      rating: (4 + (i % 10) / 10).toFixed(1),
      reviewsCount: 500 + Math.floor(Math.random() * 3000),
      studentsCount: 5000 + Math.floor(Math.random() * 95000),
      price: 499 + (i % 5) * 100,
      originalPrice: 1999 + (i % 5) * 500,
      discountPercentage: Math.floor(Math.random() * 20) + 70,
      instructor: instructors[i % instructors.length],
      duration: `${(Math.floor(Math.random() * 30) + 10)} hours`,
      chaptersCount: Math.floor(Math.random() * 20) + 5,
      isBestseller: i % 5 === 0,
      isNew: i % 7 === 0
    };
  });
};

const courses = generateMockCourses();

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  // Function to filter courses
  const filterCourses = (category, level) => {
    let result = [...courses];
    
    if (category !== 'all') {
      result = result.filter(course => course.category === category);
    }
    
    if (level !== 'all') {
      result = result.filter(course => course.level === level || course.level === 'all');
    }
    
    // Sort the filtered courses
    if (sortBy === 'popular') {
      result.sort((a, b) => b.studentsCount - a.studentsCount);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortBy === 'newest') {
      // For mock data, just use the reversed order as a proxy for "newest"
      result.reverse();
    } else if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredCourses(result);
  };
  
  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    filterCourses(categoryId, activeLevel);
  };
  
  // Handle level change
  const handleLevelChange = (levelId) => {
    setActiveLevel(levelId);
    filterCourses(activeCategory, levelId);
  };
  
  // Handle sort change - fix 'let' to 'const' for sorted variable
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    const sorted = [...filteredCourses];
    
    if (value === 'popular') {
      sorted.sort((a, b) => b.studentsCount - a.studentsCount);
    } else if (value === 'rating') {
      sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (value === 'newest') {
      // For mock data, just use the reversed order as a proxy for "newest"
      sorted.reverse();
    } else if (value === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    }
    
    setFilteredCourses(sorted);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Accelerate Your Career With Our Courses</h1>
            <p className="text-lg text-purple-100 mb-8">
              Learn from industry experts and master in-demand skills with our comprehensive 
              course library designed for Indian tech professionals
            </p>
            
            <div className="relative mx-auto max-w-2xl">
              <input 
                type="text" 
                placeholder="Search for courses, topics, or skills..." 
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
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
        {/* Category and level filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Explore Our Courses</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
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
          
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <label htmlFor="level-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Level</label>
              <div className="flex flex-wrap gap-2">
                {levels.map(level => (
                  <button
                    key={level.id}
                    onClick={() => handleLevelChange(level.id)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap ${
                      activeLevel === level.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sort by</label>
              <select
                id="sort"
                value={sortBy}
                onChange={handleSortChange}
                className="py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold">{filteredCourses.length}</span> courses
          </p>
        </div>
        
        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <Link 
              key={course.id}
              href={`/course/${course.id}`}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              {/* Course thumbnail */}
              <div className="relative">
                <div className="aspect-video relative">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Overlay badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {course.isBestseller && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                      BESTSELLER
                    </span>
                  )}
                  {course.isNew && (
                    <span className="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                </div>
              </div>
              
              {/* Course details */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {course.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span className="capitalize">{course.category.replace('-', ' ')}</span>
                  <span className="mx-2">•</span>
                  <span className="capitalize">{course.level}</span>
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-amber-500 font-bold mr-1">{course.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(parseFloat(course.rating)) ? 'text-amber-500' : 'text-gray-300 dark:text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                    ({course.reviewsCount.toLocaleString()})
                  </span>
                </div>
                
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {course.studentsCount.toLocaleString()} students • {course.duration} • {course.chaptersCount} chapters
                </div>
                
                <div className="flex items-center mt-auto">
                  <div className="flex items-center mr-auto">
                    <div className="w-6 h-6 rounded-full overflow-hidden mr-1.5">
                      <Image
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300 truncate max-w-[120px]">
                      {course.instructor.name}
                    </span>
                    {course.instructor.verified && (
                      <svg className="w-3 h-3 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-white">₹{course.price}</div>
                    <div className="flex items-center text-xs">
                      <span className="line-through text-gray-500 dark:text-gray-400">₹{course.originalPrice}</span>
                      <span className="ml-1 text-green-600 dark:text-green-400">{course.discountPercentage}% off</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
            <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">8</button>
            <button className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
