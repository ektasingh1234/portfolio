'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QUICK_STATS } from '@/data/portfolioData';

export default function QuickStats() {
  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {QUICK_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-all bg-white dark:bg-slate-900"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-extrabold uppercase">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-sans hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {stat.value}
                </motion.div>

                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 leading-snug">
                  {stat.label}
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 truncate">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
