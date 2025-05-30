import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'primary',
  size = 'md',
  className = '',
}) => {
  const colorStyles = {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-primary-800',
    neutral: 'bg-neutral-200 text-neutral-800',
  };
  
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <div className={`inline-flex items-center rounded-md font-medium ${colorStyles[color]} ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;