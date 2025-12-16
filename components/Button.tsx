import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 text-sm md:text-base font-medium transition-all duration-300 active:scale-[0.98] inline-flex items-center justify-center gap-2 rounded-xl";
  const widthStyles = fullWidth ? "w-full" : "w-auto";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-boring-black text-white hover:bg-gray-800 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10";
      break;
    case 'secondary':
      variantStyles = "bg-boring-gray-100 text-boring-black hover:bg-white border border-boring-gray-200 shadow-sm";
      break;
    case 'outline':
      variantStyles = "bg-transparent border border-boring-gray-200 text-boring-black hover:border-boring-black hover:bg-white";
      break;
  }

  return (
    <button 
      className={`${baseStyles} ${widthStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};