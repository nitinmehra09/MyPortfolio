import React, { useEffect, useRef } from 'react';
import SectionTitle from './common/SectionTitle';
import { Award, Calendar, Building } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  achievement?: string;
  icon: React.ReactNode;
}

const Certifications: React.FC = () => {
  const certRef = useRef<HTMLDivElement>(null);

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

    if (certRef.current) {
      observer.observe(certRef.current);
    }

    return () => {
      if (certRef.current) {
        observer.unobserve(certRef.current);
      }
    };
  }, []);

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "March 2023",
      achievement: "Top 5% of participants",
      icon: <Award className="text-portfolio-highlight" size={24} />
    },
    {
      id: 2,
      title: "Java Programming Masterclass",
      issuer: "Udemy",
      date: "August 2023",
      icon: <Award className="text-portfolio-highlight" size={24} />
    },
    {
      id: 3,
      title: "AI Fundamentals",
      issuer: "Microsoft",
      date: "January 2024",
      achievement: "Perfect score",
      icon: <Award className="text-portfolio-highlight" size={24} />
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      issuer: "Indore Institute of Science and Technology",
      date: "November 2023",
      achievement: "Excellence Award",
      icon: <Award className="text-portfolio-highlight" size={24} />
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Certifications</SectionTitle>
        
        <div 
          ref={certRef}
          className="mt-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Certification
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Issuer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Achievement
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {certifications.map((cert) => (
                    <tr key={cert.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {cert.icon}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {cert.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Building size={16} className="mr-2 text-gray-400" />
                          <div className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-gray-400" />
                          <div className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {cert.achievement ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100">
                            {cert.achievement}
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500 dark:text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-portfolio-blue to-portfolio-highlight p-8 rounded-lg shadow-md text-white text-center">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="mb-8">I'm always looking to expand my knowledge and skills through certifications and courses.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-sm">Certifications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm">Online Courses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-sm">Years of Learning</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm">Learning Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;