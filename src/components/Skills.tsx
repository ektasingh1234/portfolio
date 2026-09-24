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

  const activeCategory = SKILL_CATEGORIES.find(cat => cat.id === activeCategoryId);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              02 — SKILLS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Tools I build with.
            </h2>
          </motion.div>

          {/* CATEGORY SELECTOR PILLS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveCategoryId('ALL')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all border ${
                activeCategoryId === 'ALL'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
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
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(activeCategoryId === 'ALL' ? SKILL_CATEGORIES : [activeCategory!]).map((cat) => {
              const IconComp = categoryIcons[cat.id] || Code;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -4 }}
                  className="glass-card bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                          {cat.name}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        {cat.skills.length} ITEMS
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-xl bg-slate-100/80 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 text-slate-700 text-xs font-mono font-medium border border-slate-200/60 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>PRODUCTION READY</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
