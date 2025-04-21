"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  author: string;
  authorVerified?: boolean;
  uploadDate: string;
  channelImage?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  language?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  duration,
  views,
  author,
  authorVerified = false,
  uploadDate,
  channelImage,
  difficulty = 'beginner',
  language = 'Hindi',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate dummy thumbnail based on educational categories
  const categories = ['java', 'web-dev', 'python', 'uiux', 'mern', 'ml', 'dsa', 'mobile'];
  const catIndex = parseInt(id) % categories.length;
  const dummyThumbnail = `/thumbnails/${categories[catIndex]}.jpg`;
  const dummyChannel = `/creators/avatar-${(parseInt(id) % 5) + 1}.jpg`;
  
  // Color for difficulty badge
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    intermediate: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  return (
    <motion.div 
      className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800/40 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: parseInt(id) * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/video/${id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={dummyThumbnail}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110 filter brightness-90' : 'scale-100'}`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Language badge */}
          <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 dark:bg-black/70 text-xs font-medium rounded-md flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>{language}</span>
          </div>
          
          {/* Duration badge with modern design */}
          <div className="absolute bottom-2 right-2 bg-black/80 dark:bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md font-medium">
            {duration}
          </div>
          
          {/* Difficulty badge */}
          <div className={`absolute bottom-2 left-2 px-2 py-1 text-xs font-medium rounded-md ${difficultyColors[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </div>
          
          {/* Play button overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div 
              className="w-12 h-12 rounded-full bg-indigo-600 bg-opacity-90 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
      
      <div className="p-3">
        <div className="flex gap-3">
          {/* Channel avatar with Indian-inspired design */}
          <Link href={`/creator/${author.toLowerCase().replace(/\s+/g, '-')}`} className="flex-shrink-0">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-200">
              <Image
                src={channelImage || dummyChannel}
                alt={author}
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </Link>
          
          <div className="flex-1 min-w-0">
            <Link href={`/video/${id}`}>
              <h3 className="font-medium line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                {title}
              </h3>
            </Link>
            
            <Link href={`/creator/${author.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center mt-1">
              <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {author}
              </span>
              
              {authorVerified && (
                <svg className="w-3.5 h-3.5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </Link>
            
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center">
              <span>{views.toLocaleString()} views</span>
              <span className="mx-1">•</span>
              <span>{uploadDate}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
