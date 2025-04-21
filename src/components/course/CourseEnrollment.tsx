"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CourseEnrollmentProps {
  id: string;
  price: number;
  originalPrice: number;
  discount: number;
  promoVideo: string;
  duration: string;
  certificateIncluded: boolean;
  thumbnail: string;
}

const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({
  id,
  price,
  originalPrice,
  discount,
  promoVideo,
  duration,
  certificateIncluded,
  thumbnail
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('full');
  
  // Calculate discount end date (30 days from now)
  const discountEndDate = new Date();
  discountEndDate.setDate(discountEndDate.getDate() + 2); // 2 days from now
  
  const formattedEndDate = discountEndDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
      {/* Video thumbnail or promo video */}
      <div className="relative aspect-video cursor-pointer" onClick={() => setShowVideo(!showVideo)}>
        {!showVideo ? (
          <>
            <Image
              src={thumbnail}
              alt="Course thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 bg-indigo-600/90 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-shadow-md">
                Preview this course
              </div>
            </div>
          </>
        ) : (
          <div className="bg-black w-full h-full flex items-center justify-center text-white">
            <p>Video is playing...</p>
            {/* This would be replaced with an actual video player in a real app */}
          </div>
        )}
      </div>
      
      {/* Price and enrollment options */}
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</span>
            <span className="ml-2 text-lg text-gray-500 dark:text-gray-400 line-through">₹{originalPrice}</span>
            <span className="ml-2 text-red-600 dark:text-red-400 font-medium">{discount}% off</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span className="font-medium">Sale ends {formattedEndDate}</span> — 2 days left at this price!
          </p>
        </div>
        
        {/* Enroll button */}
        <motion.button
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Enroll now
        </motion.button>
        
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
          30-Day Money-Back Guarantee
        </p>
        
        {/* Course includes */}
        <div className="mt-6">
          <h4 className="font-medium mb-3">This course includes:</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {duration} of on-demand video
            </li>
            <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              20+ downloadable resources
            </li>
            <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              Full lifetime access
            </li>
            <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Self-paced learning
            </li>
            {certificateIncluded && (
              <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Certificate of completion
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollment;
