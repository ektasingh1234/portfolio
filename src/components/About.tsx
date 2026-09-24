'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Cpu, BookOpen } from 'lucide-react';
import { TIMELINE_EVENTS } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
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
            01 — ABOUT ME
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Curious by nature.<br />
            <span className="text-indigo-600 dark:text-indigo-400">Engineer by practice.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT NARRATIVE COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 font-normal text-slate-800 dark:text-slate-200 shadow-2xs">
              <p>
                "I am a Computer Science and Engineering student specializing in Data Science, with hands-on experience across AI/ML, Generative AI, MLOps and software engineering. I enjoy transforming ideas into practical systems — from retrieval-augmented generation and machine learning pipelines to scalable AI applications."
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-400">
              My interests lie at the intersection of intelligent systems, applied machine learning and modern software engineering. Alongside industry experience, I actively explore research and build projects that push beyond simple prototypes.
            </p>

            {/* CORE PILLARS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-extrabold text-sm">
                  <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Production-Grade ML</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  RAG pipelines, evaluation-driven models, feature stores, and robust inference servers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-sm">
                  <BookOpen className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                  <span>Applied Research</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  3 peer-reviewed research papers and 1 granted German Utility Model Patent.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT INTERACTIVE SCROLL TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs"
          >
            <div className="flex items-center gap-2 mb-8">
              <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Academic & Engineering Journey</h3>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {TIMELINE_EVENTS.map((event, idx) => (
                <motion.div
                  key={event.year + idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 transition-all ${
                    idx === 0
                      ? 'bg-indigo-600 border-indigo-200 dark:border-indigo-900 ring-4 ring-indigo-100 dark:ring-indigo-950'
                      : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900 group-hover:bg-indigo-500'
                  }`} />

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs font-black text-indigo-600 dark:text-indigo-400 tracking-wider">
                      {event.year}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {event.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed capitalize">
                      Status: {event.status}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
