'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_ITEMS } from '@/data/portfolioData';
import { BookOpen, ShieldCheck, Award } from 'lucide-react';

export default function Research() {
  const publications = RESEARCH_ITEMS.filter(r => r.type === 'Publication');
  const patent = RESEARCH_ITEMS.find(r => r.type === 'Patent');

  return (
    <section id="research" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
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
            05 — RESEARCH
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Research beyond the classroom.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 font-normal">
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
              className="glass-card bg-slate-50/80 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    PUBLICATION 0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold border border-emerald-200">
                    {pub.status}
                  </span>
                </div>

                <h4 className="text-lg font-black text-slate-900 mb-3 leading-snug">
                  {pub.title}
                </h4>

                <p className="text-xs text-slate-500 font-mono mb-2">
                  Conference Proceeding
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 text-indigo-600">
                  <BookOpen className="w-3.5 h-3.5" />
                  {pub.venue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
