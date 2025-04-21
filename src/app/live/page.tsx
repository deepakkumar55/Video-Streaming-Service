"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data fetch function
const getLiveClasses = () => {
  // This would be an API call in a real app
  return {
    featuredWebinar: {
      id: 'webinar-system-design',
      title: 'System Design Interview Preparation Masterclass',
      instructor: {
        id: 'inst-2',
        name: 'Vikram Thapar',
        role: 'Senior Software Engineer @ Google',
        avatar: '/images/creators/avatar-3.jpg',
        verified: true
      },
      thumbnail: '/images/thumbnails/webinar-featured.jpg',
      dateTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
      duration: '3 hours',
      description: `Join this exclusive live masterclass to learn how to ace system design interviews at top tech companies. We'll cover scalability, database design, caching strategies, load balancing, and real-world case studies from FAANG interviews.

This is an interactive session where you can ask questions and get real-time feedback on your system design approaches. Limited seats available!`,
      attendees: 1547,
      price: 999,
      originalPrice: 1999,
      tags: ['System Design', 'Interview Prep', 'Career']
    },
    upcomingWebinars: [
      {
        id: 'webinar-react-advanced',
        title: 'Advanced React Patterns & Performance Optimization',
        instructor: {
          id: 'inst-1',
          name: 'Rahul Sharma',
          role: 'Frontend Specialist',
          avatar: '/images/creators/avatar-1.jpg',
          verified: true
        },
        thumbnail: '/images/thumbnails/react-1.jpg',
        dateTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days from now
        duration: '2 hours',
        attendees: 876,
        price: 499,
        originalPrice: 999,
        tags: ['React', 'Frontend', 'Performance']
      },
      {
        id: 'webinar-dsa',
        title: 'Data Structures & Algorithms: Problem Solving Session',
        instructor: {
          id: 'inst-4',
          name: 'Anjali Gupta',
          role: 'Tech Lead @ Amazon',
          avatar: '/images/creators/avatar-4.jpg',
          verified: true
        },
        thumbnail: '/images/thumbnails/dsa-1.jpg',
        dateTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days from now
        duration: '2.5 hours',
        attendees: 1203,
        price: 599,
        originalPrice: 1199,
        tags: ['DSA', 'Problem Solving', 'Interviews']
      },
      {
        id: 'webinar-python-ml',
        title: 'Python for Machine Learning: Zero to Hero',
        instructor: {
          id: 'inst-3',
          name: 'Rajesh Kumar',
          role: 'ML Engineer',
          avatar: '/images/creators/avatar-5.jpg',
          verified: true
        },
        thumbnail: '/images/thumbnails/python-2.jpg',
        dateTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
        duration: '3 hours',
        attendees: 678,
        price: 799,
        originalPrice: 1499,
        tags: ['Python', 'Machine Learning', 'AI']
      },
      {
        id: 'webinar-java-spring',
        title: 'Modern Java Development with Spring Boot',
        instructor: {
          id: 'inst-6',
          name: 'Priya Patel',
          role: 'Java Architect',
          avatar: '/images/creators/avatar-2.jpg',
          verified: false
        },
        thumbnail: '/images/thumbnails/java-3.jpg',
        dateTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
        duration: '2 hours',
        attendees: 456,
        price: 599,
        originalPrice: 1199,
        tags: ['Java', 'Spring Boot', 'Backend']
      }
    ],
    pastRecordings: [
      {
        id: 'recording-react-hooks',
        title: 'Mastering React Hooks & Context API',
        instructor: {
          id: 'inst-1',
          name: 'Rahul Sharma',
          avatar: '/images/creators/avatar-1.jpg',
          verified: true
        },
        thumbnail: '/images/thumbnails/react-2.jpg',
        duration: '1:45:30',
        views: 12540,
        date: '2 weeks ago',
        tags: ['React', 'Hooks', 'Context API']
      },
      {
        id: 'recording-nodejs',
        title: 'Building Scalable APIs with Node.js',
        instructor: {
          id: 'inst-5',
          name: 'Rohan Mehta',
          avatar: '/images/creators/avatar-5.jpg',
          verified: true
        },
        thumbnail: '/images/thumbnails/mern-1.jpg',
        duration: '2:10:15',
        views: 8765,
        date: '3 weeks ago',
        tags: ['Node.js', 'API', 'Backend']
      },
      {
        id: 'recording-python-ds',
        title: 'Data Science Fundamentals with Python',
        instructor: {
          id: 'inst-3',
          name: 'Rajesh Kumar',
          avatar: '/images/creators/avatar-3.jpg',
          verified: true
        },
        thumbnail: '/images/thumbnails/python-1.jpg',
        duration: '2:35:20',
        views: 15230,
        date: '1 month ago',
        tags: ['Python', 'Data Science', 'Machine Learning']
      }
    ],
    topicTags: [
      'All Topics',
      'Frontend',
      'Backend',
      'DevOps',
      'Data Science',
      'Machine Learning',
      'Mobile Development',
      'System Design',
      'Interview Prep',
      'Career'
    ]
  };
};

