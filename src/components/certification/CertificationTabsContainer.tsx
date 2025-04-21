"use client";

import { useState } from 'react';
import CertificationTabs from './CertificationTabs';
import CertificationOverview from './CertificationOverview';
import CertificationRequirements from './CertificationRequirements';
import CertificationExam from './CertificationExam';
import CertificationCourses from './CertificationCourses';
import CertificationReviews from './CertificationReviews';

interface CertificationTabsContainerProps {
  certification: any; // You can replace with the proper type
}

export default function CertificationTabsContainer({ certification }: CertificationTabsContainerProps) {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <>
      {/* Certification tabs for navigation */}
      <CertificationTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
      
      {/* Tab content */}
      <div className="mt-6">
        {activeTab === 'overview' && (
          <CertificationOverview 
            description={certification.longDescription}
            skills={certification.skills}
            benefits={certification.benefits}
          />
        )}
        
        {activeTab === 'requirements' && (
          <CertificationRequirements 
            prerequisites={certification.prerequisites}
            examTopics={certification.examTopics}
          />
        )}
        
        {activeTab === 'exam' && (
          <CertificationExam 
            examFormat={certification.examFormat}
            passRate={certification.passRate}
            faqs={certification.faqs}
          />
        )}
        
        {activeTab === 'courses' && (
          <CertificationCourses 
            courses={certification.recommendedCourses}
          />
        )}
        
        {activeTab === 'reviews' && (
          <CertificationReviews 
            reviews={certification.reviews}
          />
        )}
      </div>
    </>
  );
}
