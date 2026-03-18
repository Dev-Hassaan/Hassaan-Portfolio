import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';

export function Skills() {
  const { skills, additionalSkills } = portfolioData;

  return (
    <section id="skills" className="py-28 section-divider">
      <SectionTitle
        title="Technical Skills"
        subtitle="Technologies and tools I use to ship real products."
        alignment="center"
      />

      {/* Icon skill grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-16">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={idx * 40}
              data-aos-duration="500"
              className="group bg-slate-800/25 border border-slate-700/50 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 card-hover hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.15)] cursor-default"
              data-testid={`skill-card-${skill.name}`}
            >
              <div
                className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                <Icon size={30} />
              </div>
              <span className="text-slate-400 font-medium text-xs text-center leading-tight group-hover:text-slate-200 transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Additional categorized skills */}
      <div
        className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {additionalSkills.map((group) => (
          <div
            key={group.category}
            className="bg-slate-800/20 border border-slate-700/40 rounded-2xl p-5"
            data-testid={`skill-category-${group.category}`}
          >
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <div className="flex flex-col gap-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors cursor-default"
                  data-testid={`skill-item-${item}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
