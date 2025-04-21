"use client";

import React from 'react';
import VideoCard from '../ui/VideoCard';
import { motion } from 'framer-motion';

// Educational topics from Indian creators
const topics = [
  "Complete Java Programming Masterclass",
  "Master the MERN Stack: MongoDB, Express, React, Node",
  "Data Structures and Algorithms for Placement Preparation",
  "Complete Python Developer Course: Zero to Mastery",
  "UI/UX Design Fundamentals for Indian App Market",
  "React Native Mobile App Development",
  "Full Stack Web Development Bootcamp",
  "Machine Learning with Python - Complete Course",
  "DevOps for Beginners: Docker, Kubernetes & CI/CD",
  "Flutter App Development: Build Beautiful Mobile Apps",
  "JavaScript - From Fundamentals to Professional",
  "Advanced Java for Enterprise Applications",
  "DSA Interview Questions - FAANG Preparation",
  "Angular Complete Guide with TypeScript",
  "Mastering CSS: From Basics to Advanced",
  "Advanced React Patterns & Redux",
];

// Indian creator names
const creators = [
  "Rahul Sharma",
  "Priya Patel",
  "Vikram Thapar",
  "Anjali Gupta",
  "Rajesh Kumar",
  "Neha Singh",
  "Arnav Desai",
  "Kavita Reddy",
  "Sanjay Mehta",
  "Divya Malhotra",
];

// Generate video data
const generateVideoData = (category = 'all') => {
  return Array.from({ length: 12 }, (_, i) => {
    const id = (i + 1).toString();
    const authorIndex = i % creators.length;
    const topicIndex = i % topics.length;
    
    // Different views based on category to show variety
    const viewsMultiplier = category === 'trending' ? 5 : (category === 'recommended' ? 2 : 1);
    const views = Math.floor(50000 + Math.random() * 950000) * viewsMultiplier;
    
    // Determine video difficulty
    const difficulties = ['beginner', 'intermediate', 'advanced'] as const;
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    
    // Determine language
    const languages = ['Hindi', 'Hindi-English', 'English'];
    const language = languages[Math.floor(Math.random() * languages.length)];
    
    // Generate upload date
    const daysAgo = category === 'recent' ? 
      Math.floor(Math.random() * 7) + 1 : 
      Math.floor(Math.random() * 60) + 1;
    const uploadDate = daysAgo === 1 ? 
      '1 day ago' : 
      (daysAgo < 7 ? `${daysAgo} days ago` : 
      (daysAgo < 30 ? `${Math.floor(daysAgo/7)} weeks ago` : `${Math.floor(daysAgo/30)} months ago`));
    
    return {
      id,
      title: topics[topicIndex],
      thumbnail: `/thumbnails/video-${id}.jpg`,
      duration: `${Math.floor(Math.random() * 3) + 1}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}`,
      views,
      author: creators[authorIndex],
      authorVerified: Math.random() > 0.3, // 70% chance to be verified
      uploadDate,
      channelImage: `/creators/avatar-${(authorIndex % 5) + 1}.jpg`,
      difficulty,
      language,
    };
  });
};

interface VideoGridProps {
  category?: string;
}

const VideoGrid: React.FC<VideoGridProps> = ({ category = 'all' }) => {
  const videos = generateVideoData(category);
  
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </motion.div>
  );
};

export default VideoGrid;
