import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About — Ekta Singh | Computer Science & AI/ML',
  description: 'Learn more about Ekta Singh, Computer Science (Data Science) student specializing in AI/ML, GenAI, MLOps, and Software Engineering.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <About />
      </main>
      <Footer />
    </div>
  );
}
