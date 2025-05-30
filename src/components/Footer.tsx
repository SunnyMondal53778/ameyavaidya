import React from 'react';
import Logo from './Logo';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-neutral-400 max-w-xs">
              Passionate about creating beautiful, user-centered designs that solve real problems.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#twitter"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary-500 transition-colors"
                aria-label="X (Twitter) profile"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary-500 transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#github"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary-500 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {['UI/UX Design', 'Web Design', 'Mobile App Design', 'Dashboard Design', 'Wireframing'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Blog', href: '#blog' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>San Francisco, California</li>
              <li>
                <a href="mailto:ameya.vaidya@example.com" className="hover:text-white transition-colors">
                  ameya.vaidya@example.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Ameya Vaidya. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-neutral-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;