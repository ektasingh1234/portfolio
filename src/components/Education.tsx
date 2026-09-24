'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
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
            05 — EDUCATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Academic Foundation.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 font-normal">
            Formal education in Computer Science & Data Science, supported by academic excellence and honors.
          </p>
        </motion.div>

        {/* MAIN DEGREE CARD */}
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-slate-50/90 dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-8 h-8" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold border border-indigo-200 dark:border-indigo-800">
                      UNDERGRADUATE DEGREE
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                      CGPA: {PERSONAL_INFO.education.cgpa} / 10
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {PERSONAL_INFO.education.degree}
                  </h3>

                  <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">
                    {PERSONAL_INFO.education.university}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end font-mono text-xs text-slate-500 dark:text-slate-400 gap-1.5 shrink-0">
                <span className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  {PERSONAL_INFO.education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* ACADEMIC HONORS & DEAN'S LIST */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                ACADEMIC HONORS & RECOGNITIONS
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 block">MANIPAL UNIVERSITY JAIPUR</span>
                    <span className="text-lg font-black text-slate-900 dark:text-white">DEAN'S LIST</span>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-mono text-xs font-black border border-amber-200 dark:border-amber-800">
                    GPA 9.43
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 block">MANIPAL UNIVERSITY JAIPUR</span>
                    <span className="text-lg font-black text-slate-900 dark:text-white">DEAN'S LIST</span>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-mono text-xs font-black border border-amber-200 dark:border-amber-800">
                    GPA 9.10
                  </span>
                </div>
              </div>
            </div>

            {/* CORE COURSEWORK */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                KEY COURSEWORK & TECHNICAL FOUNDATIONS
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming',
                  'DBMS & SQL Databases',
                  'Operating Systems',
                  'Machine Learning & AI',
                  'Deep Learning & Neural Networks',
                  'Software Engineering',
                  'System Design & Architecture'
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
