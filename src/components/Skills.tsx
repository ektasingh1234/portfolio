'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Code, Brain, Sparkles, Bot, Globe, Server, Database, Wrench, BookOpen } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  PROGRAMMING: Code,
  AI_ML: Brain,
  GENAI: Sparkles,
  LLM: Bot,
  WEB: Globe,
  MLOPS: Server,
  DATABASES: Database,
  TOOLS: Wrench,
  CS: BookOpen
};

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('ALL');

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              02 — SKILLS & TECHNOLOGIES
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Tools I build with.
            </h2>
          </motion.div>

          {/* CATEGORY SELECTOR PILLS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveCategoryId('ALL')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all border ${
                activeCategoryId === 'ALL'
                  ? 'bg-slate-900 dark:bg-indigo-600 text-white border-slate-900 dark:border-indigo-600 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              ALL CATEGORIES
            </button>

            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all border ${
                  activeCategoryId === cat.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* DYNAMIC ANIMATED SKILL PANELS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SKILL_CATEGORIES.filter(cat => activeCategoryId === 'ALL' || cat.id === activeCategoryId).map((category) => {
              const IconComponent = categoryIcons[category.id] || Code;
              return (
                <div
                  key={category.id}
                  className="glass-card bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-mono text-xs font-extrabold tracking-wider text-slate-900 dark:text-white uppercase">
                        {category.name}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200/80 dark:border-slate-700/80 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-700 dark:hover:text-indigo-300 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
