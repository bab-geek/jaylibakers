import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  isLoading = false,
  disabled,
  ...props 
}) => {
  // Enhanced responsive base styles
  // Mobile defaults: text-base, py-3, px-6 (Ensures comfortable 44px+ touch target)
  // Desktop defaults: Scales up naturally, allows overrides via className
  const baseStyles = "px-6 py-3 text-base font-medium rounded-full transition-all duration-300 transform active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 touch-manipulation select-none";
  
  const variants = {
    primary: "bg-brand-brown text-white hover:bg-brand-darkBrown hover:shadow-md disabled:hover:bg-brand-brown",
    outline: "border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white disabled:hover:bg-transparent disabled:hover:text-brand-brown"
  };

  const stateStyles = (disabled || isLoading) 
    ? "opacity-75 cursor-not-allowed transform-none pointer-events-none" 
    : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} ${stateStyles}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin" size={20} />}
      {children}
    </button>
  );
};

export default Button;