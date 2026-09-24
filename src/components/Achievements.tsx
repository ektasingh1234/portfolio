'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '@/data/portfolioData';
import { Trophy, Award, GraduationCap, Share2, Users, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  competition: Trophy,
  academic: GraduationCap,
  coding: Share2,
  leadership: Users
};

export default function Achievements() {
  const featured = ACHIEVEMENTS.find(a => a.featured);
  const otherAchievements = ACHIEVEMENTS.filter(a => !a.featured);

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
            07 — ACHIEVEMENTS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Beyond projects.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 font-normal">
            Competitive programming recognition, academic honors, leadership roles, and community technical submissions.
          </p>
        </motion.div>

        {/* FEATURED HERO ACHIEVEMENT CARD (TOP 50 FEMALE CODERS) */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="relative rounded-3xl bg-slate-900 dark:bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden group">
              <div className="absolute -right-12 -bottom-12 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    FEATURED HERO ACHIEVEMENT
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                    {featured.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed max-w-2xl font-normal">
                    {featured.description}
                  </p>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-slate-950 font-mono text-center w-full sm:w-auto">
                    <Trophy className="w-10 h-10 text-slate-950 mx-auto mb-2" />
                    <div className="text-2xl font-black uppercase tracking-tight">TOP 50</div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-slate-900">FEMALE CODERS</div>
                    <div className="text-[10px] text-slate-900 mt-1 font-bold">HACKON WITH AMAZON 6.0</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2x2 GRID OF OTHER ACHIEVEMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherAchievements.map((ach, idx) => {
            const IconComp = categoryIcons[ach.category] || Award;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card bg-slate-50/90 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {ach.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                    {ach.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>

                {ach.metric && (
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">METRIC / IMPACT:</span>
                    <span className="font-mono text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-100 dark:border-indigo-900">
                      {ach.metric}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
