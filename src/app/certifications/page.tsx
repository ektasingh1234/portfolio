import React from 'react';
import Navbar from '@/components/Navbar';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Certifications — Ekta Singh | Verified Qualifications',
  description: 'Verified technical certifications in Machine Learning, Generative AI, Operating Systems, and Python by Ekta Singh.',
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
