"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for learning paths
const learningPaths = [
  {
    slug: 'frontend-developer',
    name: 'Frontend Developer',
    icon: '/icons/frontend.svg',
    banner: '/banners/frontend-banner.jpg',
    color: 'from-blue-500 to-indigo-500',
    description: 'Master frontend development from HTML basics to advanced React and become a professional frontend developer ready for industry jobs.',
    duration: '6-8 months',
    level: 'Beginner to Advanced',
    popular: true
  },
  {
    slug: 'backend-developer',
    name: 'Backend Developer',
    icon: '/icons/backend.svg',
    banner: '/banners/backend-banner.jpg',
    color: 'from-green-500 to-teal-500',
    description: 'Learn server-side programming, databases, APIs, and everything needed to build robust backend systems for web applications.',
    duration: '7-9 months',
    level: 'Beginner to Advanced',
    popular: true
  },
  {
    slug: 'fullstack-developer',
    name: 'Full Stack Developer',
    icon: '/icons/fullstack.svg',
    banner: '/banners/fullstack-banner.jpg',
    color: 'from-purple-500 to-pink-500',
    description: 'Become a versatile developer capable of working on both client and server sides, with expertise in frontend, backend, and database technologies.',
    duration: '10-12 months',
    level: 'Beginner to Advanced',
    popular: true
  },
  {
    slug: 'data-scientist',
    name: 'Data Scientist',
    icon: '/icons/data-science.svg',
    banner: '/banners/data-science-banner.jpg',
    color: 'from-yellow-500 to-orange-500',
    description: 'Master data analysis, machine learning, and statistical modeling to extract insights from data and drive business decisions.',
    duration: '8-10 months',
    level: 'Intermediate to Advanced',
    popular: false
  },
  {
    slug: 'mobile-developer',
    name: 'Mobile App Developer',
    icon: '/icons/mobile.svg',
    banner: '/banners/mobile-banner.jpg',
    color: 'from-red-500 to-pink-500',
    description: 'Learn to build native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    duration: '7-9 months',
    level: 'Beginner to Advanced',
    popular: false
  },
  {
    slug: 'devops-engineer',
    name: 'DevOps Engineer',
    icon: '/icons/devops.svg',
    banner: '/banners/devops-banner.jpg',
    color: 'from-cyan-500 to-blue-500',
    description: 'Master continuous integration, deployment, containerization, and cloud infrastructure to streamline software delivery.',
    duration: '8-10 months',
    level: 'Intermediate to Advanced',
    popular: false
  }
];

// Mock testimonials
const testimonials = [
  {
    id: 1,
    quote: "Following the Frontend Developer path transformed my career. I went from a complete beginner to landing a job at a tech startup in just 7 months. The structured curriculum and projects were instrumental in building my portfolio.",
    name: "Priya Sharma",
    title: "Frontend Developer at TechCorp",
    avatar: "/images/avatars/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "The Full Stack Developer path gave me all the skills I needed to become a competent developer. The balanced approach to both frontend and backend technologies helped me build complete applications from scratch.",
    name: "Rahul Verma",
    title: "Software Engineer at InnovateTech",
    avatar: "/images/avatars/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "As someone transitioning from a non-technical field, the structured approach of the learning paths made it possible for me to learn at my own pace while ensuring I covered all the essential concepts and skills.",
    name: "Anjali Gupta",
    title: "Junior Developer at WebSolutions",
    avatar: "/images/avatars/testimonial-3.jpg"
  }
];

export default function LearningPathsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Structured Learning Paths for In-Demand Tech Careers
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Follow our carefully designed learning paths to gain the skills, knowledge, and 
            experience needed to launch or advance your career in tech.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#learning-paths" 
              className="bg-white text-indigo-700 hover:bg-indigo-100 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Explore Learning Paths
            </a>
            <button className="bg-indigo-700 text-white hover:bg-indigo-800 border border-indigo-500 font-medium px-6 py-3 rounded-lg transition-colors">
              Take Career Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Learning paths grid */}
      <div id="learning-paths" className="max-w-screen-xl mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Learning Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path) => (
            <Link 
              key={path.slug}
              href={`/learning-path/${path.slug}`}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              {/* Path banner */}
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={path.banner}
                  alt={path.name}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-80`}></div>
                
                {/* Path icon */}
                <div className="absolute bottom-0 right-0 m-4">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
                    <Image
                      src={path.icon}
                      alt={`${path.name} icon`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Popular badge */}
                {path.popular && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                    POPULAR
                  </div>
                )}
              </div>
              
              {/* Path content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {path.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {path.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {path.duration}
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {path.level}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* How it works section */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Learning Paths Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-4">Choose Your Path</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Select from our carefully designed learning paths based on your career goals, current skills, and interests.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-4">Follow the Curriculum</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Progress through structured milestones with courses, projects, and assessments designed to build your skills step by step.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-4">Achieve Your Goals</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Complete the path with a portfolio of projects, certification, and the skills needed to excel in your chosen career.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-750 p-6 rounded-xl shadow-sm">
                <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Are learning paths suitable for beginners?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, most of our learning paths are designed to start from the basics and progressively advance to more complex topics. We indicate the recommended experience level for each path to help you choose.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              How long does it take to complete a learning path?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The duration varies by path and depends on your prior knowledge and time commitment. Most paths take 6-12 months when studying 10-15 hours per week. You can progress at your own pace - there are no deadlines.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Will I receive a certificate upon completion?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, you'll receive a comprehensive certificate of completion that details all the skills and technologies you've mastered. You'll also have a portfolio of projects to demonstrate your capabilities to employers.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Can I switch between different learning paths?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, you can switch between paths or explore multiple paths simultaneously. Your progress is saved, and many paths share common foundational courses that you won't need to repeat.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-600 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Choose a learning path that aligns with your goals and start building the skills that will shape your future in tech.
          </p>
          <a 
            href="#learning-paths" 
            className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Explore Learning Paths
          </a>
        </div>
      </div>
    </div>
  );
}
