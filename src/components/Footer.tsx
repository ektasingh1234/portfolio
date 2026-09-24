'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNav = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-slate-800 gap-8">
          
          {/* LEFT BRANDING */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-mono text-xs font-black">
                ES
              </span>
              <span className="text-xl font-black tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs text-indigo-400 font-bold tracking-wider uppercase">
              AI/ML • GENAI • DATA SCIENCE
            </p>
            <p className="text-slate-400 text-sm italic font-normal max-w-sm">
              "Building intelligent systems, one idea at a time."
            </p>
          </div>

          {/* QUICK NAV LINKS */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-slate-300">
            {footerNav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* BACK TO TOP BUTTON */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-slate-800 hover:bg-indigo-600 text-white transition-colors border border-slate-700 shadow-md flex items-center gap-2 font-mono text-xs font-bold self-start md:self-auto cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* BOTTOM COPYRIGHT & SOCIAL */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <p>© 2026 Ekta Singh. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <LeetcodeIcon className="w-4 h-4 text-amber-400" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
