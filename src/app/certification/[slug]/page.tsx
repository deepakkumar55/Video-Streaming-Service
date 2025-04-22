"use client";

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import CertificationHeader from '@/components/certification/CertificationHeader';
import CertificationOverview from '@/components/certification/CertificationOverview';
import CertificationRequirements from '@/components/certification/CertificationRequirements';
import CertificationExam from '@/components/certification/CertificationExam';
import CertificationCourses from '@/components/certification/CertificationCourses';
import CertificationReviews from '@/components/certification/CertificationReviews';
import CertificationRelated from '@/components/certification/CertificationRelated';

// Mock data fetch function
const getCertificationDetails = (slug: string) => {
  // This would be an API call in a real app
  const certifications = {
    'react-developer': {
      name: 'React Developer Certification',
      slug: 'react-developer',
      icon: '/icons/react.svg',
      banner: '/banners/react-certification.jpg',
      color: 'from-blue-400 to-cyan-500',
      description: 'Demonstrate your expertise in building high-performance React applications and validate your skills with our industry-recognized certification.',
      longDescription: `The React Developer Certification is designed to validate your skills in building real-world applications using React and its ecosystem. This certification is recognized by top tech companies and demonstrates your ability to create production-ready React applications.

Through a rigorous examination process, you'll prove your understanding of React fundamentals, state management, hooks, context API, performance optimization, and best practices in modern React development.
Earning this certification will open new career opportunities and establish you as a qualified React professional in the competitive job market.`,
      difficulty: 'Intermediate',
      duration: '4 hours',
      validityPeriod: '2 years',
      cost: '₹7,499',
      passRate: '68%',
      prerequisites: [
        'Minimum 6 months experience working with React',
        'Strong understanding of JavaScript fundamentals',
        'Familiarity with ES6+ syntax and features',
        'Basic understanding of web development concepts'
      ],
      skills: [
        'React Component Architecture',
        'State Management',
        'React Hooks',
        'Context API',
        'Performance Optimization',
        'React Router',
        'Testing React Applications',
        'React Best Practices'
      ],
      examTopics: [
        {
          title: 'React Fundamentals',
          percentage: 25,
          subtopics: [
            'JSX and Elements',
            'Components and Props',
            'State and Lifecycle',
            'Event Handling',
            'Conditional Rendering',
            'Lists and Keys'
          ]
        },
        {
          title: 'Advanced React',
          percentage: 30,
          subtopics: [
            'Hooks (useState, useEffect, useContext, useReducer)',
            'Custom Hooks',
            'Context API',
            'Error Boundaries',
            'Higher-Order Components',
            'Render Props'
          ]
        },
        {
          title: 'React Ecosystem',
          percentage: 20,
          subtopics: [
            'State Management (Redux/MobX)',
            'React Router',
            'Form Handling',
            'API Integration',
            'Server-Side Rendering',
            'React with TypeScript'
          ]
        },
        {
          title: 'Performance & Best Practices',
          percentage: 25,
          subtopics: [
            'React Performance Optimization',
            'Code Splitting',
            'Memoization',
            'React DevTools',
            'Security',
            'Accessibility in React'
          ]
        }
      ],
      examFormat: {
        totalQuestions: 70,
        passingScore: 70,
        questionTypes: [
          'Multiple Choice Questions',
          'Multiple Response Questions',
          'Coding Challenges',
          'Case Studies'
        ],
        duration: '4 hours',
        proctoring: 'Online proctored exam',
        attempts: 'Unlimited attempts (with fee for each attempt)',
        languages: ['English', 'Hindi']
      },
      benefits: [
        'Industry-recognized credential',
        'Digital badge for social profiles and resumes',
        'Access to exclusive job opportunities',
        'Priority access to React conferences and events',
        'Join a community of certified React developers',
        'Demonstrate your expertise to employers'
      ],
      faqs: [
        {
          question: 'How do I prepare for this certification?',
          answer: 'We offer a comprehensive React Developer Certification Prep Course that covers all exam topics. Additionally, we recommend having hands-on experience building React applications and completing our practice exams.'
        },
        {
          question: 'How is the exam administered?',
          answer: 'The exam is conducted online with remote proctoring. You\'ll need a computer with a webcam and a stable internet connection. Our proctoring software will monitor you during the exam to ensure exam integrity.'
        },
        {
          question: 'What happens if I fail the exam?',
          answer: 'You can retake the exam after a 14-day waiting period. Each attempt requires paying the full exam fee. We recommend reviewing your weaker areas and taking our practice exams before reattempting.'
        },
        {
          question: 'How long is the certification valid?',
          answer: 'The certification is valid for 2 years from the date of issuance. After that, you\'ll need to take a recertification exam to maintain your certified status.'
        },
        {
          question: 'Is there a practical component to the exam?',
          answer: 'Yes, the exam includes coding challenges where you\'ll need to write and debug React code to solve specific problems. These challenges assess your practical skills in addition to theoretical knowledge.'
        }
      ]
    },
    'mern-stack': {
      name: 'MERN Stack Developer Certification',
      slug: 'mern-stack',
      icon: '/icons/mern.svg',
      banner: '/banners/mern-certification.jpg',
      color: 'from-green-500 to-emerald-500',
      description: 'Validate your full-stack JavaScript expertise with our comprehensive MERN Stack Developer Certification covering MongoDB, Express, React and Node.js.',
      longDescription: `The MERN Stack Developer Certification is designed for developers who want to prove their proficiency in building full-stack JavaScript applications using MongoDB, Express.js, React, and Node.js.

This certification validates your ability to design and develop complete web applications from database to user interface using the most popular JavaScript technologies. You'll demonstrate your expertise in creating RESTful APIs, managing data with MongoDB, building interactive UIs with React, and implementing server-side logic with Node.js and Express.
This industry-recognized credential will distinguish you as a qualified full-stack JavaScript developer capable of handling end-to-end application development.`,
      difficulty: 'Intermediate to Advanced',
      duration: '5 hours',
      validityPeriod: '2 years',
      cost: '₹9,999',
      passRate: '62%',
      prerequisites: [
        'Minimum 1 year experience with JavaScript development',
        'Basic understanding of all MERN stack components',
        'Experience building web applications',
        'Knowledge of HTTP and RESTful API concepts'
      ],
      skills: [
        'MongoDB Database Design and Operations',
        'Express.js API Development',
        'React Frontend Development',
        'Node.js Backend Development',
        'RESTful API Design',
        'Authentication & Authorization',
        'Full Stack Integration',
        'Deployment'
      ],
      examTopics: [
        {
          title: 'MongoDB',
          percentage: 20,
          subtopics: [
            'Data Modeling',
            'CRUD Operations',
            'Aggregation Framework',
            'Indexing',
            'MongoDB Atlas',
            'Mongoose ODM'
          ]
        },
        {
          title: 'Express.js & Node.js',
          percentage: 25,
          subtopics: [
            'RESTful API Design',
            'Middleware',
            'Error Handling',
            'Authentication',
            'Node.js Core Modules',
            'Asynchronous Programming'
          ]
        },
        {
          title: 'React',
          percentage: 25,
          subtopics: [
            'Component Architecture',
            'State Management',
            'Hooks',
            'Context API',
            'React Router',
            'Forms and Validation'
          ]
        },
        {
          title: 'Full Stack Integration',
          percentage: 30,
          subtopics: [
            'Client-Server Communication',
            'State Management across Stack',
            'Authentication Flow',
            'Error Handling',
            'Deployment',
            'Performance Optimization'
          ]
        }
      ],
      examFormat: {
        totalQuestions: 85,
        passingScore: 70,
        questionTypes: [
          'Multiple Choice Questions',
          'Multiple Response Questions',
          'Coding Challenges',
          'Full Stack Project Implementation'
        ],
        duration: '5 hours',
        proctoring: 'Online proctored exam',
        attempts: 'Unlimited attempts (with fee for each attempt)',
        languages: ['English', 'Hindi']
      },
      benefits: [
        'Industry-recognized full-stack credential',
        'Digital badge for your online profiles',
        'Access to exclusive MERN stack job board',
        'Membership in certified developers community',
        'Discounts on advanced workshops and conferences',
        'Stand out in the competitive job market'
      ],
      faqs: [
        {
          question: 'How comprehensive is this certification?',
          answer: 'This certification covers all aspects of the MERN stack including database design, API development, frontend implementation, and full-stack integration. It tests both theoretical knowledge and practical implementation skills.'
        },
        {
          question: 'Does the certification include a project component?',
          answer: 'Yes, the exam includes a practical project component where you\'ll be required to build a small full-stack application that demonstrates your ability to connect all parts of the MERN stack.'
        },
        {
          question: 'How does this compare to individual technology certifications?',
          answer: 'While individual certifications focus deeply on one technology, this certification validates your ability to work with the entire stack and integrate all components to build complete applications.'
        },
        {
          question: 'Is this certification recognized by employers?',
          answer: 'Yes, our certification is recognized by numerous tech companies across India and globally. We have partnered with industry leaders to ensure the curriculum meets real-world requirements.'
        },
        {
          question: 'What resources are available to prepare for this certification?',
          answer: 'We offer a comprehensive MERN Stack Certification Prep Course, practice exams, hands-on labs, and a study guide. We recommend having practical experience building MERN stack applications before attempting the exam.'
        }
      ]
    },
    'data-science': {
      name: 'Data Science Professional Certification',
      slug: 'data-science',
      icon: '/icons/data-science.svg',
      banner: '/banners/data-science-certification.jpg',
      color: 'from-purple-500 to-violet-500',
      description: 'Demonstrate your expertise in data analysis, machine learning, and statistical modeling with our comprehensive Data Science Professional Certification.',
      longDescription: `The Data Science Professional Certification validates your skills in collecting, analyzing and interpreting complex data to inform decision making. This certification demonstrates your proficiency in statistical analysis, machine learning algorithms, data visualization, and business intelligence.

Designed for aspiring and practicing data scientists, this certification evaluates your ability to extract meaningful insights from data and communicate those insights effectively to stakeholders. You'll prove your competence in using Python, data science libraries, and machine learning techniques to solve real-world problems.
This widely recognized credential will establish you as a qualified data science professional capable of driving data-backed decisions in any organization.`,
      difficulty: 'Advanced',
      duration: '6 hours',
      validityPeriod: '3 years',
      cost: '₹12,999',
      passRate: '58%',
      prerequisites: [
        'Strong programming skills in Python',
        'Understanding of statistics and probability',
        'Experience with data manipulation and analysis',
        'Basic knowledge of machine learning concepts'
      ],
      skills: [
        'Data Collection and Cleaning',
        'Exploratory Data Analysis',
        'Statistical Modeling',
        'Machine Learning Algorithms',
        'Deep Learning Fundamentals',
        'Data Visualization',
        'Model Deployment',
        'Business Intelligence'
      ],
      examTopics: [
        {
          title: 'Data Preparation and Analysis',
          percentage: 25,
          subtopics: [
            'Data Collection and Integration',
            'Data Cleaning and Preprocessing',
            'Exploratory Data Analysis',
            'Feature Engineering',
            'Statistical Analysis',
            'Hypothesis Testing'
          ]
        },
        {
          title: 'Machine Learning',
          percentage: 35,
          subtopics: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Model Evaluation and Validation',
            'Ensemble Methods',
            'Feature Selection',
            'Hyperparameter Tuning'
          ]
        },
        {
          title: 'Deep Learning and Advanced Topics',
          percentage: 20,
          subtopics: [
            'Neural Networks Fundamentals',
            'Convolutional Neural Networks',
            'Recurrent Neural Networks',
            'Natural Language Processing',
            'Time Series Analysis',
            'Computer Vision Basics'
          ]
        },
        {
          title: 'Practical Application and Deployment',
          percentage: 20,
          subtopics: [
            'Data Visualization',
            'Communicating Results',
            'Model Deployment',
            'MLOps Basics',
            'Business Intelligence',
            'Ethical Considerations'
          ]
        }
      ],
      examFormat: {
        totalQuestions: 100,
        passingScore: 75,
        questionTypes: [
          'Multiple Choice Questions',
          'Data Analysis Scenarios',
          'Programming Exercises',
          'Case Studies'
        ],
        duration: '6 hours',
        proctoring: 'Online proctored exam',
        attempts: 'Unlimited attempts (with fee for each attempt)',
        languages: ['English']
      },
      benefits: [
        'Globally recognized data science credential',
        'Digital badge for LinkedIn and professional profiles',
        'Access to exclusive data science job opportunities',
        'Membership in certified data scientists network',
        'Continuous learning resources and updates',
        'Higher salary potential and career advancement'
      ],
      faqs: [
        {
          question: 'How difficult is this certification compared to others?',
          answer: 'This is an advanced-level certification that requires solid foundational knowledge and practical experience in data science. It\'s more comprehensive than entry-level certifications and tests both theoretical understanding and applied skills.'
        },
        {
          question: 'What tools and technologies are covered in the exam?',
          answer: 'The exam focuses primarily on Python and its data science ecosystem including libraries like NumPy, Pandas, Scikit-learn, TensorFlow/Keras, and visualization tools like Matplotlib and Seaborn.'
        },
        {
          question: 'Is this certification focused on theory or practical application?',
          answer: 'Both. The certification tests your theoretical understanding of data science concepts as well as your ability to apply these concepts to solve real-world problems. The exam includes coding exercises and analysis scenarios.'
        },
        {
          question: 'How should I prepare for this certification?',
          answer: 'We recommend our Data Science Certification Prep Course, which covers all exam topics. Additionally, practical experience with data analysis projects, our practice exams, and familiarity with Python data science libraries are essential.'
        },
        {
          question: 'How does this certification compare to cloud-specific data science certifications?',
          answer: 'While cloud-specific certifications focus on implementing data science solutions on particular platforms (AWS, Azure, GCP), our certification is platform-agnostic and focuses on core data science concepts and skills that apply across any environment.'
        }
      ]
    }
    // Additional certifications could be defined here
  };

  if (!certifications[slug]) {
    return null;
  }

  // Generate recommended courses
  const recommendedCourses = Array(4).fill(0).map((_, i) => ({
    id: `${slug}-prep-${i+1}`,
    title: i === 0 ? `${certifications[slug].name} Preparation Course` : `${['Advanced', 'Essential', 'Practical'][i % 3]} ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} ${['Skills', 'Development', 'Masterclass'][i % 3]}`,
    thumbnail: `/images/thumbnails/${slug}-${(i % 3) + 1}.jpg`,
    rating: 4.5 + (i % 10) * 0.05,
    reviewsCount: 845 + Math.floor(Math.random() * 3000),
    instructor: {
      name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta"][i % 4],
      avatar: `/images/creators/avatar-${(i % 5) + 1}.jpg`,
      verified: i % 2 === 0
    },
    price: 999 + (i % 3) * 500,
    originalPrice: 3999 + (i % 3) * 1000,
    isBestseller: i === 0,
    level: ["Intermediate", "Advanced", "All Levels"][i % 3],
    isOfficial: i === 0
  }));

  // Generate related certifications
  const relatedCertifications = Object.keys(certifications)
    .filter(c => c !== slug)
    .map(c => ({
      slug: c,
      name: certifications[c].name,
      icon: certifications[c].icon,
      description: certifications[c].description.substring(0, 100) + '...',
      color: certifications[c].color,
      difficulty: certifications[c].difficulty
    }));

  // Generate reviews
  const reviews = Array(5).fill(0).map((_, i) => ({
    id: `review-${slug}-${i+1}`,
    user: {
      name: ["Arjun Singh", "Sneha Kapoor", "Rohan Mehta", "Neha Patel", "Amit Kumar"][i],
      avatar: `/images/avatars/student-${i+1}.jpg`,
      jobTitle: ["Software Developer", "Data Analyst", "Frontend Engineer", "Full Stack Developer", "Product Manager"][i],
      company: ["Infosys", "TCS", "Wipro", "Tech Mahindra", "HCL"][i]
    },
    rating: 4 + (i % 2),
    date: `${Math.floor(Math.random() * 6) + 1} months ago`,
    content: [
      "Preparing for and passing this certification significantly improved my skills and helped me secure a new position with a 30% salary increase. The exam is tough but fair.",
      "The certification was challenging but well worth the effort. The depth of knowledge tested is impressive and relevant to real-world scenarios I face in my job daily.",
      "This certification has been a game-changer for my career. The comprehensive coverage of topics forced me to learn concepts I had been avoiding, making me a much more well-rounded professional.",
      "The practical components of this certification make it stand out from others. Instead of just testing theory, it assessed my ability to apply knowledge to solve actual problems.",
      "One of the most respected certifications in the industry for good reason. Rigorous but fair, and the skills tested are exactly what employers are looking for."
    ][i],
    verified: i % 2 === 0,
    helpfulCount: Math.floor(Math.random() * 120) + 5,
  }));

  return {
    ...certifications[slug],
    recommendedCourses,
    relatedCertifications,
    reviews
  };
};

