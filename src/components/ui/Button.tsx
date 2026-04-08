import { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: (e: MouseEvent<any>) => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href,
  className = '',
  onClick,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orange-dark focus:ring-brand-orange shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-brand-navy text-white hover:bg-brand-navy-light focus:ring-brand-navy shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isInternal = href.startsWith('#');
    return (
      <a 
        href={href} 
        className={classes} 
        onClick={onClick}
        {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
