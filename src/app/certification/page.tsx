"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for certifications
const certifications = [
  {
    slug: 'react-developer',
    name: 'React Developer Certification',
    icon: '/icons/react.svg',
    banner: '/banners/react-certification.jpg',
    color: 'from-blue-400 to-cyan-500',
    description: 'Demonstrate your expertise in building high-performance React applications and validate your skills with our industry-recognized certification.',
    difficulty: 'Intermediate',
    duration: '4 hours',
    cost: '₹7,499',
    popular: true,
    category: 'Frontend'
  },
  {
    slug: 'mern-stack',
    name: 'MERN Stack Developer Certification',
    icon: '/icons/mern.svg',
    banner: '/banners/mern-certification.jpg',
    color: 'from-green-500 to-emerald-500',
    description: 'Validate your full-stack JavaScript expertise with our comprehensive MERN Stack Developer Certification covering MongoDB, Express, React and Node.js.',
    difficulty: 'Intermediate to Advanced',
    duration: '5 hours',
    cost: '₹9,999',
    popular: true,
    category: 'Full Stack'
  },
  {
    slug: 'data-science',
    name: 'Data Science Professional Certification',
    icon: '/icons/data-science.svg',
    banner: '/banners/data-science-certification.jpg',
    color: 'from-purple-500 to-violet-500',
    description: 'Demonstrate your expertise in data analysis, machine learning, and statistical modeling with our comprehensive Data Science Professional Certification.',
    difficulty: 'Advanced',
    duration: '6 hours',
    cost: '₹12,999',
    popular: false,
    category: 'Data Science'
  },
  {
    slug: 'java-developer',
    name: 'Java Developer Certification',
    icon: '/icons/java.svg',
    banner: '/banners/java-certification.jpg',
    color: 'from-red-500 to-orange-500',
    description: 'Validate your Java programming skills and knowledge of core Java concepts, object-oriented programming, and application development.',
    difficulty: 'Intermediate',
    duration: '4 hours',
    cost: '₹8,499',
    popular: false,
    category: 'Backend'
  },
  {
    slug: 'frontend-expert',
    name: 'Frontend Expert Certification',
    icon: '/icons/frontend.svg',
    banner: '/banners/frontend-certification.jpg',
    color: 'from-pink-500 to-rose-500',
    description: 'Showcase your mastery of HTML, CSS, JavaScript, and modern frontend development techniques with this comprehensive certification.',
    difficulty: 'Intermediate to Advanced',
    duration: '5 hours',
    cost: '₹8,999',
    popular: false,
    category: 'Frontend'
  },
  {
    slug: 'devops-engineer',
    name: 'DevOps Engineer Certification',
    icon: '/icons/devops.svg',
    banner: '/banners/devops-certification.jpg',
    color: 'from-sky-500 to-blue-500',
    description: 'Demonstrate your expertise in CI/CD, containerization, cloud deployment, and infrastructure as code with our DevOps certification.',
    difficulty: 'Advanced',
    duration: '5 hours',
    cost: '₹11,499',
    popular: false,
    category: 'DevOps'
  }
];

