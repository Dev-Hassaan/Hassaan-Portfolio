import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { BookOpen } from 'lucide-react';

const COLORS = [
  'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
  'from-blue-500/20 to-violet-500/10 border-blue-500/30',
  'from-violet-500/20 to-purple-500/10 border-violet-500/30',
  'from-emerald-500/20 to-cyan-500/10 border-emerald-500/30',
  'from-amber-500/20 to-orange-500/10 border-amber-500/30',
  'from-rose-500/20 to-pink-500/10 border-rose-500/30',
];
const LABEL_COLORS = ['text-cyan-400', 'text-blue-400', 'text-violet-400', 'text-emerald-400', 'text-amber-400', 'text-rose-400'];

export function LearningJourney() {
  const { learningJourney } = portfolioData;

  return (
    <section id="journey" className="py-28 section-divider">
      <SectionTitle
        title="Learning Journey"
        subtitle={`${learningJourney.title} — A comprehensive 6-semester deep dive into modern software engineering.`}
        alignment="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {learningJourney.semesters.map((sem, idx) => (
          <div
            key={sem.id}
            data-aos="fade-up"
            data-aos-delay={idx * 60}
            data-aos-duration="600"
            className={`group relative bg-gradient-to-br ${COLORS[idx % COLORS.length]} border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300`}
            data-testid={`journey-sem-${sem.id}`}
          >
            {/* Semester label */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-9 h-9 rounded-xl bg-background/50 border border-slate-700/60 flex items-center justify-center ${LABEL_COLORS[idx % LABEL_COLORS.length]}`}>
                <BookOpen size={16} />
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${LABEL_COLORS[idx % LABEL_COLORS.length]}`}>
                  Semester {sem.id}
                </p>
                <h3 className="text-sm font-display font-bold text-slate-100 leading-tight" data-testid={`journey-title-${sem.id}`}>
                  {sem.title}
                </h3>
              </div>
            </div>

            {/* Topics */}
            <div className="flex flex-col gap-1.5">
              {sem.topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  data-testid={`journey-topic-${topic}`}
                >
                  <span className={`w-1 h-1 rounded-full flex-shrink-0 ${LABEL_COLORS[idx % LABEL_COLORS.length]}`} style={{ backgroundColor: 'currentColor' }} />
                  {topic}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
