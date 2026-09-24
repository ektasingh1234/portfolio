'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '@/data/portfolioData';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
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
            06 — CERTIFICATIONS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Verified qualifications.
          </h2>
        </motion.div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.highlight && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-mono text-[11px] font-bold border border-amber-200 dark:border-amber-800">
                      🏆 {cert.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {cert.issuer}
                </p>
              </div>

              {cert.year && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-400 dark:text-slate-500">
                  <span>ISSUED / COMPLETED</span>
                  <span>{cert.year}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