// Define proper interfaces for your data
interface CertificationData {
  name: string;
  slug: string;
  icon: string;
  banner: string;
  color: string;
  description: string;
  longDescription: string;
  difficulty: string;
  duration: string;
  validityPeriod: string;
  cost: string;
  passRate: string;
  prerequisites: string[];
  skills: string[];
  examTopics: {
    title: string;
    percentage: number;
    subtopics: string[];
  }[];
  examFormat: {
    totalQuestions: number;
    passingScore: number;
    questionTypes: string[];
    duration: string;
    proctoring: string;
    attempts: string;
    languages: string[];
  };
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  recommendedCourses: RecommendedCourse[];
  relatedCertifications: RelatedCertification[];
  reviews: Review[];
}

interface RecommendedCourse {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  reviewsCount: number;
  instructor: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  price: number;
  originalPrice: number;
  isBestseller: boolean;
  level: string;
  isOfficial: boolean;
}

interface RelatedCertification {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  difficulty: string;
}

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

// Fix the type definition for the page component
type PageProps = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function CertificationPage({ params }: PageProps) {
  // Instead of using client-side state, get the data server-side
  const slug = params.slug;
  const certificationData = getCertificationDetails(slug) as CertificationData;
  
  // Add state for active tab (making this a client component)
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!certificationData) {
    return notFound();
  }

  // Tab navigation component
  const TabNavigation = () => (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
        <li className="mr-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'overview'
                ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Overview
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setActiveTab('requirements')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'requirements'
                ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Requirements
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setActiveTab('exam')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'exam'
                ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Exam Details
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setActiveTab('preparation')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'preparation'
                ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Preparation
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'reviews'
                ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Reviews
          </button>
        </li>
      </ul>
    </div>
  );

  // Use client components for interactive elements
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Certification header with banner */}
      <CertificationHeader 
        name={certificationData.name}
        description={certificationData.description}
        banner={certificationData.banner}
        icon={certificationData.icon}
        color={certificationData.color}
        difficulty={certificationData.difficulty}
        duration={certificationData.duration}
        cost={certificationData.cost}
        validityPeriod={certificationData.validityPeriod}
      />
      
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Tab navigation */}
            <TabNavigation />
            
            {/* Tab content */}
            <div className="mt-6">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">About this Certification</h2>
                    <div className="prose prose-indigo dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{certificationData.longDescription}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Skills You'll Gain</h2>
                    <div className="flex flex-wrap gap-2">
                      {certificationData.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Benefits of Certification</h2>
                    <ul className="space-y-3">
                      {certificationData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'requirements' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
                    <ul className="space-y-3">
                      {certificationData.prerequisites.map((prerequisite, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{prerequisite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      To successfully complete this certification, you should be proficient in the following areas:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certificationData.skills.map((skill, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                          <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'exam' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Exam Format</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <span className="text-gray-600 dark:text-gray-400 min-w-[160px]">Total Questions:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{certificationData.examFormat.totalQuestions}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-600 dark:text-gray-400 min-w-[160px]">Passing Score:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{certificationData.examFormat.passingScore}%</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-600 dark:text-gray-400 min-w-[160px]">Duration:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{certificationData.examFormat.duration}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-600 dark:text-gray-400 min-w-[160px]">Proctoring:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{certificationData.examFormat.proctoring}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-600 dark:text-gray-400 min-w-[160px]">Attempts:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{certificationData.examFormat.attempts}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-600 dark:text-gray-400 min-w-[160px]">Languages:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{certificationData.examFormat.languages.join(', ')}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">Question Types:</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                          {certificationData.examFormat.questionTypes.map((type, index) => (
                            <li key={index}>{type}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Exam Topics</h2>
                    <div className="space-y-4">
                      {certificationData.examTopics.map((topic, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">{topic.title}</h3>
                            <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded">
                              {topic.percentage}% of exam
                            </span>
                          </div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                            {topic.subtopics.map((subtopic, idx) => (
                              <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'preparation' && (
                <div className="space-y-8">
                  <h2 className="text-xl font-semibold mb-4">Preparation Resources</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificationData.recommendedCourses.map((course, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="relative aspect-video">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title} 
                            className="object-cover w-full h-full"
                          />
                          {course.isOfficial && (
                            <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                              OFFICIAL COURSE
                            </div>
                          )}
                          {course.isBestseller && !course.isOfficial && (
                            <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                              BESTSELLER
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4">
                          <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {course.title}
                          </h3>
                          
                          <div className="flex items-center mb-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white mr-1">
                              {course.rating.toFixed(1)}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                              ({course.reviewsCount.toLocaleString()})
                            </span>
                          </div>
                          
                          <div className="flex items-center text-sm mb-2">
                            <img 
                              src={course.instructor.avatar}
                              alt={course.instructor.name}
                              className="w-6 h-6 rounded-full mr-2"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              {course.instructor.name}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div>
                              <span className="text-lg font-bold text-gray-900 dark:text-white">₹{course.price}</span>
                              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">₹{course.originalPrice}</span>
                            </div>
                            <span className="text-xs text-gray-600 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                              {course.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-100 dark:border-indigo-800">
                    <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-300 mb-3">
                      Preparation Tips
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-700 dark:text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-gray-800 dark:text-gray-200">Take the official preparation course to cover all exam topics systematically</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-700 dark:text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-gray-800 dark:text-gray-200">Practice with sample questions and mock exams to get familiar with the format</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-700 dark:text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-gray-800 dark:text-gray-200">Join study groups or forums to discuss challenging concepts with peers</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-700 dark:text-indigo-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-gray-800 dark:text-gray-200">Focus on hands-on practice to reinforce theoretical knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Student Reviews</h2>
                    <button className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                      Write a Review
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {certificationData.reviews.map((review, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="flex items-start">
                          <img 
                            src={review.user.avatar}
                            alt={review.user.name}
                            className="w-10 h-10 rounded-full mr-4"
                          />
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium text-gray-900 dark:text-white mr-2">
                                {review.user.name}
                              </h3>
                              {review.verified && (
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                  Verified
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {review.user.jobTitle} at {review.user.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex items-center mb-2">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {review.date}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 dark:text-gray-300">
                            {review.content}
                          </p>
                          
                          <div className="flex items-center mt-4">
                            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              Helpful ({review.helpfulCount})
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Certification enrollment card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Certification Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Cost</span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">{certificationData.cost}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                  <span className="font-semibold">{certificationData.difficulty}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Exam Duration</span>
                  <span className="font-semibold">{certificationData.duration}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Pass Rate</span>
                  <span className="font-semibold">{certificationData.passRate}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Validity Period</span>
                  <span className="font-semibold">{certificationData.validityPeriod}</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Register for Exam
                </button>
                
                <button className="w-full py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/20 font-medium rounded-lg transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Get Preparation Course
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium mb-3">Why Get Certified?</h4>
                <ul className="space-y-2">
                  {certificationData.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Recommended preparation course card */}
            {certificationData.recommendedCourses && certificationData.recommendedCourses.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6">
                <h3 className="text-xl font-semibold mb-4">Recommended Preparation</h3>
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    {certificationData.recommendedCourses[0].thumbnail && (
                      <img
                        src={certificationData.recommendedCourses[0].thumbnail}
                        alt={certificationData.recommendedCourses[0].title}
                        className="object-cover w-full h-full"
                      />
                    )}
                    {certificationData.recommendedCourses[0].isOfficial && (
                      <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                        OFFICIAL COURSE
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {certificationData.recommendedCourses[0].title}
                  </h4>
                  
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white mr-1">
                        {certificationData.recommendedCourses[0].rating.toFixed(1)}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(certificationData.recommendedCourses[0].rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                        ({certificationData.recommendedCourses[0].reviewsCount.toLocaleString()})
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <img 
                      src={certificationData.recommendedCourses[0].instructor.avatar} 
                      alt={certificationData.recommendedCourses[0].instructor.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {certificationData.recommendedCourses[0].instructor.name}
                      {certificationData.recommendedCourses[0].instructor.verified && (
                        <svg className="w-4 h-4 text-blue-500 ml-1 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">₹{certificationData.recommendedCourses[0].price}</span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">₹{certificationData.recommendedCourses[0].originalPrice}</span>
                  </div>
                  
                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            )}
            
            {/* Related certifications */}
            <div className="mt-6">
              <CertificationRelated 
                certifications={certificationData.relatedCertifications}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

