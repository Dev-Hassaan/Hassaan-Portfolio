import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Github, Mail, MapPin, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Hero() {
  const { hero, contact } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-cyan-600/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-700/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
        <div className="max-w-4xl">

          {/* Available badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-medium"
              data-testid="hero-available-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Available for New Opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-slate-400 font-medium mb-3"
            data-testid="hero-greeting"
          >
            {hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-4"
            data-testid="hero-name"
          >
            <span className="text-gradient">{hero.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-slate-300 mb-6"
            data-testid="hero-role"
          >
            {hero.role}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-cyan-400/80 font-medium text-base mb-8"
            data-testid="hero-tagline"
          >
            <Sparkles size={16} />
            {hero.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-4"
            data-testid="hero-description"
          >
            {hero.description}
          </motion.p>

          {/* Location */}
          <motion.div
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-slate-500 text-sm mb-12"
            data-testid="hero-location"
          >
            <MapPin size={14} />
            {hero.location}
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={0.65}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-primary text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              data-testid="hero-cta-contact"
            >
              <Mail size={18} />
              Let's Work Together
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800/60 hover:-translate-y-0.5 transition-all duration-300"
              data-testid="hero-cta-github"
            >
              <Github size={18} />
              View GitHub
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={0.75}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-8 pt-8 border-t border-slate-800/60"
          >
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Projects Built', value: '15+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Open to Collaborate', value: 'Yes' },
            ].map((s) => (
              <div key={s.label} data-testid={`hero-stat-${s.label}`}>
                <div className="text-2xl font-display font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        data-testid="hero-scroll-indicator"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
