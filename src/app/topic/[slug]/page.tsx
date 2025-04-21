"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import TopicHeader from '@/components/topic/TopicHeader';
import TopicTabs from '@/components/topic/TopicTabs';
import TopicCourses from '@/components/topic/TopicCourses';
import TopicVideos from '@/components/topic/TopicVideos';
import TopicInstructors from '@/components/topic/TopicInstructors';
import TopicResources from '@/components/topic/TopicResources';
import TopicRelated from '@/components/topic/TopicRelated';

// Mock data fetch function
const getTopicDetails = (slug: string) => {
  // This would be an API call in a real app
  const topics = {
    'java': {
      name: 'Java Programming',
      slug: 'java',
      icon: '/icons/java.svg',
      banner: '/banners/java-banner.jpg',
      color: 'from-red-500 to-orange-500',
      description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It\'s used for web development, mobile applications, and enterprise software.',
      longDescription: `Java is one of the world's most popular programming languages. It's used for developing applications for desktop, web, and mobile devices, game consoles, IoT, and more.

As a versatile language with a strong emphasis on object-oriented programming principles, Java has become a cornerstone of modern software development, particularly in enterprise environments.

Learning Java provides a solid foundation in programming concepts and opens up numerous career opportunities in various industries.`,
      studentsCount: 845000,
      coursesCount: 367,
      videosCount: 5600,
      averageRating: 4.6,
      learningPath: [
        { level: 'Beginner', topics: ['Java Syntax', 'OOP Concepts', 'Exception Handling'] },
        { level: 'Intermediate', topics: ['Collections Framework', 'IO Streams', 'Multithreading'] },
        { level: 'Advanced', topics: ['Java EE', 'Spring Framework', 'Microservices'] },
      ],
      keyTools: ['IntelliJ IDEA', 'Eclipse', 'Maven', 'Gradle', 'Spring Boot'],
      careerOpportunities: ['Java Developer', 'Android Developer', 'Backend Engineer', 'Full Stack Developer', 'DevOps Engineer']
    },
    'python': {
      name: 'Python',
      slug: 'python',
      icon: '/icons/python.svg',
      banner: '/banners/python-banner.jpg',
      color: 'from-blue-500 to-green-500',
      description: 'Python is an interpreted, high-level and general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.',
      longDescription: `Python is known for its simplicity and readability, making it an excellent language for beginners. Its versatility allows it to be used in web development, data science, AI, machine learning, automation, and more.

With a vast ecosystem of libraries and frameworks, Python enables developers to build powerful applications with minimal code. Its interpreter-based nature makes it highly portable across different platforms.

Python's popularity in data science and machine learning has surged in recent years, making it one of the most in-demand programming skills in the job market.`,
      studentsCount: 1250000,
      coursesCount: 412,
      videosCount: 7200,
      averageRating: 4.8,
      learningPath: [
        { level: 'Beginner', topics: ['Python Basics', 'Data Types', 'Control Flow'] },
        { level: 'Intermediate', topics: ['OOP in Python', 'File Handling', 'Web Scraping'] },
        { level: 'Advanced', topics: ['Django/Flask', 'Data Science', 'Machine Learning'] },
      ],
      keyTools: ['VS Code', 'PyCharm', 'Jupyter Notebook', 'Anaconda', 'Google Colab'],
      careerOpportunities: ['Python Developer', 'Data Scientist', 'ML Engineer', 'Backend Developer', 'Automation Engineer']
    },
    'web-dev': {
      name: 'Web Development',
      slug: 'web-dev',
      icon: '/icons/web-dev.svg',
      banner: '/banners/web-dev-banner.jpg',
      color: 'from-indigo-600 to-purple-600',
      description: 'Web development encompasses all aspects of building websites and web applications, from frontend user interfaces to backend server logic and databases.',
      longDescription: `Web development is a broad field that covers everything from creating simple static websites to complex web applications. It involves frontend development (HTML, CSS, JavaScript), backend development (server-side code), and database management.

Modern web development has evolved with frameworks like React, Angular, and Vue.js for frontend, and Node.js, Django, and Laravel for backend. Understanding these technologies is crucial for building responsive, scalable, and maintainable web applications.

The demand for skilled web developers continues to grow as businesses across all industries require robust online presence and web-based solutions.`,
      studentsCount: 1850000,
      coursesCount: 530,
      videosCount: 9800,
      averageRating: 4.7,
      learningPath: [
        { level: 'Beginner', topics: ['HTML', 'CSS', 'JavaScript Basics'] },
        { level: 'Intermediate', topics: ['React/Angular/Vue', 'Node.js', 'MongoDB'] },
        { level: 'Advanced', topics: ['PWAs', 'Performance Optimization', 'DevOps'] },
      ],
      keyTools: ['VS Code', 'Chrome DevTools', 'Git', 'Webpack', 'Docker'],
      careerOpportunities: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Developer', 'DevOps Engineer']
    },
    'mern': {
      name: 'MERN Stack',
      slug: 'mern',
      icon: '/icons/mern.svg',
      banner: '/banners/mern-banner.jpg',
      color: 'from-green-500 to-teal-500',
      description: 'MERN Stack is a JavaScript stack that includes MongoDB, Express.js, React, and Node.js for building modern web applications with JavaScript throughout the entire stack.',
      longDescription: `The MERN Stack represents a powerful combination of technologies for full-stack JavaScript development. It consists of MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (runtime environment).

This technology stack allows developers to build complete web applications using JavaScript throughout the entire development process. The seamless integration between these technologies makes development more efficient and maintainable.

MERN Stack development is highly sought after in the industry due to its scalability, performance, and the productivity benefits of using a consistent language across the entire application.`,
      studentsCount: 620000,
      coursesCount: 185,
      videosCount: 3200,
      averageRating: 4.6,
      learningPath: [
        { level: 'Beginner', topics: ['JavaScript Fundamentals', 'React Basics', 'Node.js Basics'] },
        { level: 'Intermediate', topics: ['Express.js APIs', 'MongoDB CRUD', 'React Hooks & Context'] },
        { level: 'Advanced', topics: ['Authentication', 'Redux', 'Deployment & CI/CD'] },
      ],
      keyTools: ['VS Code', 'MongoDB Atlas', 'Postman', 'GitHub', 'Heroku/Vercel'],
      careerOpportunities: ['MERN Stack Developer', 'JavaScript Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer']
    },
    'dsa': {
      name: 'Data Structures & Algorithms',
      slug: 'dsa',
      icon: '/icons/dsa.svg',
      banner: '/banners/dsa-banner.jpg',
      color: 'from-yellow-500 to-amber-500',
      description: 'Data Structures and Algorithms form the foundation of computer science, focusing on efficient data organization and problem-solving methods that are crucial for software development.',
      longDescription: `Data Structures and Algorithms (DSA) are fundamental concepts in computer science that focus on organizing and manipulating data efficiently, and designing step-by-step procedures to solve computational problems.

Understanding DSA is essential for writing efficient code, optimizing performance, and solving complex problems. It's also a critical component of technical interviews at top tech companies.

Mastering DSA provides a strong foundation that applies across all programming languages and domains, enabling developers to write more efficient, scalable, and maintainable code.`,
      studentsCount: 750000,
      coursesCount: 215,
      videosCount: 4800,
      averageRating: 4.7,
      learningPath: [
        { level: 'Beginner', topics: ['Arrays', 'Linked Lists', 'Stacks & Queues'] },
        { level: 'Intermediate', topics: ['Trees', 'Graphs', 'Sorting Algorithms'] },
        { level: 'Advanced', topics: ['Dynamic Programming', 'Advanced Graphs', 'System Design'] },
      ],
      keyTools: ['LeetCode', 'HackerRank', 'GeeksforGeeks', 'VisuAlgo', 'Algorithm Visualizer'],
      careerOpportunities: ['Software Engineer', 'Data Scientist', 'Research Scientist', 'Competitive Programmer', 'Algorithm Specialist']
    },
    // Additional topics could be defined here
  };

  if (!topics[slug]) {
    return null;
  }

  return { 
    ...topics[slug],
    // Generate featured courses
    featuredCourses: Array(4).fill(0).map((_, i) => ({
      id: `${slug}-course-${i+1}`,
      title: `Complete ${topics[slug].name} ${i === 0 ? 'Masterclass' : `Course ${i+1}`} - ${i === 0 ? 'From Zero to Expert' : `Level ${i+1}`}`,
      thumbnail: `/images/thumbnails/${slug}-${(i % 3) + 1}.jpg`,
      rating: 4.5 + (i % 10) * 0.05,
      reviewsCount: 845 + Math.floor(Math.random() * 3000),
      studentsCount: 12500 + Math.floor(Math.random() * 50000),
      instructor: {
        name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar"][i % 5],
        avatar: `/images/creators/avatar-${(i % 5) + 1}.jpg`,
        verified: i % 3 === 0
      },
      price: 499 + (i % 4) * 100,
      originalPrice: 3499 + (i % 4) * 500,
      isBestseller: i === 0,
      isNew: i === 1,
      level: ["Beginner", "Intermediate", "Advanced", "All Levels"][i % 4],
    })),
    
    // Generate popular videos
    popularVideos: Array(8).fill(0).map((_, i) => ({
      id: `${slug}-video-${i+1}`,
      title: `${i+1}. ${['Introduction to', 'Understanding', 'Mastering', 'Advanced'][i % 4]} ${topics[slug].name} - ${['Fundamentals', 'Core Concepts', 'Best Practices', 'Tips & Tricks'][i % 4]}`,
      thumbnail: `/images/thumbnails/${slug}-video-${(i % 5) + 1}.jpg`,
      duration: `${Math.floor(Math.random() * 30) + 10}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      views: Math.floor(Math.random() * 500000) + 50000,
      uploadDate: `${Math.floor(Math.random() * 11) + 1} months ago`,
      instructor: {
        name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar"][i % 5],
        avatar: `/images/creators/avatar-${(i % 5) + 1}.jpg`,
        verified: i % 2 === 0
      },
    })),
    
    // Generate top instructors
    topInstructors: Array(6).fill(0).map((_, i) => ({
      id: `inst-${i+10}`,
      name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar", "Neha Singh"][i],
      title: [`${topics[slug].name} Expert`, "Senior Developer", "Tech Lead", "Educator & Developer", "Course Creator", "Software Architect"][i],
      avatar: `/images/creators/avatar-${(i % 5) + 1}.jpg`,
      coursesCount: 3 + (i % 5),
      studentsCount: 25000 + Math.floor(Math.random() * 75000),
      rating: 4.5 + (i % 10) * 0.05,
    })),
    
    // Generate resources
    resources: [
      { 
        type: 'Book', 
        title: `The Complete Guide to ${topics[slug].name}`, 
        author: ["Rahul Sharma", "Priya Patel", "Vikram Thapar"][Math.floor(Math.random() * 3)],
        url: '#',
        isPremium: false
      },
      { 
        type: 'Cheatsheet', 
        title: `${topics[slug].name} Cheatsheet for Quick Reference`, 
        author: "EduStream Team",
        url: '#',
        isPremium: false
      },
      { 
        type: 'eBook', 
        title: `${topics[slug].name} - From Basics to Advanced`, 
        author: ["Anjali Gupta", "Rajesh Kumar"][Math.floor(Math.random() * 2)],
        url: '#',
        isPremium: true
      },
      { 
        type: 'Practice Set', 
        title: `100+ ${topics[slug].name} Practice Problems`, 
        author: "TheCampusCoders",
        url: '#',
        isPremium: true
      },
      { 
        type: 'Guide', 
        title: `Career Roadmap: Becoming a ${topics[slug].name} Developer`, 
        author: "EduStream Careers",
        url: '#',
        isPremium: false
      },
    ],
    
    // Related topics
    relatedTopics: Object.keys(topics)
      .filter(t => t !== slug)
      .slice(0, 4)
      .map(t => ({
        slug: t,
        name: topics[t].name,
        icon: topics[t].icon,
        coursesCount: topics[t].coursesCount
      }))
  };
};

interface TopicPageProps {
  params: {
    slug: string;
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const { slug } = params;
  const [topic, setTopic] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    try {
      const topicData = getTopicDetails(slug);
      setTopic(topicData);
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

  if (!topic) {
    return notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Topic header with banner */}
      <TopicHeader 
        name={topic.name}
        description={topic.description}
        banner={topic.banner}
        icon={topic.icon}
        color={topic.color}
        studentsCount={topic.studentsCount}
        coursesCount={topic.coursesCount}
        videosCount={topic.videosCount}
        averageRating={topic.averageRating}
      />
      
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Topic tabs for navigation */}
            <TopicTabs 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
            />
            
            {/* Tab content */}
            <div className="mt-6">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">About {topic.name}</h2>
                    <div className="prose prose-indigo dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{topic.longDescription}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
                    <div className="space-y-4">
                      {topic.learningPath.map((path, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                          <h3 className="font-medium text-gray-900 dark:text-white mb-2">{path.level}</h3>
                          <div className="flex flex-wrap gap-2">
                            {path.topics.map((t, i) => (
                              <span key={i} className="px-2 py-1 bg-white dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Key Tools & Technologies</h2>
                      <ul className="space-y-2">
                        {topic.keyTools.map((tool, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Career Opportunities</h2>
                      <ul className="space-y-2">
                        {topic.careerOpportunities.map((career, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'courses' && (
                <TopicCourses 
                  courses={topic.featuredCourses}
                  topicName={topic.name}
                />
              )}
              
              {activeTab === 'videos' && (
                <TopicVideos 
                  videos={topic.popularVideos}
                  topicName={topic.name}
                />
              )}
              
              {activeTab === 'instructors' && (
                <TopicInstructors 
                  instructors={topic.topInstructors}
                  topicName={topic.name}
                />
              )}
              
              {activeTab === 'resources' && (
                <TopicResources 
                  resources={topic.resources}
                  topicName={topic.name}
                />
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Popular courses card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold mb-4">Most Popular Course</h3>
              {topic.featuredCourses.length > 0 && (
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={topic.featuredCourses[0].thumbnail}
                      alt={topic.featuredCourses[0].title}
                      fill
                      className="object-cover"
                    />
                    {topic.featuredCourses[0].isBestseller && (
                      <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                        BESTSELLER
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {topic.featuredCourses[0].title}
                  </h4>
                  
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white mr-1">
                        {topic.featuredCourses[0].rating.toFixed(1)}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(topic.featuredCourses[0].rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                        ({topic.featuredCourses[0].reviewsCount.toLocaleString()})
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">₹{topic.featuredCourses[0].price}</span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">₹{topic.featuredCourses[0].originalPrice}</span>
                  </div>
                  
                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                    View Course
                  </button>
                </div>
              )}
            </div>
            
            {/* Related topics */}
            <TopicRelated 
              topics={topic.relatedTopics}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
