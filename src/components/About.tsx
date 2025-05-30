import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, CheckCircle, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-secondary-500 p-3 rounded-md text-primary-800">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-neutral-800">{value}</div>
        <div className="text-sm text-neutral-600">{label}</div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const skills = [
    'UI/UX Design', 'Wireframing', 'Prototyping', 'User Research',
    'Design Systems', 'Figma', 'Adobe XD', 'Sketch',
    'Adobe Photoshop', 'Adobe Illustrator', 'HTML/CSS', 'Usability Testing'
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -z-10 -top-6 -left-6 w-[70%] h-[70%] bg-secondary-500 rounded-md"></div>
              <img
                src="/images/ameya-profile.jpg"
                alt="Ameya Vaidya - About Me"
                className="rounded-md relative z-10 w-full h-auto object-contain shadow-xl"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Stat 
                  icon={<Clock size={24} />} 
                  value="8+" 
                  label="Years Experience" 
                />
                <Stat 
                  icon={<Award size={24} />} 
                  value="15+" 
                  label="Awards Won" 
                />
                <Stat 
                  icon={<CheckCircle size={24} />} 
                  value="100+" 
                  label="Projects Completed" 
                />
                <Stat 
                  icon={<Briefcase size={24} />} 
                  value="50+" 
                  label="Happy Clients" 
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">About Me</h2>
            <p className="text-neutral-700 mb-6">
              I'm Ameya Vaidya, a passionate product designer with over 8 years of experience creating 
              user-centered digital experiences. I specialize in transforming complex problems into 
              intuitive, enjoyable interfaces.
            </p>
            <p className="text-neutral-700 mb-6">
              Throughout my career, I've collaborated with startups and established companies alike, 
              helping them build products that users love. My design process emphasizes research, 
              iteration, and continuous testing to ensure the final product truly meets user needs.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">My Skills</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 rounded-md text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;