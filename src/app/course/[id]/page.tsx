"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import CourseHeader from '@/components/course/CourseHeader';
import CourseOverview from '@/components/course/CourseOverview';
import CourseCurriculum from '@/components/course/CourseCurriculum';
import CourseReviews from '@/components/course/CourseReviews';
import CourseInstructor from '@/components/course/CourseInstructor';
import CourseEnrollment from '@/components/course/CourseEnrollment';
import RelatedCourses from '@/components/course/RelatedCourses';
import CourseTabs from '@/components/course/CourseTabs';

// Mock data fetch function
const getCourseDetails = (id: string) => {
  // This would be an API call in a real app
  const categories = ['java', 'web-dev', 'python', 'uiux', 'mern', 'ml', 'dsa', 'mobile'];
  const catIndex = parseInt(id) % categories.length;
  const category = categories[catIndex];
  
  return {
    id,
    title: `Complete ${category.toUpperCase()} Masterclass 2023 - From Zero to Expert`,
    subtitle: `The most comprehensive ${category} course. Projects, challenges, theory, and real-world applications.`,
    rating: 4.7 + (Math.random() * 0.3),
    studentsCount: 12500 + Math.floor(Math.random() * 35000),
    reviewsCount: 845 + Math.floor(Math.random() * 2000),
    lastUpdated: '2023-12-10',
    language: ['Hindi', 'English', 'Hindi-English'][parseInt(id) % 3],
    price: 499 + (parseInt(id) % 4) * 100,
    originalPrice: 3499 + (parseInt(id) % 4) * 500,
    discount: 85,
    level: ['Beginner', 'Intermediate', 'All Levels', 'Advanced'][parseInt(id) % 4],
    duration: `${24 + Math.floor(Math.random() * 25)} hours`,
    certificateIncluded: true,
    
    description: `Master ${category} with our comprehensive course designed for all skill levels. Whether you're just starting out or looking to advance your skills, this course provides everything you need to become a confident ${category} professional.

This course takes you step-by-step through real-world projects while teaching you the fundamentals and advanced concepts. By the end, you'll have built multiple professional projects for your portfolio and gained the skills employers are looking for.`,
    
    highlights: [
      'Build 10+ real-world projects for your portfolio',
      'Understand core concepts and advanced techniques',
      'Learn industry best practices and coding standards',
      'Receive a certificate of completion',
      'Lifetime access to all course materials and updates',
      '24/7 support from instructors and community',
    ],
    
    requirements: [
      'No prior experience needed - we\'ll teach you everything from scratch',
      'Basic computer knowledge',
      'Dedication and willingness to practice',
    ],
    
    whatYouWillLearn: [
      `Complete ${category} fundamentals from beginner to advanced`,
      'Modern development tools and workflow',
      'Building responsive and interactive applications',
      'Performance optimization and debugging techniques',
      'Industry-standard coding patterns and practices',
      'Preparing for technical interviews',
    ],
    
    thumbnail: `/images/thumbnails/${category}-course.jpg`,
    promoVideo: `/api/videos/promo-${id}`,
    
    instructor: {
      id: "inst-" + (parseInt(id) % 10 + 1),
      name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta"][parseInt(id) % 4],
      avatar: `/images/creators/avatar-${(parseInt(id) % 5) + 1}.jpg`,
      title: ["Senior Software Engineer", "Web Development Instructor", "Tech Lead", "Full Stack Developer"][parseInt(id) % 4],
      rating: 4.8,
      coursesCount: 6 + parseInt(id) % 9,
      studentsCount: 85000 + Math.floor(Math.random() * 120000),
      reviewsCount: 12500 + Math.floor(Math.random() * 8000),
      bio: `Experienced ${category} developer and educator with over 8 years of industry experience at top tech companies like Microsoft, Google and Amazon. 
      
Passionate about teaching complex concepts in simple ways, I've helped over 100,000 students worldwide advance their careers in tech.`,
    },
    
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          { id: "l-1-1", title: "Introduction to the Course", duration: "05:22", preview: true },
          { id: "l-1-2", title: "Setting Up Your Development Environment", duration: "15:45", preview: true },
          { id: "l-1-3", title: "Overview of Core Concepts", duration: "12:30", preview: false },
        ]
      },
      {
        title: "Core Fundamentals",
        lessons: [
          { id: "l-2-1", title: "Basic Syntax and Structure", duration: "18:15", preview: false },
          { id: "l-2-2", title: "Working with Variables and Data Types", duration: "22:40", preview: false },
          { id: "l-2-3", title: "Control Flow and Logic", duration: "25:10", preview: false },
          { id: "l-2-4", title: "Functions and Methods", duration: "28:55", preview: false },
        ]
      },
      {
        title: "Advanced Concepts",
        lessons: [
          { id: "l-3-1", title: "Object-Oriented Programming", duration: "32:18", preview: false },
          { id: "l-3-2", title: "Advanced Data Structures", duration: "35:42", preview: false },
          { id: "l-3-3", title: "Error Handling and Debugging", duration: "20:35", preview: false },
        ]
      },
      {
        title: "Building Real-World Projects",
        lessons: [
          { id: "l-4-1", title: "Project 1: Setting Up", duration: "15:20", preview: false },
          { id: "l-4-2", title: "Project 1: Core Functionality", duration: "45:12", preview: false },
          { id: "l-4-3", title: "Project 1: Advanced Features", duration: "38:25", preview: false },
          { id: "l-4-4", title: "Project 1: Testing and Deployment", duration: "22:18", preview: false },
        ]
      },
      {
        title: "Career and Next Steps",
        lessons: [
          { id: "l-5-1", title: "Building Your Portfolio", duration: "18:45", preview: false },
          { id: "l-5-2", title: "Preparing for Interviews", duration: "32:10", preview: false },
          { id: "l-5-3", title: "Course Conclusion and Resources", duration: "10:15", preview: false },
        ]
      }
    ],
    
    reviews: Array(5).fill(0).map((_, i) => ({
      id: `review-${id}-${i+1}`,
      user: {
        name: ["Arjun Singh", "Sneha Kapoor", "Rohan Mehta", "Neha Patel", "Amit Kumar"][i],
        avatar: `/images/avatars/student-${i+1}.jpg`,
      },
      rating: 4 + Math.floor(Math.random() * 2),
      date: `${Math.floor(Math.random() * 30) + 1} days ago`,
      content: [
        "This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand. I've completed several courses on this topic, but this one is by far the best.",
        "Very comprehensive course that covers all the aspects of the subject. The projects are practical and helped me build a strong portfolio. Highly recommended for beginners!",
        "The instructor is knowledgeable and engaging. The content is well-structured and the pace is perfect. I especially appreciated the sections on advanced techniques.",
        "Great course! The hands-on projects really helped solidify my understanding. I went from knowing almost nothing to feeling confident in my skills. Thank you!",
        "This course has been instrumental in my career transition. The instructor is responsive to questions and the community is supportive. Worth every penny."
      ][i],
      helpfulCount: Math.floor(Math.random() * 120) + 5,
    })),
    
    tags: ["programming", category, "education", "coding", "development", `${category} course`, "online course"],
  };
};

