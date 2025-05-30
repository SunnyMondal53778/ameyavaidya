import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="inline-block border border-secondary-500 rounded-md px-3 py-1 mb-4">
              <p className="text-neutral-700 font-medium text-sm">👋 Hello There!</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
              I'm <span className="text-secondary-500">Ameya Vaidya</span>,
              <div className="mt-2">Product Designer</div>
              <div className="mt-2">Based in USA.</div>
            </h1>
            
            <p className="text-neutral-600 mb-8 max-w-lg">
              I'm an experienced Product Designer with 8+ years in the field, collaborating with various companies and startups.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                href="#projects"
                icon={<Play size={16} />}
                className="shadow-lg shadow-secondary-500/20"
              >
                View My Portfolio
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                href="#contact"
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-[80%] h-[80%] rounded-full bg-secondary-500" />
              
              <img 
                src="/images/ameya-profile.jpg" 
                alt="Ameya Vaidya - Professional Portrait" 
                className="relative z-10 rounded-md object-contain object-center max-h-[500px] w-full"
              />
              
              <div className="absolute bottom-4 left-4 z-20">
                <Badge color="primary" size="lg">Product Designer</Badge>
              </div>
              
              <div className="absolute top-6 right-6 z-20">
                <Badge color="secondary" size="lg">UI/UX Designer</Badge>
              </div>
              
              <motion.div 
                className="absolute -right-5 -top-5 z-20 bg-primary-500 text-white p-3 rounded-full flex items-center justify-center w-20 h-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-xs font-medium text-center">
                  <div>HIRE ME</div>
                  <div>★ TODAY ★</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-16 bg-secondary-500 py-4 overflow-hidden">
        <div className="flex justify-around items-center flex-wrap md:flex-nowrap">
          <div className="service-item px-6 py-2 flex items-center space-x-2">
            <span className="text-primary-500 text-xl">★</span>
            <span className="font-semibold text-primary-800">App Design</span>
          </div>
          
          <div className="service-item px-6 py-2 flex items-center space-x-2">
            <span className="text-primary-500 text-xl">★</span>
            <span className="font-semibold text-primary-800">Website Design</span>
          </div>
          
          <div className="service-item px-6 py-2 flex items-center space-x-2">
            <span className="text-primary-500 text-xl">★</span>
            <span className="font-semibold text-primary-800">Dashboard</span>
          </div>
          
          <div className="service-item px-6 py-2 flex items-center space-x-2">
            <span className="text-primary-500 text-xl">★</span>
            <span className="font-semibold text-primary-800">Wireframing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;