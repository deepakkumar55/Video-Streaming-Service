"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import InstructorHeader from '@/components/instructor/InstructorHeader';
import InstructorTabs from '@/components/instructor/InstructorTabs';
import InstructorCourses from '@/components/instructor/InstructorCourses';
import InstructorReviews from '@/components/instructor/InstructorReviews';
import InstructorAbout from '@/components/instructor/InstructorAbout';

// Mock data fetch function
const getInstructorDetails = (id: string) => {
  // This would be an API call in a real app
  const instructorId = id.startsWith('inst-') ? parseInt(id.replace('inst-', '')) % 10 : parseInt(id) % 10;
  
  // Determine specialization based on ID
  const specializations = [
    'Web Development', 
    'Mobile Development', 
    'Data Science', 
    'Machine Learning',
    'UI/UX Design',
    'Java Programming',
    'Python Programming',
    'Blockchain Development',
    'DevOps',
    'Cloud Computing'
  ];
  
  const specialization = specializations[instructorId];
  
  // Generate social links
  const socialLinks = {
    website: instructorId % 2 === 0 ? `https://www.${id.toLowerCase()}.com` : null,
    linkedin: `https://www.linkedin.com/in/${id.toLowerCase()}`,
    twitter: `https://twitter.com/${id.toLowerCase()}`,
    github: instructorId % 3 === 0 ? `https://github.com/${id.toLowerCase()}` : null,
    youtube: instructorId % 4 === 0 ? `https://youtube.com/@${id.toLowerCase()}` : null,
  };
  
  return {
    id,
    name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar", 
           "Neha Singh", "Arnav Desai", "Kavita Reddy", "Sanjay Mehta", "Divya Malhotra"][instructorId],
    title: ["Senior Software Engineer", "Full Stack Developer", "Tech Lead", "UI/UX Specialist", 
            "Data Scientist", "Java Architect", "Python Expert", "Mobile Developer", 
            "DevOps Engineer", "Cloud Solutions Architect"][instructorId],
    avatar: `/images/creators/avatar-${(instructorId % 5) + 1}.jpg`,
    coverImage: `/images/covers/instructor-cover-${(instructorId % 3) + 1}.jpg`,
    rating: 4.7 + (Math.random() * 0.3),
    reviewsCount: 845 + Math.floor(Math.random() * 2000),
    studentsCount: 120000 + Math.floor(Math.random() * 880000),
    coursesCount: 6 + instructorId % 9,
    bio: `Experienced ${specialization} professional with over ${8 + instructorId % 7} years of industry experience at top tech companies including ${['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple'][instructorId % 5]} and ${['Flipkart', 'Infosys', 'TCS', 'Wipro', 'HCL'][instructorId % 5]}.

I'm passionate about simplifying complex concepts and teaching in a way that's easy to understand. I believe in practical, project-based learning that prepares you for real-world challenges.

My teaching approach combines theoretical foundations with hands-on implementation, ensuring you not only understand the 'how' but also the 'why' behind each concept.

I've helped over ${(instructorId + 10) * 10000} students worldwide advance their careers in ${specialization}.`,
    location: ["Bangalore, India", "Delhi, India", "Mumbai, India", "Hyderabad, India", 
               "Pune, India", "Chennai, India", "Kolkata, India", "Jaipur, India", 
               "Ahmedabad, India", "Chandigarh, India"][instructorId],
    languages: ["Hindi, English", "English, Hindi, Gujarati", "Hindi, English, Punjabi", 
                "English, Hindi, Telugu", "Hindi, English, Tamil"][instructorId % 5],
    lastActive: `${instructorId + 1} days ago`,
    joinedDate: `${2020 - (instructorId % 5)}`,
    socialLinks,
    specialization,
    
    // Generate courses
    courses: Array(6 + (instructorId % 5)).fill(0).map((_, i) => {
      const categories = ['java', 'web-dev', 'python', 'uiux', 'mern', 'ml', 'dsa', 'mobile'];
      const categoryIndex = (instructorId + i) % categories.length;
      const category = categories[categoryIndex];
      
      return {
        id: `${category}-${instructorId}-${i}`,
        title: `Complete ${category.toUpperCase()} ${i === 0 ? 'Masterclass' : `Course Part ${i}`} - ${i === 0 ? 'From Zero to Expert' : `Level ${i}`}`,
        category,
        thumbnail: `/images/thumbnails/${category}-${(i % 3) + 1}.jpg`,
        rating: 4.5 + ((instructorId + i) % 10) * 0.05,
        reviewsCount: 120 + Math.floor(Math.random() * 2000),
        studentsCount: 1500 + Math.floor(Math.random() * 50000),
        price: 499 + ((instructorId + i) % 5) * 100,
        isBestseller: i === 0 || i === 2,
        isNew: i === 1,
        level: ["Beginner", "Intermediate", "Advanced", "All Levels"][(instructorId + i) % 4],
      };
    }),
    
    // Generate reviews
    reviews: Array(5).fill(0).map((_, i) => ({
      id: `review-${id}-${i+1}`,
      courseId: `course-${instructorId}-${i}`,
      courseName: `${specialization} ${i === 0 ? 'Masterclass' : `Course ${i}`}`,
      user: {
        name: ["Arjun Singh", "Sneha Kapoor", "Rohan Mehta", "Neha Patel", "Amit Kumar"][i],
        avatar: `/images/avatars/student-${i+1}.jpg`,
      },
      rating: 4 + Math.floor(Math.random() * 2),
      date: `${Math.floor(Math.random() * 30) + 1} days ago`,
      content: [
        "Fantastic instructor! The way concepts are explained made it so easy to understand even complex topics. I've taken several courses on this subject, but this instructor stands out for clarity and depth.",
        "Very comprehensive teaching style with a perfect mix of theory and practical examples. The instructor is clearly passionate about the subject and it shows in the quality of content.",
        "The instructor has a great teaching approach and responds quickly to questions in the Q&A. I especially appreciated how real-world applications were demonstrated throughout.",
        "Clear explanations, well-structured content, and engaging delivery. The instructor's industry experience adds valuable insights that you won't find in textbooks.",
        "This instructor has a unique ability to break down complicated topics into easy-to-understand segments. Highly recommended for anyone interested in this field."
      ][i],
      helpfulCount: Math.floor(Math.random() * 120) + 5,
    })),
  };
};

