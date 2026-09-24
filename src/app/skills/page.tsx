import React from 'react';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Skills — Ekta Singh | Technical Stack & Core Competencies',
  description: 'Technical skills, programming languages, AI/ML tools, frameworks, and CS fundamentals mastered by Ekta Singh.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
