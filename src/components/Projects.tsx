import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './common/SectionTitle';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  category: string;
}

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Image Generator",
      description: "A Python application that generates images using AI models.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "AI", "Computer Vision"],
      github: "https://github.com/nitinmehra09/ai-image-generator",
      category: "ai"
    },
    {
      id: 2,
      title: "Student Management System",
      description: "A Java application for managing student records.",
      image: "https://images.pexels.com/photos/5428160/pexels-photo-5428160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Java", "Swing", "MySQL"],
      github: "https://github.com/nitinmehra09/student-management",
      category: "java"
    },
    {
      id: 3,
      title: "C++ Data Structures",
      description: "Implementation of various data structures in C++.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["C++", "Data Structures", "Algorithms"],
      github: "https://github.com/nitinmehra09/cpp-data-structures",
      category: "cpp"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A Python application that fetches and displays weather forecasts.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "API", "Weather"],
      github: "https://github.com/nitinmehra09/weather-app",
      demo: "https://weather.nitinmehra.com",
      category: "python"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>My Projects</SectionTitle>
        
        <div className="flex justify-center mb-12 mt-8">
          <div className="bg-white dark:bg-gray-700 p-1 rounded-lg shadow-md inline-flex">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('python')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'python' 
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Python
            </button>
            <button 
              onClick={() => setFilter('java')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'java' 
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Java
            </button>
            <button 
              onClick={() => setFilter('cpp')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'cpp' 
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              C/C++
            </button>
            <button 
              onClick={() => setFilter('ai')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'ai' 
                  ? 'bg-portfolio-blue text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              AI
            </button>
          </div>
        </div>
        
        <div 
          ref={projectsRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-blue dark:text-portfolio-highlight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-full text-xs text-portfolio-blue dark:text-portfolio-highlight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-portfolio-blue dark:text-portfolio-highlight hover:underline"
                    >
                      <Github size={18} className="mr-1" />
                      <span>View Code</span>
                    </a>
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-portfolio-blue dark:text-portfolio-highlight hover:underline"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/nitinmehra09"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-portfolio-highlight transition-colors duration-300 inline-flex items-center"
            >
              <Github size={20} className="mr-2" />
              <span>View More Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;