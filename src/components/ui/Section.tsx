import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: 'white' | 'sand' | 'stone' | 'navy' | 'orange';
}

export function Section({ children, id, className = '', bg = 'white' }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    sand: 'bg-brand-sand',
    stone: 'bg-brand-stone',
    navy: 'bg-brand-navy text-white',
    orange: 'bg-brand-orange text-white',
  };

  return (
    <section id={id} className={`py-12 md:py-20 lg:py-28 w-full overflow-hidden ${bgColors[bg]} ${className}`}>
      {children}
    </section>
  );
}