interface InstructorData {
  id: string;
  name: string;
  // Add other properties
}

interface InstructorPageProps {
  params: {
    id: string;
  };
}

export default function InstructorPage({ params }: InstructorPageProps) {
  const { id } = params;
  const [instructor, setInstructor] = useState<InstructorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('courses');

  useEffect(() => {
    try {
      const instructorData = getInstructorDetails(id) as InstructorData;
      setInstructor(instructorData);
      setLoading(false);
    } catch (_) {
      setLoading(false);
      notFound();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!instructor) {
    return notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Instructor header with banner */}
      <InstructorHeader 
        name={instructor.name}
        title={instructor.title}
        avatar={instructor.avatar}
        coverImage={instructor.coverImage}
        rating={instructor.rating}
        reviewsCount={instructor.reviewsCount}
        studentsCount={instructor.studentsCount}
        coursesCount={instructor.coursesCount}
        location={instructor.location}
        specialization={instructor.specialization}
        lastActive={instructor.lastActive}
      />
      
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Instructor tabs for navigation */}
            <InstructorTabs 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              coursesCount={instructor.coursesCount}
              reviewsCount={instructor.reviewsCount} 
            />
            
            {/* Tab content */}
            <div className="mt-6">
              {activeTab === 'courses' && (
                <InstructorCourses 
                  courses={instructor.courses}
                  instructorName={instructor.name}
                />
              )}
              
              {activeTab === 'reviews' && (
                <InstructorReviews 
                  reviews={instructor.reviews}
                  rating={instructor.rating}
                  reviewsCount={instructor.reviewsCount}
                />
              )}
              
              {activeTab === 'about' && (
                <InstructorAbout 
                  bio={instructor.bio}
                  languages={instructor.languages}
                  joinedDate={instructor.joinedDate}
                  socialLinks={instructor.socialLinks}
                />
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Instructor stats and links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Instructor Statistics</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Students</span>
                  <span className="font-semibold">{instructor.studentsCount.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Reviews</span>
                  <span className="font-semibold">{instructor.reviewsCount.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Average Rating</span>
                  <div className="flex items-center">
                    <span className="font-semibold mr-1">{instructor.rating.toFixed(1)}</span>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Courses</span>
                  <span className="font-semibold">{instructor.coursesCount}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Languages</span>
                  <span className="font-semibold">{instructor.languages}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Joined</span>
                  <span className="font-semibold">{instructor.joinedDate}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Connect with {instructor.name.split(' ')[0]}</h4>
                <div className="flex space-x-3">
                  {instructor.socialLinks.linkedin && (
                    <a 
                      href={instructor.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  
                  {instructor.socialLinks.twitter && (
                    <a 
                      href={instructor.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  )}
                  
                  {instructor.socialLinks.github && (
                    <a 
                      href={instructor.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  
                  {instructor.socialLinks.youtube && (
                    <a 
                      href={instructor.socialLinks.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  )}
                  
                  {instructor.socialLinks.website && (
                    <a 
                      href={instructor.socialLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
