import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-slate-800/50 relative">
      <SectionTitle title="Education" />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-slate-800 ml-6 md:ml-8 pl-8 md:pl-12 py-4 space-y-16">
          {portfolioData.education.map((edu, idx) => (
            <div 
              key={edu.id} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="relative"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[42px] md:-left-[58px] top-1 w-10 h-10 rounded-full bg-background border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                <GraduationCap size={20} />
              </div>
              
              <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors">
                <span className="text-cyan-400 font-medium mb-2 block">{edu.duration}</span>
                <h3 className="text-2xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-slate-400 font-medium mb-4">{edu.school}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
