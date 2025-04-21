"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  videoId: string;
}

const getComments = (videoId: string) => {
  return Array(5).fill(0).map((_, i) => ({
    id: `comment-${videoId}-${i+1}`,
    user: {
      id: `user-${i+1}`,
      name: ["Arjun Singh", "Sneha Kapoor", "Rohan Mehta", "Neha Patel", "Amit Kumar"][i],
      avatar: `/images/avatars/user-${i+1}.jpg`,
    },
    content: [
      "This video was incredibly helpful! I've been struggling with this concept for a while, but your explanation made it so clear.",
      "Great tutorial! Could you please make a follow-up video on more advanced techniques?",
      "I implemented what you taught and it worked perfectly. Thanks for sharing your knowledge!",
      "The way you break down complex topics into simple steps is amazing. Subscribed!",
      "I've watched dozens of tutorials on this subject, but yours is by far the best. Clear, concise, and practical."
    ][i],
    timestamp: `${Math.floor(Math.random() * 11) + 1} ${['hours', 'days', 'weeks'][Math.floor(Math.random() * 3)]} ago`,
    likes: Math.floor(Math.random() * 120) + 5,
    isLiked: false,
    replies: i % 2 === 0 ? Array(Math.floor(Math.random() * 3) + 1).fill(0).map((_, j) => ({
      id: `reply-${videoId}-${i}-${j}`,
      user: {
        id: `user-reply-${j}`,
        name: ["Divya Sharma", "Karan Patel", "Sanya Gupta", "Mohit Verma"][j % 4],
        avatar: `/images/avatars/user-${(j % 4) + 6}.jpg`,
      },
      content: [
        "Thanks for your question! I'm planning to cover that in an upcoming video.",
        "I had the same issue and found that practicing with real projects helped a lot.",
        "Great point! I would also add that understanding the fundamentals is crucial.",
        "Exactly what I was looking for. Thank you for the detailed explanation!"
      ][j % 4],
      timestamp: `${Math.floor(Math.random() * 5) + 1} ${['hours', 'days'][Math.floor(Math.random() * 2)]} ago`,
      likes: Math.floor(Math.random() * 30) + 1,
      isLiked: false,
    })) : []
  }));
};

const CommentSection: React.FC<CommentSectionProps> = ({ videoId }) => {
  const [comments, setComments] = useState(getComments(videoId));
  const [newComment, setNewComment] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showReplies, setShowReplies] = useState<Record<string, boolean>>({});
  
  const totalComments = comments.reduce((total, comment) => total + 1 + comment.replies.length, 0);
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    // Add new comment (in a real app, this would be an API call)
    const newCommentObj = {
      id: `comment-${videoId}-${Date.now()}`,
      user: {
        id: 'current-user',
        name: 'You',
        avatar: '/images/avatars/user-default.jpg',
      },
      content: newComment,
      timestamp: 'Just now',
      likes: 0,
      isLiked: false,
      replies: []
    };
    
    setComments([newCommentObj, ...comments]);
    setNewComment('');
  };
  
  const toggleLike = (commentId: string, isReply = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked
                };
              }
              return reply;
            })
          };
        }
        return comment;
      }));
    } else {
      setComments(comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          };
        }
        return comment;
      }));
    }
  };
  
  const toggleReplies = (commentId: string) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };
  
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{totalComments} Comments</h3>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border-none bg-transparent text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-0"
          >
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
      
      {/* Comment form */}
      <form onSubmit={handleCommentSubmit} className="mb-8">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/avatars/user-default.jpg"
              alt="Your avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          
          <div className="flex-1">
            <textarea 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              rows={3}
            />
            
            <div className="mt-2 flex justify-end">
              <button 
                type="submit"
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </form>
      
      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 dark:text-white mr-2">{comment.user.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{comment.timestamp}</span>
                </div>
                
                <p className="mt-1 text-gray-700 dark:text-gray-300">{comment.content}</p>
                
                <div className="mt-2 flex items-center space-x-4">
                  <button 
                    onClick={() => toggleLike(comment.id)}
                    className="flex items-center text-sm"
                  >
                    <svg className={`w-4 h-4 mr-1 ${comment.isLiked ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`} fill={comment.isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span className={`${comment.isLiked ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>{comment.likes}</span>
                  </button>
                  
                  <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Reply</span>
                  </button>
                </div>
                
                {/* Replies section */}
                {comment.replies.length > 0 && (
                  <>
                    <button 
                      onClick={() => toggleReplies(comment.id)}
                      className="mt-3 text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center"
                    >
                      <svg className={`w-4 h-4 mr-1 transition-transform ${showReplies[comment.id] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {showReplies[comment.id] ? 'Hide' : 'Show'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                    </button>
                    
                    {showReplies[comment.id] && (
                      <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={reply.user.avatar}
                                alt={reply.user.name}
                                width={32}
                                height={32}
                                className="object-cover"
                              />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center">
                                <span className="font-medium text-gray-900 dark:text-white mr-2">{reply.user.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{reply.timestamp}</span>
                              </div>
                              
                              <p className="mt-1 text-gray-700 dark:text-gray-300">{reply.content}</p>
                              
                              <div className="mt-2 flex items-center space-x-4">
                                <button 
                                  onClick={() => toggleLike(reply.id, true, comment.id)}
                                  className="flex items-center text-sm"
                                >
                                  <svg className={`w-4 h-4 mr-1 ${reply.isLiked ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`} fill={reply.isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                  </svg>
                                  <span className={`${reply.isLiked ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>{reply.likes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