// Define proper interface for course data
interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  rating: number;
  studentsCount: number;
  reviewsCount: number;
  lastUpdated: string;
  language: string;
  price: number;
  originalPrice: number;
  discount: number;
  level: string;
  duration: string;
  certificateIncluded: boolean;
  description: string;
  highlights: string[];
  requirements: string[];
  whatYouWillLearn: string[];
  thumbnail: string;
  promoVideo: string;
  instructor: {
    id: string;
    name: string;
    avatar: string;
    title: string;
    rating: number;
    coursesCount: number;
    studentsCount: number;
    reviewsCount: number;
    bio: string;
  };
  curriculum: {
    title: string;
    lessons: {
      id: string;
      title: string;
      duration: string;
      preview: boolean;
    }[];
  }[];
  reviews: {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    rating: number;
    date: string;
    content: string;
    helpfulCount: number;
  }[];
  tags: string[];
}

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const { id } = params;
  const [course, setCourse] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    try {
      const courseData = getCourseDetails(id) as CourseData;
      setCourse(courseData);
      setLoading(false);
    } catch (_) {
      // Error is caught but not used
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

  if (!course) {
    return notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Course header with banner */}
      <CourseHeader 
        title={course.title}
        subtitle={course.subtitle}
        rating={course.rating}
        reviewsCount={course.reviewsCount}
        studentsCount={course.studentsCount}
        instructor={course.instructor}
        lastUpdated={course.lastUpdated}
        language={course.language}
        level={course.level}
        thumbnail={course.thumbnail}
      />
      
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Course tabs for navigation */}
            <CourseTabs 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
            />
            
            {/* Tab content */}
            <div className="mt-6">
              {activeTab === 'overview' && (
                <CourseOverview 
                  description={course.description}
                  highlights={course.highlights}
                  requirements={course.requirements}
                  whatYouWillLearn={course.whatYouWillLearn}
                  tags={course.tags}
                />
              )}
              
              {activeTab === 'curriculum' && (
                <CourseCurriculum 
                  curriculum={course.curriculum}
                  courseId={course.id}
                />
              )}
              
              {activeTab === 'instructor' && (
                <CourseInstructor 
                  instructor={course.instructor}
                  detailed={true}
                />
              )}
              
              {activeTab === 'reviews' && (
                <CourseReviews 
                  reviews={course.reviews}
                  rating={course.rating}
                  reviewsCount={course.reviewsCount}
                />
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Course enrollment/pricing card */}
            <CourseEnrollment 
              id={course.id}
              price={course.price}
              originalPrice={course.originalPrice}
              discount={course.discount}
              promoVideo={course.promoVideo}
              duration={course.duration}
              certificateIncluded={course.certificateIncluded}
              thumbnail={course.thumbnail}
            />
            
            {/* Related courses */}
            <div className="mt-8">
              <RelatedCourses 
                currentCourseId={course.id}
                category={course.tags[1]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
