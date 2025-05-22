import React, { useEffect, useRef } from 'react';
import { Calendar, Mail, MapPin } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>About Me</SectionTitle>
        
        <div 
          ref={aboutRef}
          className="mt-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4 text-portfolio-blue dark:text-portfolio-highlight">
                Computer Science Student
              </h3>
              
              <p className="mb-4 leading-relaxed dark:text-gray-300">
                My name is Nitin Mehra, and I am a dedicated student at Indore Institute of Science and Technology. 
                I have specialized in Python, developing a strong command over the language, and possess a 
                foundational understanding of C and C++.
              </p>
              
              <p className="mb-4 leading-relaxed dark:text-gray-300">
                As a quick learner, I excel at adapting to new challenges and continuously expanding my knowledge. 
                Outside of academics, I am passionate about music and gaming, with a particular love for PC games, 
                which fuel my creativity and problem-solving abilities.
              </p>
              
              <div className="mt-8">
                <a 
                  href="#contact"
                  className="px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-portfolio-highlight transition-colors duration-300 inline-block"
                >
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-blue dark:text-portfolio-highlight">
                Personal Details
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="p-2 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-md text-portfolio-blue dark:text-portfolio-highlight mr-3">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium dark:text-gray-200">nitinmehra2k4@gmail.com</p>
                  </div>
                </li>
                
                <li className="flex items-center">
                  <span className="p-2 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-md text-portfolio-blue dark:text-portfolio-highlight mr-3">
                    <Calendar size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium dark:text-gray-200">+91 9630426686</p>
                  </div>
                </li>
                
                <li className="flex items-center">
                  <span className="p-2 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-md text-portfolio-blue dark:text-portfolio-highlight mr-3">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium dark:text-gray-200">Indore, India</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-medium mb-4 dark:text-gray-200">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-full text-sm text-portfolio-blue dark:text-portfolio-highlight">
                    🎧 Music
                  </span>
                  <span className="px-3 py-1 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-full text-sm text-portfolio-blue dark:text-portfolio-highlight">
                    🎮 Gaming
                  </span>
                  <span className="px-3 py-1 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-full text-sm text-portfolio-blue dark:text-portfolio-highlight">
                    💻 Coding
                  </span>
                  <span className="px-3 py-1 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-full text-sm text-portfolio-blue dark:text-portfolio-highlight">
                    🤖 AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;