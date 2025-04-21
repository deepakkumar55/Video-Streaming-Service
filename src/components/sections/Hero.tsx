import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Learning made simple with EduStream
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Access thousands of educational videos created by expert instructors. 
            Learn at your own pace, anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href="/browse" 
              variant="primary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Browse Courses
            </Button>
            <Button 
              href="/signup" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-3/4 bg-opacity-10 bg-contain bg-no-repeat bg-right-bottom hidden lg:block" 
           style={{backgroundImage: "url('/hero-pattern.svg')"}}></div>
    </section>
  );
};

export default Hero;
