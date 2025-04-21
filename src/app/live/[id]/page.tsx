"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import LivePlayer from '@/components/live/LivePlayer';
import LiveChat from '@/components/live/LiveChat';
import LiveInstructorBio from '@/components/live/LiveInstructorBio';
import LiveAttendees from '@/components/live/LiveAttendees';
import LiveResources from '@/components/live/LiveResources';
import LiveInfo from '@/components/live/LiveInfo';

// Mock data fetch function
const getLiveWebinarDetails = (id: string) => {
  // This would be an API call in a real app
  const topics = ['react', 'python', 'dsa', 'systemdesign', 'mern', 'datascience'];
  const topicIndex = parseInt(id) % topics.length;
  const topic = topics[topicIndex];
  
  const isLive = parseInt(id) % 3 === 0; // Every third webinar is live
  const startsIn = isLive ? 0 : Math.floor(Math.random() * 10080) + 1; // Minutes until start (up to 1 week)
  
  return {
    id,
    title: `${topic.toUpperCase()} Masterclass: ${['Advanced Patterns', 'Interview Preparation', 'Deep Dive', 'Zero to Expert', 'Professional Techniques'][topicIndex % 5]}`,
    status: isLive ? 'live' : 'upcoming',
    startsAt: isLive ? new Date().toISOString() : new Date(Date.now() + startsIn * 60 * 1000).toISOString(),
    scheduledEndTime: isLive ? new Date(Date.now() + 90 * 60 * 1000).toISOString() : new Date(Date.now() + (startsIn + 120) * 60 * 1000).toISOString(),
    currentViewers: isLive ? Math.floor(Math.random() * 2000) + 500 : 0,
    registeredAttendees: Math.floor(Math.random() * 5000) + 1000,
    description: `Join this comprehensive ${topic} masterclass where you'll learn advanced techniques, best practices, and real-world applications. 

This interactive session is designed for developers looking to level up their skills and stay ahead in their career. You'll have the opportunity to ask questions, participate in discussions, and get feedback on your approach to solving complex problems.

By the end of this webinar, you'll have a deeper understanding of ${topic} and practical skills that you can immediately apply in your projects.`,
    topics: [
      `Advanced ${topic} concepts and patterns`,
      'Real-world problem-solving techniques',
      'Performance optimization strategies',
      'Industry best practices',
      'Career advancement tips'
    ],
    thumbnail: `/images/thumbnails/${topic}-webinar.jpg`,
    streamUrl: `/api/live/${id}`,
    price: Math.floor(Math.random() * 4) === 0 ? 0 : 499 + Math.floor(Math.random() * 500), // Some are free
    instructor: {
      id: `inst-${Math.floor(Math.random() * 5) + 1}`,
      name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta", "Rajesh Kumar"][Math.floor(Math.random() * 5)],
      avatar: `/images/creators/avatar-${Math.floor(Math.random() * 5) + 1}.jpg`,
      title: `Senior ${topic.charAt(0).toUpperCase() + topic.slice(1)} Developer`,
      company: ["Google", "Microsoft", "Amazon", "Flipkart", "Infosys"][Math.floor(Math.random() * 5)],
      bio: `Experienced ${topic} developer with over 8 years of industry experience. Passionate about teaching and helping others advance their careers in tech.`,
      social: {
        twitter: 'https://twitter.com/example',
        linkedin: 'https://linkedin.com/in/example',
        github: 'https://github.com/example'
      },
      verified: true
    },
    resources: [
      { name: 'Presentation Slides', type: 'pdf', url: '#', isPremium: false },
      { name: 'Code Samples', type: 'github', url: '#', isPremium: false },
      { name: 'Exercise Files', type: 'zip', url: '#', isPremium: true },
      { name: 'Cheat Sheet', type: 'pdf', url: '#', isPremium: true }
    ],
    attendees: Array(6).fill(0).map((_, i) => ({
      id: `user-${i+1}`,
      name: ["Ankit Gupta", "Meera Sharma", "Sanjay Patel", "Deepa Singh", "Arjun Reddy", "Kavita Mehta"][i],
      avatar: `/images/avatars/user-${i+1}.jpg`,
      role: ["Software Engineer", "Student", "Product Manager", "Designer", "Data Scientist", "Tech Lead"][i],
      joinedAt: new Date(Date.now() - Math.floor(Math.random() * 60) * 60 * 1000).toISOString()
    }))
  };
};

