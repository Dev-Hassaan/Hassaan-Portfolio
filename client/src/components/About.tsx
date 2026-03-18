import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { Code2, Layers, MapPin, Zap } from 'lucide-react';

const ICONS = [Code2, Zap, MapPin, Layers];

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-28 section-divider">
      <SectionTitle title="About Me" subtitle="A bit about who I am and what I do." />

      <div className="grid lg:grid-cols-5 gap-16 items-start">

        {/* Left: text */}
        <div data-aos="fade-right" data-aos-duration="700" className="lg:col-span-3 space-y-6">
          {about.paragraphs.map((para, idx) => (
            <p key={idx} className="text-lg text-slate-400 leading-relaxed" data-testid={`about-para-${idx}`}>
              {para}
            </p>
          ))}

          <div className="mt-8 pt-8 border-t border-slate-800/60">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-4">What I Specialise In</p>
            <div className="flex flex-wrap gap-2">
              {[
                'React.js',
                'PlayCanvas 3D',
                'Product Configurators',
                'Responsive UI',
                'JavaScript ES6+',
                'Framer Motion',
                'Laravel / PHP',
                'REST APIs',
              ].map((item) => (
                <span
                  key={item}
                  className="tag-chip"
                  data-testid={`about-speciality-${item}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: stat cards */}
        <div data-aos="fade-left" data-aos-duration="700" className="lg:col-span-2 grid grid-cols-2 gap-4">
          {about.stats.map((stat, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-3 card-hover"
                data-testid={`about-stat-${idx}`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/15 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xl font-display font-bold text-slate-100 leading-tight">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
