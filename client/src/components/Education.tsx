import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-28 section-divider">
      <SectionTitle title="Education" subtitle="My academic background and certifications." />

      <div className="max-w-3xl">
        <div className="relative border-l-2 border-slate-800 ml-5 pl-10 py-2 space-y-12">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={edu.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="600"
              className="relative"
              data-testid={`education-card-${edu.id}`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[53px] top-0 w-10 h-10 rounded-full bg-background border-2 border-cyan-500/70 flex items-center justify-center text-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.3)]">
                <GraduationCap size={18} />
              </div>

              <div className="group bg-slate-800/25 border border-slate-700/50 rounded-2xl p-7 card-hover">
                {/* Date */}
                <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm mb-2" data-testid={`education-duration-${edu.id}`}>
                  <Calendar size={14} />
                  {edu.duration}
                </div>

                {/* Degree */}
                <h3 className="text-xl font-display font-bold text-slate-100 mb-1 leading-tight" data-testid={`education-degree-${edu.id}`}>
                  {edu.degree}
                </h3>

                {/* School */}
                <p className="text-slate-400 font-semibold text-sm mb-4" data-testid={`education-school-${edu.id}`}>
                  {edu.school}
                </p>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed text-sm" data-testid={`education-desc-${edu.id}`}>
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
