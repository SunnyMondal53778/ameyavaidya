import React from 'react';
import { Monitor, Smartphone, Layout, PenTool } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <AnimatedSection 
      delay={delay} 
      className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex flex-col items-start">
        <div className="p-3 bg-primary-500 text-white rounded-md mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-neutral-800">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with beautiful interfaces that prioritize user needs.',
      icon: <PenTool size={24} />,
    },
    {
      title: 'Web Design',
      description: 'Designing responsive websites that look great on all devices and provide seamless user experiences.',
      icon: <Monitor size={24} />,
    },
    {
      title: 'Mobile App Design',
      description: 'Crafting mobile applications with intuitive navigation and engaging interfaces for iOS and Android.',
      icon: <Smartphone size={24} />,
    },
    {
      title: 'Dashboard Design',
      description: 'Building complex data visualization interfaces that make information clear and actionable.',
      icon: <Layout size={24} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">My Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            I offer a range of design services to help businesses create impactful digital products.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;