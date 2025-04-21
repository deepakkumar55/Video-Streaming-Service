"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
    jobTitle: string;
    company: string;
  };
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  helpfulCount: number;
}

interface CertificationReviewsProps {
  reviews: Review[];
}

const CertificationReviews: React.FC<CertificationReviewsProps> = ({ reviews }) => {
  const [markedHelpful, setMarkedHelpful] = useState<string[]>([]);
  
  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  // Toggle helpful status
  const toggleHelpful = (reviewId: string) => {
    setMarkedHelpful(prev => 
      prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };
  
  // Render star rating
  const renderStars = (rating: number) => (
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
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">What Certified Professionals Say</h2>
      
      {/* Rating overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating))}
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Based on {reviews.length} reviews
            </p>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our certification programs are highly rated by professionals who have successfully completed them. 
              Read their experiences to learn how this certification has impacted their careers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                <div className="font-medium text-gray-900 dark:text-white mb-1">Improved Skills</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  95% report significant skill improvement
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                <div className="font-medium text-gray-900 dark:text-white mb-1">Career Growth</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  78% received a promotion or new job offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews list */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
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
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {review.user.name}
                    </h4>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {review.user.jobTitle} at {review.user.company}
                    </p>
                    
                    <div className="flex items-center mt-1 mb-2">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  
                  {review.verified && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium rounded-full">
                      Verified Graduate
                    </span>
                  )}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationReviews;
