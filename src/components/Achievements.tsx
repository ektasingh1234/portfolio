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
    <section id="achievements" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            07 — ACHIEVEMENTS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Beyond projects.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 font-normal">
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
            <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden group">
              <div className="absolute -right-12 -bottom-12 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    FEATURED HERO ACHIEVEMENT
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                    {featured.title}
                  </h3>

                  <p className="font-mono text-base font-bold text-indigo-400">
                    {featured.subtitle}
                  </p>

                  <p className="text-slate-300 text-base max-w-2xl font-normal leading-relaxed">
                    "{featured.description}"
                  </p>

                  <div className="pt-2 text-[11px] font-mono text-slate-400 italic">
                    * HackOn Season 6 national engineering competitive programming track.
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center shadow-inner">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-3">
                    <Trophy className="w-9 h-9 text-amber-400 animate-bounce" />
                  </div>
                  <span className="font-mono text-4xl font-black text-amber-400 tracking-tighter">
                    TOP 50
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">
                    NATIONWIDE FEMALE CODERS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* OTHER ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAchievements.map((ach, idx) => {
            const IconComp = categoryIcons[ach.category] || Award;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card bg-slate-50/80 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded">
                      {ach.category}
                    </span>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 text-indigo-600 shadow-2xs">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {ach.metric && (
                    <div className="inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold mb-2 border border-slate-200 bg-white text-slate-900 shadow-2xs">
                      {ach.metric}
                    </div>
                  )}

                  <h4 className="text-lg font-black text-slate-900 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">
                    {ach.title}
                  </h4>

                  {ach.subtitle && (
                    <p className="text-xs font-semibold text-indigo-600 font-mono mb-2">
                      {ach.subtitle}
                    </p>
                  )}

                  {ach.institution && (
                    <p className="text-xs font-semibold text-indigo-600 font-mono mb-2">
                      {ach.institution}
                    </p>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
