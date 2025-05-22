import React, { useEffect, useRef } from 'react';
import SectionTitle from './common/SectionTitle';
import SkillBar from './common/SkillBar';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const programmingSkills = [
    { name: 'Python', percentage: 90 },
    { name: 'Java', percentage: 75 },
    { name: 'C', percentage: 65 },
    { name: 'C++', percentage: 70 },
  ];

  const toolsSkills = [
    { name: 'Git', percentage: 85 },
    { name: 'VS Code', percentage: 90 },
    { name: 'Linux', percentage: 70 },
    { name: 'ChatGPT', percentage: 95 },
  ];

  const interestSkills = [
    { name: 'AI', percentage: 85 },
    { name: 'Prompt Engineering', percentage: 90 },
    { name: 'Game Development', percentage: 70 },
    { name: 'Web Development', percentage: 65 },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>My Skills</SectionTitle>
        
        <div 
          ref={skillsRef}
          className="mt-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-blue dark:text-portfolio-highlight flex items-center">
                <span className="w-8 h-8 mr-2 flex items-center justify-center bg-portfolio-blue dark:bg-portfolio-highlight text-white rounded-full text-sm">
                  01
                </span>
                Programming Languages
              </h3>
              
              <div className="space-y-6">
                {programmingSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-blue dark:text-portfolio-highlight flex items-center">
                <span className="w-8 h-8 mr-2 flex items-center justify-center bg-portfolio-blue dark:bg-portfolio-highlight text-white rounded-full text-sm">
                  02
                </span>
                Tools & Frameworks
              </h3>
              
              <div className="space-y-6">
                {toolsSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-1 transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-blue dark:text-portfolio-highlight flex items-center">
                <span className="w-8 h-8 mr-2 flex items-center justify-center bg-portfolio-blue dark:bg-portfolio-highlight text-white rounded-full text-sm">
                  03
                </span>
                Interests & Specializations
              </h3>
              
              <div className="space-y-6">
                {interestSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-portfolio-blue to-portfolio-highlight p-8 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">Learning Path</h3>
            <p className="mb-6">My continuous learning journey in computer science and technology</p>
            
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 w-1 bg-white/30"></div>
              
              <div className="space-y-8">
                <div className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-white text-portfolio-blue flex items-center justify-center font-bold">
                    2021
                  </div>
                  <h4 className="text-lg font-semibold">Started Computer Science</h4>
                  <p className="text-white/80">Began my journey in Computer Science at Indore Institute of Science and Technology</p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-white text-portfolio-blue flex items-center justify-center font-bold">
                    2022
                  </div>
                  <h4 className="text-lg font-semibold">Python Mastery</h4>
                  <p className="text-white/80">Developed strong Python skills and began exploring AI applications</p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-white text-portfolio-blue flex items-center justify-center font-bold">
                    2023
                  </div>
                  <h4 className="text-lg font-semibold">Expanded Programming Skills</h4>
                  <p className="text-white/80">Added Java, C, and C++ to my programming toolkit</p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-white text-portfolio-blue flex items-center justify-center font-bold">
                    2024
                  </div>
                  <h4 className="text-lg font-semibold">AI & Prompt Engineering</h4>
                  <p className="text-white/80">Focused on AI applications and prompt engineering techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;