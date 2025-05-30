import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  link: string;
  delay: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  excerpt, 
  image, 
  date, 
  category,
  link,
  delay 
}) => {
  return (
    <AnimatedSection delay={delay} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-6">
          <div className="text-neutral-500 text-sm mb-2">{date}</div>
          <h3 className="text-xl font-semibold mb-3 text-neutral-800 group-hover:text-primary-500 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm mb-4">{excerpt}</p>
          <a
            href={link}
            className="inline-flex items-center text-primary-500 font-medium text-sm group-hover:text-primary-600"
          >
            Read More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Importance of User Research in Product Design',
      excerpt: 'Discover why user research is critical to creating successful digital products that meet user needs.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'May 15, 2025',
      category: 'UX Design',
      link: '#',
    },
    {
      title: 'Creating Effective Design Systems for Scale',
      excerpt: 'Learn how to build and maintain design systems that enable consistency and efficiency across products.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'April 22, 2025',
      category: 'Design Systems',
      link: '#',
    },
    {
      title: 'Mobile-First Design: Best Practices for 2025',
      excerpt: 'Explore the latest trends and techniques for designing exceptional mobile experiences.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'March 10, 2025',
      category: 'Mobile Design',
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Latest Articles</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Insights, thoughts, and tutorials on product design and the creative process.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              category={post.category}
              link={post.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;