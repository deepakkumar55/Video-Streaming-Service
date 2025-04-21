"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import CertificationHeader from '@/components/certification/CertificationHeader';
import CertificationOverview from '@/components/certification/CertificationOverview';
import CertificationRequirements from '@/components/certification/CertificationRequirements';
import CertificationExam from '@/components/certification/CertificationExam';
import CertificationCourses from '@/components/certification/CertificationCourses';
import CertificationReviews from '@/components/certification/CertificationReviews';
import CertificationRelated from '@/components/certification/CertificationRelated';
import CertificationTabs from '@/components/certification/CertificationTabs';

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

// Fixed: Using correct Next.js App Router prop type
export default function CertificationPage({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params;
  const [certification, setCertification] = useState<CertificationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    try {
      const certificationData = getCertificationDetails(slug) as CertificationData;
      setCertification(certificationData);
      setLoading(false);
    } catch (_) {
      // Error is caught but not used
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

  if (!certification) {
    return notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Certification header with banner */}
      {certification && (
        <>
          <CertificationHeader 
            name={certification.name}
            description={certification.description}
            banner={certification.banner}
            icon={certification.icon}
            color={certification.color}
            difficulty={certification.difficulty}
            duration={certification.duration}
            cost={certification.cost}
            validityPeriod={certification.validityPeriod}
          />
          
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Certification tabs for navigation */}
                <CertificationTabs 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab}
                />
                
                {/* Tab content */}
                <div className="mt-6">
                  {activeTab === 'overview' && (
                    <CertificationOverview 
                      description={certification.longDescription}
                      skills={certification.skills}
                      benefits={certification.benefits}
                    />
                  )}
                  
                  {activeTab === 'requirements' && (
                    <CertificationRequirements 
                      prerequisites={certification.prerequisites}
                      examTopics={certification.examTopics}
                    />
                  )}
                  
                  {activeTab === 'exam' && (
                    <CertificationExam 
                      examFormat={certification.examFormat}
                      passRate={certification.passRate}
                      faqs={certification.faqs}
                    />
                  )}
                  
                  {activeTab === 'courses' && (
                    <CertificationCourses 
                      courses={certification.recommendedCourses}
                    />
                  )}
                  
                  {activeTab === 'reviews' && (
                    <CertificationReviews 
                      reviews={certification.reviews}
                    />
                  )}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                {/* Certification enrollment card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Certification Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Cost</span>
                      <span className="font-semibold">{certification.cost}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                      <span className="font-semibold">{certification.difficulty}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Exam Duration</span>
                      <span className="font-semibold">{certification.duration}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Pass Rate</span>
                      <span className="font-semibold">{certification.passRate}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Validity Period</span>
                      <span className="font-semibold">{certification.validityPeriod}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                      Register for Exam
                    </button>
                    
                    <button className="w-full py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/20 font-medium rounded-lg transition-colors">
                      Get Preparation Course
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium mb-3">Why Get Certified?</h4>
                    <ul className="space-y-2">
                      {certification.benefits.slice(0, 3).map((benefit, index) => (
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
                
                {/* Related certifications */}
                <div className="mt-6">
                  <CertificationRelated 
                    certifications={certification.relatedCertifications}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
