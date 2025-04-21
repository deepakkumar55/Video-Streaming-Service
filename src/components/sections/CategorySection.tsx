"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Education-focused categories with Indian context
const categories = [
  { name: 'All', slug: 'all', active: true },
  { name: 'Web Development', slug: 'web-dev' },
  { name: 'Data Structures', slug: 'dsa' },
  { name: 'Java', slug: 'java' },
  { name: 'Python', slug: 'python' },
  { name: 'MERN Stack', slug: 'mern' },
  { name: 'UI/UX Design', slug: 'uiux' },
  { name: 'Flutter', slug: 'flutter' },
  { name: 'Machine Learning', slug: 'ml' },
  { name: 'Placement Prep', slug: 'placement' },
  { name: 'DevOps', slug: 'devops' },
  { name: 'Cloud Computing', slug: 'cloud' },
];

const CategorySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="py-3 px-4 overflow-hidden">
      <div className="flex overflow-x-auto pb-3 scrollbar-hide gap-2 md:justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.slug}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all
            ${category.slug === activeCategory
              ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.slug)}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
