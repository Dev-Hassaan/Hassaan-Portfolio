import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Footer } from '../components/Footer';

// Skeletons
import { 
  HeroSkeleton, 
  AboutSkeleton, 
  ExperienceSkeleton, 
  SkillsSkeleton 
} from '../components/skeletons';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to show beautiful skeleton states
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Initialize AOS after DOM renders actual content
      setTimeout(() => {
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-out-cubic',
          offset: 100,
        });
      }, 100);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        {isLoading ? (
          <>
            <HeroSkeleton />
            <AboutSkeleton />
            <ExperienceSkeleton />
            <SkillsSkeleton />
          </>
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}
