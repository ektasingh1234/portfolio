'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '@/data/portfolioData';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            06 — CERTIFICATIONS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
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
              className="glass-card bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.highlight && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-mono text-[11px] font-bold border border-amber-200">
                      🏆 {cert.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-1 leading-snug group-hover:text-indigo-600 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-600">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>VERIFICATION YEAR</span>
                <span className="font-bold text-slate-800">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
