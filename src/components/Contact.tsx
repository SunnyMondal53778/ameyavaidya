import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string;
  link?: string;
}

const ContactInfoItem: React.FC<ContactInfo> = ({ icon, title, details, link }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg">
      <div className="p-3 bg-primary-500 text-white rounded-md">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-neutral-800">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-neutral-600 hover:text-primary-500 transition-colors"
          >
            {details}
          </a>
        ) : (
          <p className="text-neutral-600">{details}</p>
        )}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'ameya.vaidya@example.com',
      link: 'mailto:ameya.vaidya@example.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'San Francisco, California',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Show success message (in a real app)
    alert('Thanks for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Get In Touch</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    details={info.details}
                    link={info.link}
                  />
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#twitter"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-primary-500 hover:text-white transition-colors text-neutral-700"
                    aria-label="Follow on X (Twitter)"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#linkedin"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-primary-500 hover:text-white transition-colors text-neutral-700"
                    aria-label="Follow on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-primary-500 hover:text-white transition-colors text-neutral-700"
                    aria-label="Follow on Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#github"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-primary-500 hover:text-white transition-colors text-neutral-700"
                    aria-label="Follow on GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Send Me a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  required
                />
              </div>

              <Button variant="secondary" className="w-full" icon={<Send size={16} />}>
                Send Message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;