import React from 'react';
import Navbar from '@/components/Navbar';
import Research from '@/components/Research';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Research & Patents — Ekta Singh | Explainable AI & German Patent',
  description: 'Peer-reviewed research publications and granted German Utility Model Patent by Ekta Singh.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <Research />
      </main>
      <Footer />
    </div>
  );
}
