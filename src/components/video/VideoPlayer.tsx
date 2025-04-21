"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('1080p');
  const [volume, setVolume] = useState(100);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  
  // In a real implementation, this would use an actual video player library
  const startPlayback = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(true);
      
      // Start progress simulation
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.5;
        });
      }, 500);
    }, 1500);
  };
  
  const togglePlayback = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (progress === 100) setProgress(0);
      startPlayback();
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };
  
  const formatTime = (percentage: number) => {
    // Simulate a 2-hour video
    const totalSeconds = 7200 * (percentage / 100);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full relative aspect-video bg-black rounded-xl overflow-hidden group">
      {/* Video/Thumbnail Display */}
      {!isPlaying ? (
        <div className="absolute inset-0">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button 
              onClick={startPlayback}
              className="w-20 h-20 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors"
              aria-label="Play video"
            >
              <svg className="w-8 h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          {/* This would be an actual video element in a real implementation */}
          <p className="text-lg text-white">Video is playing...</p>
          
          {/* Simulated loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      )}
      
      {/* Video Controls - show on hover or when playing */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${(showControls || !isPlaying) ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer">
          <div 
            className="h-full bg-indigo-600 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause button */}
            <button 
              onClick={togglePlayback}
              className="text-white hover:text-indigo-400 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            {/* Volume control */}
            <div className="flex items-center space-x-2">
              <button 
                className="text-white hover:text-indigo-400 transition-colors"
                aria-label="Mute"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </button>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume} 
                onChange={handleVolumeChange} 
                className="w-20 accent-indigo-600"
              />
            </div>
            
            {/* Time display */}
            <div className="text-white text-sm">
              {formatTime(progress)} / {formatTime(100)}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Quality selector */}
            <div className="relative group">
              <button className="text-white hover:text-indigo-400 transition-colors text-sm">
                {currentQuality} <span className="text-xs">▼</span>
              </button>
              <div className="absolute bottom-full right-0 mb-2 bg-gray-900 rounded-md py-1 hidden group-hover:block">
                {['480p', '720p', '1080p', '1440p'].map(quality => (
                  <button 
                    key={quality}
                    onClick={() => setCurrentQuality(quality)}
                    className={`block px-4 py-1 text-sm hover:bg-gray-800 ${quality === currentQuality ? 'text-indigo-400' : 'text-white'}`}
                  >
                    {quality}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Fullscreen button */}
            <button 
              className="text-white hover:text-indigo-400 transition-colors"
              aria-label="Fullscreen"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
