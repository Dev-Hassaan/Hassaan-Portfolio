import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, alignment = 'left' }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <div 
        data-aos="fade-up"
        className="inline-flex items-center gap-4 mb-4"
      >
        {alignment === 'center' && <div className="h-px w-12 bg-cyan-500/50 hidden md:block" />}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-primary rounded-full"></span>
        </h2>
        {alignment !== 'center' && <div className="h-px w-32 md:w-96 bg-slate-800 ml-4 hidden md:block" />}
        {alignment === 'center' && <div className="h-px w-12 bg-cyan-500/50 hidden md:block" />}
      </div>
      
      {subtitle && (
        <p 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="text-muted-foreground max-w-2xl mt-4 text-lg"
          style={{ margin: alignment === 'center' ? '1rem auto 0' : '1rem 0 0' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
