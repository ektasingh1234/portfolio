'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

export default function Profiles() {
  const profiles = [
    {
      platform: 'GITHUB',
      name: 'Ekta Singh',
      role: 'AI/ML • Software • Projects',
      url: PERSONAL_INFO.social.github,
      handle: '@ektasingh1234',
      icon: GithubIcon,
      badgeBg: 'bg-slate-900 dark:bg-slate-800 text-white',
      btnText: 'VIEW PROFILE →'
    },
    {
      platform: 'LINKEDIN',
      name: 'Ekta Singh',
      role: 'Research • Projects • Professional',
      url: PERSONAL_INFO.social.linkedin,
      handle: 'in/ekta-singh-ab64b8290',
      icon: LinkedinIcon,
      badgeBg: 'bg-blue-600 text-white',
      btnText: 'VIEW PROFILE →'
    },
    {
      platform: 'LEETCODE',
      name: 'Ekta Singh',
      role: 'DSA • Competitive Programming',
      url: PERSONAL_INFO.social.leetcode,
      handle: 'u/0Sp5HtKdKD',
      icon: LeetcodeIcon,
      badgeBg: 'bg-amber-500 text-white',
      btnText: 'VIEW PROFILE →'
    }
  ];

  return (
    <section id="profiles" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
            08 — PROFILES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Find me online.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 font-normal">
            Explore my code repositories, research updates, technical content submissions, and competitive programming progress.
          </p>
        </motion.div>

        {/* PROFILE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((prof, idx) => {
            const IconComp = prof.icon;
            return (
              <motion.a
                key={idx}
                href={prof.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${prof.badgeBg} shadow-md`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      {prof.platform}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {prof.name}
                  </h3>

                  <p className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-2">
                    {prof.handle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                    {prof.role}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <span>{prof.btnText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
