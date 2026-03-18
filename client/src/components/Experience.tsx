import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { Briefcase, ArrowRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-28 section-divider">
      <SectionTitle title="Work Experience" subtitle="Companies I've had the privilege of working with." />

      <div className="max-w-4xl space-y-6">
        {portfolioData.experience.map((job, idx) => (
          <div
            key={job.id}
            data-aos="fade-up"
            data-aos-delay={idx * 80}
            data-aos-duration="600"
            className="group relative bg-slate-800/25 border border-slate-700/50 rounded-2xl p-8 card-hover overflow-hidden"
            data-testid={`experience-card-${job.id}`}
          >
            {/* Accent glow on hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[60px] group-hover:bg-cyan-500/12 transition-all duration-700 rounded-full pointer-events-none -translate-x-4 -translate-y-4" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0 transition-colors">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-100 leading-tight" data-testid={`experience-role-${job.id}`}>
                    {job.role}
                  </h3>
                  <p className="text-cyan-400 font-semibold mt-0.5" data-testid={`experience-company-${job.id}`}>
                    {job.company}
                  </p>
                </div>
              </div>
              <span
                className="self-start px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700 text-slate-400 whitespace-nowrap flex-shrink-0"
                data-testid={`experience-duration-${job.id}`}
              >
                {job.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed mb-6 ml-0 sm:ml-16" data-testid={`experience-description-${job.id}`}>
              {job.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 ml-0 sm:ml-16">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="tag-chip group-hover:border-slate-600 transition-colors"
                  data-testid={`experience-skill-${job.id}-${skill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* CTA row */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex items-center gap-3 pt-4 pl-2"
        >
          <span className="text-slate-500 text-sm">Want to know more?</span>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            data-testid="experience-contact-cta"
          >
            Get in touch <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
