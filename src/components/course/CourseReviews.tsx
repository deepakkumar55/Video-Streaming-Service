"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  content: string;
  helpfulCount: number;
}

interface CourseReviewsProps {
  reviews: Review[];
  rating: number;
  reviewsCount: number;
}

const CourseReviews: React.FC<CourseReviewsProps> = ({ reviews, rating, reviewsCount }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [markedHelpful, setMarkedHelpful] = useState<string[]>([]);
  
  // Generate rating distribution
  const ratingDistribution = [
    { rating: 5, percentage: 78 },
    { rating: 4, percentage: 15 },
    { rating: 3, percentage: 5 },
    { rating: 2, percentage: 1 },
    { rating: 1, percentage: 1 },
  ];
  
  // Filter reviews by rating
  const filteredReviews = selectedRating 
    ? reviews.filter(review => review.rating === selectedRating)
    : reviews;
  
  // Toggle helpful status
  const toggleHelpful = (reviewId: string) => {
    setMarkedHelpful(prev => 
      prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };
  
  // Generate star rating display
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Student reviews & feedback</h3>
      
      {/* Rating overview */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex items-center justify-center flex-col text-center md:w-72">
          <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
            {rating.toFixed(1)}
          </div>
          <div className="flex mb-2">
            {renderStars(rating)}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Course Rating • {reviewsCount.toLocaleString()} Reviews
          </p>
        </div>
        
        <div className="flex-1">
          {ratingDistribution.map((item) => (
            <button
              key={item.rating}
              className={`block w-full text-left mb-3 focus:outline-none group ${
                selectedRating === item.rating ? 'opacity-100' : 'opacity-80 hover:opacity-100'
              }`}
              onClick={() => setSelectedRating(selectedRating === item.rating ? null : item.rating)}
            >
              <div className="flex items-center">
                <span className="w-16 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.rating} stars
                </span>
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-2 overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 group-hover:bg-yellow-500 transition-all"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="w-10 text-sm text-right text-gray-600 dark:text-gray-400">
                  {item.percentage}%
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Reviews list */}
      <div className="space-y-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <motion.div 
              key={review.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.user.avatar}
                      alt={review.user.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {review.user.name}
                  </h4>
                  
                  <div className="flex items-center mt-1 mb-2">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {review.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {review.content}
                  </p>
                  
                  <div className="flex items-center">
                    <button 
                      className={`flex items-center text-sm ${
                        markedHelpful.includes(review.id)
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                      onClick={() => toggleHelpful(review.id)}
                    >
                      <svg className="w-4 h-4 mr-1" fill={markedHelpful.includes(review.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      Helpful ({markedHelpful.includes(review.id) ? review.helpfulCount + 1 : review.helpfulCount})
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-10">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              No reviews match your filter
            </h4>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Try selecting a different rating or clear your filter to see all reviews.
            </p>
            <button 
              className="mt-4 px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg"
              onClick={() => setSelectedRating(null)}
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseReviews;
