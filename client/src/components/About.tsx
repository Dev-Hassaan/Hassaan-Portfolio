import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 border-t border-slate-800/50">
      <SectionTitle title="About Me" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            {about.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
        
        <div data-aos="fade-left" className="grid grid-cols-2 gap-4 md:gap-6">
          {about.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 text-center hover:bg-slate-800 transition-colors group"
            >
              <h4 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </h4>
              <p className="text-sm md:text-base text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
