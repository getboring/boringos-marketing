import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <span className={`font-bold tracking-tight-swiss select-none ${className}`}>
      BoringOS<span className="text-boring-orange animate-pulse-slow">.</span>
    </span>
  );
};