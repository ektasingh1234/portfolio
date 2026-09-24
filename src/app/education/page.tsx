import React from 'react';
import Navbar from '@/components/Navbar';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Education — Ekta Singh | B.Tech CSE (Data Science) & Dean\'s List',
  description: 'Academic background, degree, GPA 8.48, Dean\'s List honors, and coursework of Ekta Singh at Manipal University Jaipur.',
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <Education />
      </main>
      <Footer />
    </div>
  );
}
