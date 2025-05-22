import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-portfolio-blue dark:text-portfolio-highlight">
              Nitin Mehra
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Computer Science student specializing in Python, Java, and C/C++, with a passion for AI.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/nitinmehra09" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-highlight transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/nitinmehra09" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-highlight transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-portfolio-blue dark:text-portfolio-highlight">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-portfolio-highlight transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-portfolio-blue dark:text-portfolio-highlight">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email:</span> nitinmehra2k4@gmail.com
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Phone:</span> +91 9630426686
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Location:</span> Indore, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Copyright &copy; {year} Nitin Mehra. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex items-center justify-center">
            Made with 
            <Heart size={16} className="text-red-500 mx-1" fill="currentColor" /> 
            and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;