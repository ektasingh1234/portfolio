'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '@/data/portfolioData';
import { Calendar, MapPin, Award, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string>('01');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
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
            03 — EXPERIENCE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Where I built real systems.
          </h2>
        </motion.div>

        {/* EXPANDABLE EXPERIENCE CARDS STACK */}
        <div className="space-y-6 max-w-4xl">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card bg-slate-50/80 dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                {/* CARD HEADER / CLICK TRIGGER */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-100 dark:border-indigo-900">
                        EXPERIENCE {exp.id}
                      </span>
                      {exp.badge && (
                        <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-bold flex items-center gap-1.5 shadow-2xs">
                          <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {exp.role} <span className="text-indigo-600 dark:text-indigo-400 font-bold">@ {exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1">
                      <span className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full bg-slate-200/80 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* EXPANDABLE BODY */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-slate-200/70 dark:border-slate-800/70"
                    >
                      <div className="pt-6 space-y-4">
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-2.5 pt-2">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            KEY RESPONSIBILITIES & CONTRIBUTIONS:
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
