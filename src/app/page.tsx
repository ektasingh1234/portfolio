import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AchievementBanner from '@/components/AchievementBanner';
import QuickStats from '@/components/QuickStats';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import Profiles from '@/components/Profiles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <AchievementBanner />
        <QuickStats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Certifications />
        <Achievements />
        <Profiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
