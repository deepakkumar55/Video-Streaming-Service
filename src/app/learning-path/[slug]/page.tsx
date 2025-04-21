"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PathHeader from '@/components/learning-path/PathHeader';
import PathOverview from '@/components/learning-path/PathOverview';
import PathMilestones from '@/components/learning-path/PathMilestones';
import PathSkills from '@/components/learning-path/PathSkills';
import PathCourses from '@/components/learning-path/PathCourses';
import PathResources from '@/components/learning-path/PathResources';
import PathFAQ from '@/components/learning-path/PathFAQ';
import PathRelated from '@/components/learning-path/PathRelated';

// Mock data fetch function
const getLearningPath = (slug: string) => {
  // This would be an API call in a real app
  const paths = {
    'frontend-developer': {
      name: 'Frontend Developer',
      slug: 'frontend-developer',
      icon: '/icons/frontend.svg',
      banner: '/banners/frontend-banner.jpg',
      color: 'from-blue-500 to-indigo-500',
      description: 'Master frontend development from HTML basics to advanced React and become a professional frontend developer ready for industry jobs.',
      longDescription: `This learning path will guide you through the process of becoming a professional frontend developer, step by step. You'll learn all the essential skills needed in the modern web development world.

Starting with the fundamentals of HTML, CSS and JavaScript, you'll progressively advance to learning popular frameworks and libraries like React, along with important concepts like responsive design, accessibility, and performance optimization.

By completing this path, you'll have the skills and knowledge needed to build beautiful, interactive, and high-performance web interfaces that meet industry standards.`,
      estimatedTime: '6-8 months',
      level: 'Beginner to Advanced',
      prerequisites: ['Basic computer skills', 'Problem-solving aptitude', 'Familiarity with using web browsers'],
      jobProspects: ['Frontend Developer', 'UI Developer', 'React Developer', 'Web Designer', 'UX Engineer'],
      averageSalary: '₹6-12 LPA for freshers, ₹15-30 LPA for experienced',
      skillsAcquired: [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React.js', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Advanced' },
        { name: 'Git & GitHub', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Web Performance', level: 'Intermediate' },
        { name: 'Testing', level: 'Intermediate' },
        { name: 'UI/UX Principles', level: 'Intermediate' },
      ],
      milestones: [
        {
          title: 'HTML & CSS Fundamentals',
          description: 'Learn the building blocks of web development with HTML5 and CSS3.',
          courses: [
            { id: 'html-101', title: 'HTML5 Essentials', duration: '3 weeks' },
            { id: 'css-101', title: 'CSS3 Styling Fundamentals', duration: '4 weeks' },
            { id: 'responsive-design', title: 'Responsive Web Design', duration: '2 weeks' },
          ],
          projects: [
            'Build a personal portfolio website',
            'Create a responsive landing page',
          ],
          skills: ['HTML5', 'CSS3', 'Responsive Design', 'CSS Flexbox', 'CSS Grid']
        },
        {
          title: 'JavaScript Essentials',
          description: 'Master JavaScript, the programming language of the web.',
          courses: [
            { id: 'js-101', title: 'JavaScript Fundamentals', duration: '5 weeks' },
            { id: 'dom-manipulation', title: 'DOM Manipulation', duration: '3 weeks' },
            { id: 'js-es6', title: 'Modern JavaScript (ES6+)', duration: '4 weeks' },
          ],
          projects: [
            'Build interactive form with validation',
            'Create a todo list application',
          ],
          skills: ['JavaScript', 'ES6+', 'DOM Manipulation', 'Web APIs', 'Asynchronous JS']
        },
        {
          title: 'Frontend Frameworks',
          description: 'Learn React, the popular JavaScript library for building user interfaces.',
          courses: [
            { id: 'react-101', title: 'React Fundamentals', duration: '5 weeks' },
            { id: 'react-hooks', title: 'React Hooks & Context API', duration: '4 weeks' },
            { id: 'react-router', title: 'Client-Side Routing with React Router', duration: '2 weeks' },
          ],
          projects: [
            'Build an e-commerce product page',
            'Create a social media dashboard',
          ],
          skills: ['React.js', 'React Hooks', 'Component Architecture', 'State Management', 'Routing']
        },
        {
          title: 'Advanced Frontend Development',
          description: 'Take your skills to the next level with advanced tools and techniques.',
          courses: [
            { id: 'typescript-101', title: 'TypeScript for React Developers', duration: '4 weeks' },
            { id: 'redux', title: 'State Management with Redux', duration: '3 weeks' },
            { id: 'testing', title: 'Testing React Applications', duration: '3 weeks' },
          ],
          projects: [
            'Build a full-featured web application',
            'Create and deploy a production-ready app',
          ],
          skills: ['TypeScript', 'Redux', 'Testing', 'CI/CD', 'Performance Optimization']
        }
      ],
      faqs: [
        {
          question: 'Do I need prior programming experience for this path?',
          answer: 'No prior programming experience is required. This path starts from the basics and gradually progresses to advanced topics.'
        },
        {
          question: 'How much time should I dedicate per week?',
          answer: 'We recommend dedicating at least 15-20 hours per week to make steady progress through this learning path.'
        },
        {
          question: 'Will I get a certificate after completing this path?',
          answer: 'Yes, you will receive a completion certificate that you can share on your portfolio and social media profiles.'
        },
        {
          question: 'Is this learning path up-to-date with current industry standards?',
          answer: 'Yes, we regularly update our content to ensure it aligns with the latest industry trends and best practices.'
        },
        {
          question: 'Will I be job-ready after completing this path?',
          answer: 'Yes, this path is designed to prepare you for entry-level frontend developer positions by teaching you all the necessary skills and helping you build a strong portfolio.'
        }
      ]
    },
    'backend-developer': {
      name: 'Backend Developer',
      slug: 'backend-developer',
      icon: '/icons/backend.svg',
      banner: '/banners/backend-banner.jpg',
      color: 'from-green-500 to-teal-500',
      description: 'Learn server-side programming, databases, APIs, and everything needed to build robust backend systems for web applications.',
      longDescription: `This comprehensive learning path guides you to become a skilled backend developer, capable of building robust, scalable server-side applications.

Starting with the fundamentals of server-side programming and databases, you'll progress to advanced topics like API development, authentication, cloud deployment, and microservices architecture.

By completing this path, you'll be able to design and implement efficient backend systems that power modern web applications, manage data securely, and handle high traffic loads.`,
      estimatedTime: '7-9 months',
      level: 'Beginner to Advanced',
      prerequisites: ['Basic computer skills', 'Logical thinking', 'Problem-solving aptitude'],
      jobProspects: ['Backend Developer', 'Node.js Developer', 'API Developer', 'Server Engineer', 'Database Administrator'],
      averageSalary: '₹5-12 LPA for freshers, ₹15-35 LPA for experienced',
      skillsAcquired: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Advanced' },
        { name: 'Authentication', level: 'Advanced' },
        { name: 'Cloud Deployment', level: 'Intermediate' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Microservices', level: 'Intermediate' },
        { name: 'Testing', level: 'Intermediate' },
      ],
      milestones: [
        {
          title: 'Backend Fundamentals',
          description: 'Learn the core concepts of server-side programming.',
          courses: [
            { id: 'node-101', title: 'Node.js Fundamentals', duration: '4 weeks' },
            { id: 'express-101', title: 'Express.js Framework', duration: '3 weeks' },
            { id: 'rest-apis', title: 'RESTful API Development', duration: '3 weeks' },
          ],
          projects: [
            'Build a simple REST API',
            'Create a CLI application with Node.js',
          ],
          skills: ['Node.js', 'Express.js', 'REST APIs', 'HTTP', 'Middleware']
        },
        {
          title: 'Database Management',
          description: 'Master both SQL and NoSQL databases for effective data management.',
          courses: [
            { id: 'mongodb-101', title: 'MongoDB Essentials', duration: '4 weeks' },
            { id: 'sql-101', title: 'SQL Database Fundamentals', duration: '4 weeks' },
            { id: 'data-modeling', title: 'Data Modeling & Relationships', duration: '3 weeks' },
          ],
          projects: [
            'Build a blog API with MongoDB',
            'Create a product inventory system with SQL',
          ],
          skills: ['MongoDB', 'SQL', 'Database Design', 'CRUD Operations', 'Queries']
        },
        {
          title: 'Advanced Backend Development',
          description: 'Learn advanced concepts for building robust backend systems.',
          courses: [
            { id: 'auth-security', title: 'Authentication & Security', duration: '4 weeks' },
            { id: 'async-js', title: 'Asynchronous Programming', duration: '3 weeks' },
            { id: 'error-handling', title: 'Error Handling & Validation', duration: '2 weeks' },
          ],
          projects: [
            'Build an authentication system',
            'Create an e-commerce backend API',
          ],
          skills: ['Authentication', 'JWT', 'Async/Await', 'Error Handling', 'Input Validation']
        },
        {
          title: 'Deployment & DevOps',
          description: 'Master deployment, scaling, and maintenance of backend applications.',
          courses: [
            { id: 'deployment-101', title: 'Deployment & CI/CD', duration: '3 weeks' },
            { id: 'docker-101', title: 'Containerization with Docker', duration: '3 weeks' },
            { id: 'testing-backend', title: 'Testing Backend Applications', duration: '3 weeks' },
          ],
          projects: [
            'Deploy a full application with CI/CD',
            'Create a microservices architecture',
          ],
          skills: ['Deployment', 'Docker', 'Testing', 'CI/CD', 'Microservices']
        }
      ],
      faqs: [
        {
          question: 'Is JavaScript the only language used in this learning path?',
          answer: 'This path primarily focuses on JavaScript (Node.js) for backend development, but also covers database languages like SQL and concepts that are transferable to other backend languages.'
        },
        {
          question: 'Do I need to learn frontend development before this path?',
          answer: 'No, you can start with backend development without frontend knowledge. However, understanding both eventually will make you a more versatile developer.'
        },
        {
          question: 'What kind of projects will I be able to build after completing this path?',
          answer: 'You\'ll be able to build complete backend systems including RESTful APIs, authentication systems, database integrations, and deploy them to production environments.'
        },
        {
          question: 'Are there any additional tools I need to install?',
          answer: 'You\'ll need to install Node.js, MongoDB, and tools like Postman for API testing. All these are free and we provide setup instructions.'
        },
        {
          question: 'How is this path different from the Full Stack Developer path?',
          answer: 'This path focuses exclusively on backend technologies, going deeper into server-side concepts. The Full Stack path covers both frontend and backend but with less depth in each.'
        }
      ]
    },
    'fullstack-developer': {
      name: 'Full Stack Developer',
      slug: 'fullstack-developer',
      icon: '/icons/fullstack.svg',
      banner: '/banners/fullstack-banner.jpg',
      color: 'from-purple-500 to-pink-500',
      description: 'Become a versatile developer capable of working on both client and server sides, with expertise in frontend, backend, and database technologies.',
      longDescription: `This comprehensive learning path will transform you into a complete Full Stack Developer, equipped with the skills to handle all aspects of web application development.

You'll learn both frontend technologies (HTML, CSS, JavaScript, React) and backend technologies (Node.js, Express, databases), enabling you to build complete, end-to-end web applications independently.

This path is perfect for those who want maximum versatility in their skill set and the ability to work on all layers of modern web applications.`,
      estimatedTime: '10-12 months',
      level: 'Beginner to Advanced',
      prerequisites: ['Basic computer knowledge', 'Dedication and persistence', 'Problem-solving attitude'],
      jobProspects: ['Full Stack Developer', 'MERN Stack Developer', 'Software Engineer', 'Web Application Developer', 'Product Engineer'],
      averageSalary: '₹6-15 LPA for freshers, ₹18-45 LPA for experienced',
      skillsAcquired: [
        { name: 'HTML5/CSS3', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React.js', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'RESTful APIs', level: 'Advanced' },
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Deployment', level: 'Intermediate' },
        { name: 'Authentication & Security', level: 'Advanced' },
      ],
      milestones: [
        {
          title: 'Frontend Foundations',
          description: 'Build a solid foundation in frontend web development.',
          courses: [
            { id: 'html-css', title: 'HTML5 & CSS3 Complete Course', duration: '5 weeks' },
            { id: 'js-complete', title: 'JavaScript Mastery', duration: '6 weeks' },
            { id: 'responsive-web', title: 'Responsive Web Design', duration: '3 weeks' },
          ],
          projects: [
            'Multi-page responsive website',
            'Interactive JavaScript application',
          ],
          skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'DOM Manipulation']
        },
        {
          title: 'Frontend Frameworks',
          description: 'Master React for building dynamic user interfaces.',
          courses: [
            { id: 'react-complete', title: 'React Complete Guide', duration: '6 weeks' },
            { id: 'react-hooks', title: 'Advanced React Hooks', duration: '3 weeks' },
            { id: 'redux', title: 'State Management with Redux', duration: '3 weeks' },
          ],
          projects: [
            'Single-page application (SPA)',
            'State management implementation',
          ],
          skills: ['React.js', 'Hooks', 'State Management', 'Component Design', 'Frontend Routing']
        },
        {
          title: 'Backend Development',
          description: 'Learn server-side programming and API development.',
          courses: [
            { id: 'node-express', title: 'Node.js & Express.js', duration: '5 weeks' },
            { id: 'mongodb', title: 'MongoDB Database', duration: '4 weeks' },
            { id: 'api-design', title: 'RESTful API Design', duration: '3 weeks' },
          ],
          projects: [
            'Complete REST API',
            'Database integration project',
          ],
          skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Server-side Development']
        },
        {
          title: 'Full Stack Integration',
          description: 'Connect frontend and backend to build complete applications.',
          courses: [
            { id: 'auth-security', title: 'Authentication & Security', duration: '4 weeks' },
            { id: 'fullstack-project', title: 'Full Stack Project', duration: '6 weeks' },
            { id: 'deployment', title: 'Deployment & DevOps Basics', duration: '3 weeks' },
          ],
          projects: [
            'E-commerce platform',
            'Social media application',
          ],
          skills: ['Full Stack Integration', 'Authentication', 'Project Architecture', 'Deployment', 'Testing']
        }
      ],
      faqs: [
        {
          question: 'Is this path suitable for complete beginners?',
          answer: 'Yes, this path starts from the fundamentals and progressively builds up to advanced concepts, making it suitable for beginners with no prior coding experience.'
        },
        {
          question: 'How much time should I dedicate daily to complete this path efficiently?',
          answer: 'We recommend 2-3 hours daily or 15-20 hours weekly for optimal progress. Consistency is more important than marathon sessions.'
        },
        {
          question: 'Do I need a computer science degree to become a Full Stack Developer?',
          answer: 'No, a CS degree is not required. This path teaches all the practical skills you need, though fundamental CS concepts are introduced where relevant.'
        },
        {
          question: 'Will I be building projects throughout the learning path?',
          answer: 'Yes, you\'ll build numerous projects of increasing complexity, culminating in full-stack applications that can serve as portfolio pieces for job applications.'
        },
        {
          question: 'Is the MERN stack the only full stack technology covered?',
          answer: 'This path focuses primarily on the MERN stack (MongoDB, Express, React, Node.js), but the concepts learned are transferable to other technology stacks.'
        }
      ]
    },
    // Additional paths could be defined here
  };

  if (!paths[slug]) {
    return null;
  }

  // Generate recommended courses
  const recommendedCourses = Array(6).fill(0).map((_, i) => ({
    id: `${slug}-course-${i+1}`,
    title: `${i === 0 ? 'Complete' : 'Advanced'} ${paths[slug].name} ${i === 0 ? 'Bootcamp' : `Course ${i+1}`}`,
    thumbnail: `/images/thumbnails/${slug}-${(i % 3) + 1}.jpg`,
    rating: 4.5 + (i % 10) * 0.05,
    reviewsCount: 845 + Math.floor(Math.random() * 3000),
    instructor: {
      name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar"][i % 5],
      avatar: `/images/creators/avatar-${(i % 5) + 1}.jpg`,
      verified: i % 3 === 0
    },
    price: 499 + (i % 4) * 100,
    originalPrice: 3499 + (i % 4) * 500,
    isBestseller: i === 0,
    level: ["Beginner", "Intermediate", "Advanced", "All Levels"][i % 4],
  }));
  
  // Generate related paths
  const relatedPaths = Object.keys(paths)
    .filter(p => p !== slug)
    .slice(0, 3)
    .map(p => ({
      slug: p,
      name: paths[p].name,
      icon: paths[p].icon,
      description: paths[p].description.substring(0, 100) + '...',
      color: paths[p].color
    }));
  
  // Generate resources
  const resources = [
    { 
      type: 'Roadmap', 
      title: `${paths[slug].name} Visual Roadmap 2023`, 
      description: 'A comprehensive visual guide showing the complete learning journey',
      url: '#',
      isPremium: false
    },
    { 
      type: 'eBook', 
      title: `Becoming a ${paths[slug].name} in 2023`, 
      description: 'In-depth guide covering all aspects of the career path',
      url: '#',
      isPremium: true
    },
    { 
      type: 'Cheatsheet', 
      title: `${paths[slug].name} Interview Questions`, 
      description: '200+ commonly asked interview questions with answers',
      url: '#',
      isPremium: false
    },
    { 
      type: 'Template', 
      title: `${paths[slug].name} Portfolio Projects`, 
      description: 'Project templates to showcase your skills to employers',
      url: '#',
      isPremium: true
    },
    { 
      type: 'Guide', 
      title: `Salary Negotiation for ${paths[slug].name}s`, 
      description: 'How to negotiate the best compensation package',
      url: '#',
      isPremium: false
    },
  ];

  return {
    ...paths[slug],
    recommendedCourses,
    relatedPaths,
    resources
  };
};