// Benefits of certification
const benefits = [
  {
    icon: (
      <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Industry Recognition',
    description: 'Our certifications are recognized by top tech companies across India and globally.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Higher Salary Potential',
    description: 'Certified professionals earn 15-20% higher salaries than their non-certified counterparts.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Career Advancement',
    description: 'Certification helps you stand out in job applications and opens doors to new career opportunities.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Industry Network',
    description: 'Join a community of certified professionals and build valuable connections in your field.'
  }
];

// Success stories
const successStories = [
  {
    name: 'Amit Sharma',
    role: 'Software Engineer at Amazon',
    certification: 'Java Developer Certification',
    image: '/images/testimonials/testimonial-1.jpg',
    quote: 'After getting certified, I received three job offers within a month. The comprehensive exam preparation pushed me to master concepts I had only a surface-level understanding of before.',
    increase: '40% salary increase'
  },
  {
    name: 'Priya Mahajan',
    role: 'Frontend Lead at Flipkart',
    certification: 'React Developer Certification',
    image: '/images/testimonials/testimonial-2.jpg',
    quote: 'The certification process challenged me to dig deeper into React internals and optimization techniques. This knowledge directly helped me lead a major performance overhaul at my company.',
    increase: 'Promoted to Lead Developer'
  },
  {
    name: 'Rahul Gupta',
    role: 'Data Scientist at Microsoft',
    certification: 'Data Science Professional Certification',
    image: '/images/testimonials/testimonial-3.jpg',
    quote: 'This certification is highly respected in the industry. The rigorous examination process ensures that only those with practical application knowledge can pass, which employers recognize and value.',
    increase: 'International job opportunity'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Certifications' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'datascience', name: 'Data Science' },
  { id: 'devops', name: 'DevOps' },
];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);
  
  // Function to filter certifications by category
  const filterByCategory = (categoryId) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      setFilteredCertifications(certifications);
    } else {
      const lowercaseCategoryId = categoryId.toLowerCase();
      setFilteredCertifications(certifications.filter(cert => 
        cert.category.toLowerCase().includes(lowercaseCategoryId)
      ));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Validate Your Skills with Industry-Recognized Certifications</h1>
            <p className="text-lg text-blue-100 mb-8">
              Stand out in the job market with our rigorous, respected technical certifications 
              designed to verify your expertise and advance your career
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#certifications" 
                className="bg-white text-indigo-700 hover:bg-indigo-100 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Browse Certifications
              </a>
              <button className="bg-indigo-700 text-white hover:bg-indigo-800 border border-indigo-500 font-medium px-6 py-3 rounded-lg transition-colors">
                Learn About Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certification categories & grid */}
      <div id="certifications" className="max-w-screen-xl mx-auto px-4 md:px-8 pt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Certifications</h2>
        
        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => filterByCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((certification) => (
            <Link 
              key={certification.slug}
              href={`/certification/${certification.slug}`}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              {/* Certification banner */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={certification.banner}
                  alt={certification.name}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${certification.color} opacity-75`}></div>
                
                {/* Certification icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-lg">
                    <Image
                      src={certification.icon}
                      alt={`${certification.name} icon`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Popular badge */}
                {certification.popular && (
                  <div className="absolute top-4 left-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded">
                    POPULAR
                  </div>
                )}
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                  {certification.category}
                </div>
              </div>
              
              {/* Certification content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {certification.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {certification.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Difficulty</div>
                    <div className="font-medium">{certification.difficulty}</div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="font-medium">{certification.duration}</div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="font-bold text-xl text-gray-900 dark:text-white">
                    {certification.cost}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Includes exam fee and practice tests
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Benefits section */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 mt-8">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Certification</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Success stories */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-850 dark:to-gray-900 py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-bold text-lg">{story.name}</div>
                    <div className="text-sm opacity-90">{story.role}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full mb-4">
                    {story.certification}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{story.quote}"</p>
                  
                  <div className="flex items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="font-bold text-green-600 dark:text-green-400">{story.increase}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              How are your certifications different from others?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our certifications are designed by industry experts and focus on practical, real-world skills rather than just theoretical knowledge. Each certification includes hands-on coding tasks and problem-solving exercises that mirror actual work scenarios.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              How should I prepare for certification exams?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We offer dedicated preparation courses for each certification that cover all exam topics. Additionally, we provide practice tests, hands-on labs, and study guides. We recommend at least 4-6 weeks of preparation before attempting the exam.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Are your certifications recognized by employers?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, our certifications are recognized by hundreds of companies across India and globally. We collaborate with industry leaders to ensure our certifications meet real-world requirements and validate the skills employers are looking for.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              How are the exams conducted?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our exams are conducted online with remote proctoring. You can take them from anywhere with a stable internet connection and a webcam. The exams combine multiple-choice questions, coding challenges, and practical assignments to thoroughly assess your skills.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-indigo-600 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Choose a certification that aligns with your career goals and take the next step toward professional recognition and growth.
          </p>
          <a 
            href="#certifications" 
            className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Browse Certifications
          </a>
        </div>
      </div>
    </div>
  );
}
