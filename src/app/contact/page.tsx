import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact — Ekta Singh | Let\'s Connect',
  description: 'Get in touch with Ekta Singh for AI/ML opportunities, software engineering roles, research collaborations, or hackathons.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
