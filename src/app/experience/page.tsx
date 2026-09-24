import React from 'react';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Experience — Ekta Singh | AI/ML & Software Engineering',
  description: 'Industry experience and internships of Ekta Singh at FaxLab AI and Sportomic.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
