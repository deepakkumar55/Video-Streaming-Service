import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedCertification {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  difficulty: string;
}

interface CertificationRelatedProps {
  certifications: RelatedCertification[];
}

const CertificationRelated: React.FC<CertificationRelatedProps> = ({ certifications }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4">Related Certifications</h3>
      
      <div className="space-y-4">
        {certifications.map((cert) => (
          <Link 
            key={cert.slug}
            href={`/certification/${cert.slug}`}
            className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors group"
          >
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} p-2 flex items-center justify-center mr-4 flex-shrink-0`}>
                <Image
                  src={cert.icon}
                  alt={cert.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.name}
                </h4>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                    {cert.description}
                  </p>
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs rounded-full whitespace-nowrap">
                    {cert.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/certifications"
          className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors"
        >
          View all certifications
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CertificationRelated;