export default function LiveClassesPage() {
  const [liveData, setLiveData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All Topics');
  
  useEffect(() => {
    try {
      const data = getLiveClasses();
      setLiveData(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch live classes data:', error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!liveData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We couldn't load the live classes data. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short',
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      {/* Live classes header banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Live Interactive Classes</h1>
            <p className="text-lg text-purple-100 mb-8">
              Learn directly from industry experts in real-time with interactive 
              Q&A sessions and coding workshops
            </p>
            
            <div className="relative mx-auto max-w-2xl">
              <input 
                type="text" 
                placeholder="Search for live classes..." 
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
        {/* Featured upcoming webinar */}
        <div id="featured" className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Webinar image - 2 columns on lg */}
            <div className="lg:col-span-2 relative">
              <div className="aspect-[16/9] lg:aspect-auto lg:h-full relative">
                <Image
                  src={liveData.featuredWebinar.thumbnail}
                  alt={liveData.featuredWebinar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Featured badge */}
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  FEATURED WEBINAR
                </div>
                
                {/* Live date countdown */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  {formatDate(liveData.featuredWebinar.dateTime)}
                </div>
              </div>
            </div>
            
            {/* Webinar details - 3 columns on lg */}
            <div className="lg:col-span-3 p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {liveData.featuredWebinar.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {liveData.featuredWebinar.title}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={liveData.featuredWebinar.instructor.avatar}
                    alt={liveData.featuredWebinar.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {liveData.featuredWebinar.instructor.name}
                    </span>
                    {liveData.featuredWebinar.instructor.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {liveData.featuredWebinar.instructor.role}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                {liveData.featuredWebinar.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Date & Time</div>
                  <div className="font-medium">{formatDate(liveData.featuredWebinar.dateTime)}</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                  <div className="font-medium">{liveData.featuredWebinar.duration}</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Attendees</div>
                  <div className="font-medium">{liveData.featuredWebinar.attendees.toLocaleString()}+ registered</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Language</div>
                  <div className="font-medium">English, Hindi</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{liveData.featuredWebinar.price}</span>
                    <span className="ml-2 text-lg text-gray-500 dark:text-gray-400 line-through">₹{liveData.featuredWebinar.originalPrice}</span>
                    <span className="ml-2 text-sm text-green-600 dark:text-green-400 font-medium">
                      Save {Math.round(((liveData.featuredWebinar.originalPrice - liveData.featuredWebinar.price) / liveData.featuredWebinar.originalPrice) * 100)}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Includes lifetime access to recording
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 sm:flex-none px-6 py-2.5 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:bg-transparent dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/20 font-medium rounded-lg transition-colors">
                    Add to Wishlist
                  </button>
                  <Link 
                    href={`/live/${liveData.featuredWebinar.id}`}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Topic filters */}
        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <h2 className="text-xl font-bold mr-4">Browse by Topic:</h2>
            <div className="flex flex-wrap gap-2">
              {liveData.topicTags.map((tag: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeFilter === tag
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Grid of upcoming webinars */}
        <div className="mt-8" id="upcoming">
          <h2 className="text-2xl font-bold mb-6">
            Upcoming Live Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveData.upcomingWebinars.map((webinar) => (
              <Link
                key={webinar.id}
                href={`/live/${webinar.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={webinar.thumbnail}
                    alt={webinar.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Date badge */}
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {formatDate(webinar.dateTime)}
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {webinar.duration}
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {webinar.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {webinar.tags.length > 2 && (
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                        +{webinar.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2">
                    {webinar.title}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                      <Image
                        src={webinar.instructor.avatar}
                        alt={webinar.instructor.name}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {webinar.instructor.name}
                    </span>
                    {webinar.instructor.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {webinar.attendees.toLocaleString()}+ registered
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-bold text-gray-900 dark:text-white">₹{webinar.price}</span>
                      <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 line-through">₹{webinar.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Past recordings */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Watch Past Recordings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveData.pastRecordings.map((recording) => (
              <Link
                key={recording.id}
                href={`/video/${recording.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={recording.thumbnail}
                    alt={recording.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {recording.duration}
                  </div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2">
                    {recording.title}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                      <Image
                        src={recording.instructor.avatar}
                        alt={recording.instructor.name}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {recording.instructor.name}
                    </span>
                    {recording.instructor.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>{recording.views.toLocaleString()} views</span>
                    <span className="mx-2">•</span>
                    <span>{recording.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/video?filter=webinar-recordings"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              View All Recordings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
