import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/50">
      <SectionTitle title="Where I've Worked" />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.experience.map((job, idx) => (
          <div 
            key={job.id}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all duration-500 rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">{job.role}</h3>
                  <p className="text-lg text-cyan-400 font-medium">{job.company}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-1.5 rounded-full bg-slate-800 text-sm font-medium text-slate-300 border border-slate-700 whitespace-nowrap self-start">
                {job.duration}
              </div>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-6 pl-0 md:pl-15">
              {job.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pl-0 md:pl-15">
              {job.skills.map((skill) => (
                <span 
                  key={skill}
                  className="text-xs font-medium px-3 py-1 bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
