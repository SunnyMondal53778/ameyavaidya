import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Finance Dashboard UI',
      category: 'dashboard',
      image: 'https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'A comprehensive financial analytics dashboard with real-time data visualization.',
      link: '#',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3927392/pexels-photo-3927392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Mobile application for tracking fitness goals, nutrition, and health metrics.',
      link: '#',
    },
    {
      id: 3,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Complete online shopping experience with product catalog and checkout flow.',
      link: '#',
    },
    {
      id: 4,
      title: 'Task Management System',
      category: 'dashboard',
      image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Project management tool with task tracking, assignments, and progress visualization.',
      link: '#',
    },
    {
      id: 5,
      title: 'Travel Booking Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/3944294/pexels-photo-3944294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Travel website with booking system for flights, hotels, and experiences.',
      link: '#',
    },
    {
      id: 6,
      title: 'Social Media App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Social networking application with user profiles, feeds, and messaging.',
      link: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'dashboard', name: 'Dashboards' },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">My Projects</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore my latest work across various design disciplines and industries.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-500 bg-opacity-0 group-hover:bg-opacity-70 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <a
                      href={project.link}
                      className="bg-white text-primary-500 p-3 rounded-full"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                      {project.category === 'web' ? 'Web Design' : 
                       project.category === 'mobile' ? 'Mobile App' : 'Dashboard'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">{project.title}</h3>
                  <p className="text-neutral-600 text-sm">{project.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;