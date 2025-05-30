import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Inc.',
      testimonial: 'Ameya transformed our product with his exceptional design skills. He understood our vision perfectly and delivered beyond our expectations. His attention to detail and user-focused approach made all the difference.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateLabs',
      testimonial: `Working with Ameya was a game-changer for our startup. His designs not only looked beautiful but also significantly improved our user engagement metrics. He's collaborative, responsive, and truly cares about the product's success.`,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 3,
      name: 'Emily Roberts',
      role: 'Marketing Director',
      company: 'GrowthWave',
      testimonial: 'Ameya\'s design work on our website redesign was exceptional. He took the time to understand our brand and created a design that perfectly captures our identity while improving the user experience. Highly recommend!',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-500">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            See what my clients have to say about working with me.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-10"
            >
              <Quote className="text-secondary-500 mb-6" size={40} />
              <p className="text-lg md:text-xl mb-8 text-neutral-700 italic">
                "{testimonials[currentIndex].testimonial}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-white text-primary-500 rounded-full hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-secondary-500' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-white text-primary-500 rounded-full hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;