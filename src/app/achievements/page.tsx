import React from 'react';
import Navbar from '@/components/Navbar';
import AchievementBanner from '@/components/AchievementBanner';
import QuickStats from '@/components/QuickStats';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Profiles from '@/components/Profiles';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Achievements & Honors — Ekta Singh | Top 50 Female Coders',
  description: 'Competitive programming honors, Top 50 Female Coders award, academic achievements, certifications, and online profiles of Ekta Singh.',
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <AchievementBanner />
        <QuickStats />
        <Achievements />
        <Certifications />
        <Profiles />
      </main>
      <Footer />
    </div>
  );
}
