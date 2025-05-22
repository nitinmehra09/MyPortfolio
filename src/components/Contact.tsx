import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './common/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div 
          ref={contactRef}
          className="mt-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-blue dark:text-portfolio-highlight">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <span className="p-2 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-md text-portfolio-blue dark:text-portfolio-highlight">
                      <Mail size={20} />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      nitinmehra2k4@gmail.com
                    </p>
                    <a 
                      href="mailto:nitinmehra2k4@gmail.com" 
                      className="mt-2 inline-block text-sm text-portfolio-blue dark:text-portfolio-highlight hover:underline"
                    >
                      Send an email
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <span className="p-2 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-md text-portfolio-blue dark:text-portfolio-highlight">
                      <Phone size={20} />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      +91 9630426686
                    </p>
                    <a 
                      href="tel:+919630426686" 
                      className="mt-2 inline-block text-sm text-portfolio-blue dark:text-portfolio-highlight hover:underline"
                    >
                      Call me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <span className="p-2 bg-portfolio-blue/10 dark:bg-portfolio-highlight/20 rounded-md text-portfolio-blue dark:text-portfolio-highlight">
                      <MapPin size={20} />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Indore, Madhya Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/nitinmehra09" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-highlight transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/nitinmehra09" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-portfolio-blue text-white rounded-full hover:bg-portfolio-highlight transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-blue dark:text-portfolio-highlight">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-portfolio-highlight focus:border-portfolio-highlight dark:bg-gray-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-portfolio-highlight focus:border-portfolio-highlight dark:bg-gray-800 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-portfolio-highlight focus:border-portfolio-highlight dark:bg-gray-800 dark:text-white"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-portfolio-highlight transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  <span>Send Message</span>
                </button>
                
                {formStatus === 'success' && (
                  <div className="mt-4 p-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-md text-sm text-center">
                    Your message has been sent successfully!
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mt-4 p-2 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 rounded-md text-sm text-center">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;