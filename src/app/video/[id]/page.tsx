"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import VideoPlayer from '@/components/video/VideoPlayer';
import VideoInformation from '@/components/video/VideoInformation';
import VideoActions from '@/components/video/VideoActions';
import RelatedVideos from '@/components/video/RelatedVideos';
import CommentSection from '@/components/video/CommentSection';
import InstructorProfile from '@/components/video/InstructorProfile';
import CourseContent from '@/components/video/CourseContent';

// Mock data fetch function
const getVideoDetails = (id: string) => {
  // This would be an API call in a real app
  const categories = ['java', 'web-dev', 'python', 'uiux', 'mern', 'ml', 'dsa', 'mobile'];
  const catIndex = parseInt(id) % categories.length;
  const category = categories[catIndex];
  
  return {
    id,
    title: `Complete ${category.toUpperCase()} Course 2023 - From Beginner to Professional`,
    views: 450000 + Math.floor(Math.random() * 550000),
    likes: 24000 + Math.floor(Math.random() * 76000),
    uploadDate: '2023-11-15',
    description: `Master ${category} programming with this comprehensive course designed for beginners and intermediate developers. You'll learn everything from the basics to advanced concepts through hands-on projects and real-world examples.

This course covers:
• Core fundamentals and principles
• Advanced techniques and patterns
• Real-world project implementation
• Best practices and optimization
• Interview preparation and career guidance

Join thousands of students who have transformed their careers with this top-rated course on EduStream.`,
    videoUrl: `/api/videos/${id}`,
    thumbnail: `/images/thumbnails/${category}.jpg`,
    instructor: {
      id: "inst-" + (parseInt(id) % 10 + 1),
      name: ["Rahul Sharma", "Priya Patel", "Vikram Thapar", "Anjali Gupta"][parseInt(id) % 4],
      avatar: `/images/creators/avatar-${(parseInt(id) % 5) + 1}.jpg`,
      subscribers: (120000 + Math.floor(Math.random() * 880000)).toLocaleString(),
      verified: true,
      bio: "Experienced software engineer and educator with over 8 years of industry experience at top tech companies.",
      courses: 15 + parseInt(id) % 10
    },
    tags: ["programming", category, "education", "coding", "development"],
    language: ["Hindi", "English", "Hindi-English"][parseInt(id) % 3],
    difficulty: ["beginner", "intermediate", "advanced"][parseInt(id) % 3],
    chapters: Array(8).fill(0).map((_, i) => ({
      id: `ch-${i+1}`,
      title: `Chapter ${i+1}: ${["Introduction", "Core Concepts", "Advanced Topics", "Project Setup", "Implementation", "Best Practices", "Optimization", "Conclusion"][i]}`,
      duration: `${Math.floor(Math.random() * 40) + 10}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      completed: i < 3
    }))
  };
};

// Define proper interface for video data
interface VideoData {
  id: string;
  title: string;
  views: number;
  likes: number;
  uploadDate: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  instructor: {
    id: string;
    name: string;
    avatar: string;
    subscribers: string;
    verified: boolean;
    bio: string;
    courses: number;
  };
  tags: string[];
  language: string;
  difficulty: string;
  chapters: {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
  }[];
}

// Fixed: Using correct Next.js App Router prop type
export default function VideoPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params;
  const [video, setVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const videoData = getVideoDetails(id) as VideoData;
      setVideo(videoData);
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

  if (!video) {
    return notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Video player */}
            <VideoPlayer 
              videoUrl={video.videoUrl} 
              thumbnail={video.thumbnail}
              title={video.title}
            />
            
            {/* Video information */}
            <VideoInformation 
              title={video.title}
              views={video.views}
              uploadDate={video.uploadDate}
              tags={video.tags}
              language={video.language}
              difficulty={video.difficulty}
            />
            
            {/* Video actions */}
            <VideoActions 
              id={video.id}
              likes={video.likes}
            />
            
            {/* Video description */}
            <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <h3 className="font-medium text-lg mb-2">About this course</h3>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{video.description}</p>
            </div>
            
            {/* Instructor profile */}
            <InstructorProfile 
              instructor={video.instructor}
            />
            
            {/* Comments section */}
            <CommentSection 
              videoId={video.id}
            />
          </div>
          
          <div className="lg:col-span-1">
            {/* Course content */}
            <CourseContent 
              chapters={video.chapters}
              title={video.title}
            />
            
            {/* Related videos */}
            <RelatedVideos 
              currentVideoId={video.id}
              category={video.tags[1]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
