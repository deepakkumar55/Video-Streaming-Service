"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FeaturedCreator = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Featured Creator of the Month
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Discover React.js with Vikram Thapar
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Dive into React.js with India's top-rated instructor on EduStream. Vikram brings over 8 years of industry experience from Flipkart and Amazon to help you master frontend development.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              340+ Videos
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              4.9 ⭐ Rating
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              150K+ Students
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
              Hindi-English
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link href="/creator/vikram-thapar">
              <motion.button 
                className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white rounded-full font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </motion.button>
            </Link>
            
            <Link href="/courses/react-masterclass">
              <motion.button 
                className="px-5 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Latest Course
              </motion.button>
            </Link>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="w-full aspect-square relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <Image
              src="/creators/featured-creator.jpg"
              alt="Vikram Thapar"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Decorative elements with Indian-inspired design */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-full opacity-20"></div>
          
          {/* Verified badge */}
          <div className="absolute bottom-3 right-3 bg-blue-500 text-white p-1.5 rounded-full shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCreator;
