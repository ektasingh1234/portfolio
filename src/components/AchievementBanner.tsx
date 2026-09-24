'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, ChevronRight } from 'lucide-react';

export default function AchievementBanner() {
  return (
    <section id="achievement-banner" className="relative z-20 -mt-6 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-2xl border border-indigo-500/30 overflow-hidden group"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left Content Column */}
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Premium Badge Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 p-0.5 shadow-lg shrink-0">
                <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                  <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400 animate-pulse" />
                </div>
              </div>

              <div>
                {/* Eyebrow Pill */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-3 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    HackOn with Amazon 6.0
                  </span>
                  <span className="text-slate-400 font-mono text-xs hidden sm:inline">• Competitive Engineering</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                  TOP 50 FEMALE CODERS
                </h2>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base mt-1.5 font-normal max-w-2xl leading-relaxed">
                  "Recognized among the Top 50 Female Coders at HackOn with Amazon 6.0."
                </p>
              </div>
            </div>

            {/* Right Side Rank Pill */}
            <div className="shrink-0 w-full lg:w-auto flex items-center justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-800">
              <div className="flex flex-col lg:items-end">
                <span className="font-mono text-3xl font-black text-amber-400 tracking-tighter">
                  TOP 50
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  NATIONWIDE FEMALE CODERS
                </span>
              </div>
              
              <a
                href="#achievements"
                className="ml-6 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold border border-white/10 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Details</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
