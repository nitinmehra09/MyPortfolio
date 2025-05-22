import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="relative text-center mb-16">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold relative inline-block pb-6">
        {children}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2">
          <div className="w-full h-full bg-gradient-to-r from-portfolio-blue via-portfolio-highlight to-portfolio-blue rounded-full animate-gradient-border"></div>
        </div>
      </h2>
    </div>
  );
};

export default SectionTitle;