import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/DW-Graphic.png" alt="Dream World Logo" className="h-10 w-auto" />
      <span className="text-xl font-semibold text-primary-500">Dream World</span>
    </div>
  );
};

export default Logo;