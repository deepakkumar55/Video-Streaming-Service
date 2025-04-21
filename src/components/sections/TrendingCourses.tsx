"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const courses = [
  {
    id: "mern-1",
    title: "MERN Stack Masterclass 2023",
    instructor: "Rahul Sharma",
    students: 45290,
    rating: 4.9,
    level: "All Levels",
    banner: "/courses/mern.jpg",
    language: "Hindi",
    price: "₹499",
    originalPrice: "₹3,499",
  },
  {
    id: "dsa-1",
    title: "DSA for FAANG Interviews",
    instructor: "Vikram Thapar",
    students: 38150,
    rating: 4.8,
    level: "Intermediate",
    banner: "/courses/dsa.jpg",
    language: "Hindi-English",
    price: "₹699",
    originalPrice: "₹4,999",
  },
  {
    id: "flutter-1",
    title: "Flutter Development Bootcamp",
    instructor: "Priya Patel",
    students: 29876,
    rating: 4.7,
    level: "Beginner",
    banner: "/courses/flutter.jpg",
    language: "Hindi",
    price: "₹399",
    originalPrice: "₹2,999",
  },
  {
    id: "java-1",
    title: "Complete Java Development",
    instructor: "Arnav Desai",
    students: 32423,
    rating: 4.8,
    level: "Beginner to Advanced",
    banner: "/courses/java.jpg",
    language: "Hindi-English",
    price: "₹599",
    originalPrice: "₹3,999",
  },
];

const TrendingCourses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="relative aspect-video">
            <Image
              src={course.banner}
              alt={course.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex justify-between items-end">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-md font-medium">
                  {course.language}
                </span>
                <div className="flex items-center bg-white/90 dark:bg-black/80 px-2 py-1 rounded-md">
                  <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-medium ml-1 text-gray-900 dark:text-white">
                    {course.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex-1 flex flex-col">
            <Link href={`/course/${course.id}`}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {course.title}
              </h3>
            </Link>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              by {course.instructor}
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <span>{course.level}</span>
              <span>•</span>
              <span>{course.students.toLocaleString()} students</span>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{course.price}</span>
                  <span className="ml-2 text-sm line-through text-gray-500">{course.originalPrice}</span>
                </div>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-md">
                  85% off
                </span>
              </div>
              
              <Link href={`/course/${course.id}`}>
                <motion.button 
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TrendingCourses;
