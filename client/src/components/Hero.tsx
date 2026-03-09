import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  const { hero } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-[95vh] flex items-center pt-20 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <motion.div 
        className="max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium mb-6">
            {hero.greeting}
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-4"
        >
          {hero.name}.
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-slate-400 mb-8"
        >
          {hero.role}
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
        >
          {hero.description}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
          <a 
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium bg-gradient-primary text-white hover-glow-cyan shadow-lg shadow-cyan-500/25"
          >
            Get In Touch
            <ArrowRight size={20} />
          </a>
          <a 
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium bg-slate-800/50 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            Download Resume
            <Download size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
