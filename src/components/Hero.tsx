import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import image from 'url:./src/assets/photo.jpg'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div 
        ref={heroRef}
        className="container mx-auto max-w-7xl flex flex-col items-center opacity-0 translate-y-4 transition-all duration-700 ease-out"
      >
        <div className="mb-12 relative">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-portfolio-highlight relative z-10">
            <img 
              src={image}
              alt="Nitin Mehra" 
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-blue via-portfolio-highlight to-portfolio-blue animate-gradient-border"
            style={{ 
              backgroundSize: '200% 200%',
              padding: '4px',
              zIndex: 5 
            }}
          ></div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center mb-6 animate-fade-in-down">
          Hi, I'm <span className="text-portfolio-highlight">Nitin Mehra!</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-center max-w-4xl mb-12 leading-relaxed">
          I specialize in Python, Java, and C/C++, crafting intelligent solutions with AI. 
          With a keen eye for problem-solving and a talent for writing effective prompts, 
          I push the boundaries of what's possible. Beyond coding, I thrive on music, gaming, 
          and creative challenges. Let's build something extraordinary!
        </p>
        
        <div className="flex space-x-6 mb-16">
          <a 
            href="https://github.com/nitinmehra09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-portfolio-blue text-white hover:bg-portfolio-highlight transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://linkedin.com/in/nitinmehra09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-portfolio-blue text-white hover:bg-portfolio-highlight transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
        </div>
        
        <button
          onClick={handleScrollDown}
          className="animate-bounce-slow text-portfolio-highlight hover:text-portfolio-blue transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