interface LiveWebinarPageProps {
  params: {
    id: string;
  };
}

export default function LiveWebinarPage({ params }: LiveWebinarPageProps) {
  const { id } = params;
  const [webinar, setWebinar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);
  
  useEffect(() => {
    try {
      const webinarData = getLiveWebinarDetails(id);
      setWebinar(webinarData);
      setLoading(false);
    } catch (error) {
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

  if (!webinar) {
    return notFound();
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };
  
  // Calculate time until webinar starts
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const startTime = new Date(webinar.startsAt).getTime();
    const timeRemaining = startTime - now;
    
    if (timeRemaining <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };
  
  const timeRemaining = calculateTimeRemaining();

  const handleRegister = () => {
    // In a real app, you would make an API call to register
    setRegistered(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Live player or countdown */}
            {webinar.status === 'live' ? (
              <LivePlayer 
                streamUrl={webinar.streamUrl} 
                title={webinar.title}
                viewerCount={webinar.currentViewers}
              />
            ) : (
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">{webinar.title}</h2>
                <p className="mb-6">Starts on {formatDate(webinar.startsAt)}</p>
                
                <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-3xl font-bold">{timeRemaining.days}</div>
                    <div className="text-xs uppercase">Days</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-3xl font-bold">{timeRemaining.hours}</div>
                    <div className="text-xs uppercase">Hours</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-3xl font-bold">{timeRemaining.minutes}</div>
                    <div className="text-xs uppercase">Minutes</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-3xl font-bold">{timeRemaining.seconds}</div>
                    <div className="text-xs uppercase">Seconds</div>
                  </div>
                </div>
                
                <Image 
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  width={640}
                  height={360}
                  className="rounded-lg mx-auto mb-6"
                />
                
                {registered ? (
                  <div className="bg-green-600 py-3 px-6 rounded-lg inline-block">
                    You're registered! We'll send you a reminder.
                  </div>
                ) : (
                  <button 
                    onClick={handleRegister}
                    className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Register for this Webinar {webinar.price > 0 ? `- ₹${webinar.price}` : '- Free'}
                  </button>
                )}
              </div>
            )}
            
            {/* Webinar information */}
            <LiveInfo 
              title={webinar.title}
              description={webinar.description}
              topics={webinar.topics}
              startsAt={webinar.startsAt}
              scheduledEndTime={webinar.scheduledEndTime}
              registeredAttendees={webinar.registeredAttendees}
            />
            
            {/* Instructor bio */}
            <LiveInstructorBio 
              instructor={webinar.instructor}
            />
          </div>
          
          <div className="lg:col-span-1">
            {webinar.status === 'live' && (
              <>
                {/* Live chat */}
                <LiveChat webinarId={webinar.id} />
                
                {/* Live attendees */}
                <LiveAttendees 
                  attendees={webinar.attendees}
                  totalCount={webinar.currentViewers}
                />
              </>
            )}
            
            {/* Resources */}
            <LiveResources 
              resources={webinar.resources}
              isRegistered={registered || webinar.status === 'live'}
            />
            
            {/* Other webinars */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Webinars</h3>
              <div className="space-y-4">
                {Array(3).fill(0).map((_, i) => (
                  <Link 
                    key={i}
                    href={`/live/${parseInt(id) + i + 1}`}
                    className="block hover:bg-gray-50 dark:hover:bg-gray-750 p-3 rounded-lg transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      {["React Deep Dive", "Advanced Python", "System Design Interview Prep"][i]}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {[2, 5, 10][i]} days from now
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {Math.floor(Math.random() * 300) + 200} registered
                      </span>
                      <span className="mx-2">•</span>
                      <span className={webinar.price > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-green-600 dark:text-green-400'}>
                        {webinar.price > 0 ? `₹${webinar.price}` : 'Free'}
                      </span>
                    </div>
                  </Link>
                ))}
                
                <Link 
                  href="/live"
                  className="block text-center text-indigo-600 dark:text-indigo-400 hover:underline mt-4"
                >
                  View all upcoming webinars →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
