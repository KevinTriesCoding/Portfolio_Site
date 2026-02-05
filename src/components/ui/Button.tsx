import React from 'react';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider';
  const variants = {
    primary: 'bg-[#3b2d68] text-white hover:bg-[#2a1f4d] focus:ring-[#3b2d68]',
    secondary:
    'bg-[#ff4d8d] text-white hover:bg-[#e63e7b] focus:ring-[#ff4d8d]',
    outline:
    'border-2 border-[#ff4d8d] text-[#ff4d8d] hover:bg-[#ff4d8d] hover:text-white focus:ring-[#ff4d8d]',
    ghost: 'bg-transparent text-[#3b2d68] hover:bg-gray-100'
  };
  const sizes = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-11 px-6 text-sm',
    lg: 'h-14 px-8 text-base'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}>

      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>);

}
