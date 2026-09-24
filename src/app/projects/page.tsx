import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Projects — Ekta Singh | PRISM, NeuroSearch & MLOps Platform',
  description: 'Production-grade AI applications, RAG search engines, and MLOps platforms built by Ekta Singh.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
