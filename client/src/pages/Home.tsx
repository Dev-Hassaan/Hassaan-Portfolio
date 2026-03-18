import { useState, useEffect } from 'react';
import AOS from 'aos';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { LearningJourney } from '../components/LearningJourney';
import { Footer } from '../components/Footer';

import {
  HeroSkeleton,
  AboutSkeleton,
  ExperienceSkeleton,
  SkillsSkeleton
} from '../components/skeletons';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        AOS.init({
          duration: 700,
          once: true,
          easing: 'ease-out-cubic',
          offset: 80,
        });
      }, 50);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
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
            <LearningJourney />
          </>
        )}
      </main>

      {!isLoading && <Footer />}
    </div>
  );
}
