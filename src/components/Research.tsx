'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_ITEMS } from '@/data/portfolioData';
import { BookOpen, ShieldCheck, Award } from 'lucide-react';

export default function Research() {
  const publications = RESEARCH_ITEMS.filter(r => r.type === 'Publication');
  const patent = RESEARCH_ITEMS.find(r => r.type === 'Patent');

  return (
    <section id="research" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
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
            05 — RESEARCH & PATENTS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Research beyond the classroom.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 font-normal">
            Applied machine learning research focused on explainable AI, computer vision digital twins, algorithmic persona engineering, and granted utility model patents.
          </p>
        </motion.div>

        {/* DISTINCT PATENT HIGHLIGHT CARD */}
        {patent && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="relative rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 border border-amber-500/40 shadow-xl overflow-hidden group">
              <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-8 h-8 text-amber-400" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-3 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-bold border border-amber-400/40">
                        {patent.distinctBadge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {patent.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm mt-1 font-mono">
                      {patent.venue}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-amber-500/30 px-5 py-3 rounded-2xl text-right shrink-0">
                  <span className="text-xs font-mono text-amber-400 block font-bold">STATUS</span>
                  <span className="text-sm font-black text-white tracking-tight">GRANTED — 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PUBLICATIONS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card bg-slate-50/80 dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-100 dark:border-indigo-900">
                    PUBLICATION 0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-bold border border-emerald-200 dark:border-emerald-800">
                    {pub.status}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 leading-snug">
                  "{pub.title}"
                </h3>

                <p className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  {pub.venue}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400 dark:text-slate-500">
                <span>ACCEPTED & PUBLISHED</span>
                <span>{pub.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
