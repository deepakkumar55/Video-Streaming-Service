import React from 'react';
import Link from 'next/link';

interface CategoryTagProps {
  name: string;
  slug: string;
  active?: boolean;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ name, slug, active = false }) => {
  return (
    <Link 
      href={`/category/${slug}`}
      className={`inline-block px-4 py-2 rounded-full text-sm whitespace-nowrap 
      ${active 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200'
      }`}
    >
      {name}
    </Link>
  );
};

export default CategoryTag;