interface LearningPathProps {
  params: {
    slug: string;
  };
}

export default function LearningPathPage({ params }: LearningPathProps) {
  const { slug } = params;
  const [path, setPath] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    try {
      const pathData = getLearningPath(slug);
      setPath(pathData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notFound();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!path) {
    return notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Learning path header */}
      <PathHeader 
        name={path.name}
        description={path.description}
        banner={path.banner}
        icon={path.icon}
        color={path.color}
        estimatedTime={path.estimatedTime}
        level={path.level}
        jobProspects={path.jobProspects}
      />
      
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Path content */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Learning Path Overview</h2>
              <div className="prose prose-indigo dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{path.longDescription}</p>
              </div>
            </div>
            
            {/* Path milestones */}
            <PathMilestones milestones={path.milestones} />
            
            {/* Skills acquired */}
            <div className="mt-10">
              <PathSkills skills={path.skillsAcquired} />
            </div>
            
            {/* Recommended courses */}
            <div className="mt-10">
              <PathCourses courses={path.recommendedCourses} />
            </div>
            
            {/* FAQs */}
            <div className="mt-10">
              <PathFAQ faqs={path.faqs} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Path career info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold mb-4">Career Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Prerequisites</h4>
                  <ul className="mt-2 space-y-1">
                    {path.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Job Opportunities</h4>
                  <ul className="mt-2 space-y-1">
                    {path.jobProspects.map((job, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Average Salary in India</h4>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">{path.averageSalary}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Estimated Completion Time</h4>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">{path.estimatedTime}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                  Enroll in This Path
                </button>
                
                <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                  Track your progress and get personalized recommendations
                </p>
              </div>
            </div>
            
            {/* Additional resources */}
            <PathResources resources={path.resources} />
            
            {/* Related paths */}
            <div className="mt-6">
              <PathRelated paths={path.relatedPaths} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
