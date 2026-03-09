import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-800/50">
      <SectionTitle title="Technical Arsenal" subtitle="Technologies and tools I use to build modern applications." alignment="center" />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mt-12">
        {portfolioData.skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div 
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={idx * 50}
              className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]"
            >
              <div 
                className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                style={{ color: skill.color }}
              >
                <Icon size={36} />
              </div>
              <span className="text-slate-300 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
