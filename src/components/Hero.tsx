'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Database, ArrowDown, FileText, Code } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  // Staggered Container Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-200/25 dark:bg-indigo-900/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT 70% COLUMN */}
          <motion.div
            className="lg:col-span-8 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* EYEBROW */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping"></span>
                <span className="font-mono text-xs font-bold tracking-widest text-indigo-700 dark:text-indigo-300 uppercase">
                  FULL-STACK SDE • AI/ML • GENAI • MLOPS • RESEARCH
                </span>
              </div>
            </motion.div>

            {/* MAIN HEADING WITH LINE REVEAL & ANIMATED ACCENT */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
            >
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
                Hi, I am Ekta Singh 👋
              </span>
              Building{' '}
              <span className="text-indigo-600 dark:text-indigo-400 relative inline-block">
                Intelligent Systems
                <svg className="absolute left-0 -bottom-2 w-full h-3 text-indigo-300/70 dark:text-indigo-500/50 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              & Full-Stack Applications That Scale.
            </motion.h1>

            {/* SUPPORTING TEXT */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Computer Science (Data Science) undergraduate passionate about Software Engineering (SDE), Full-Stack Web Development, AI/ML, Generative AI, and MLOps. I build practical, production-oriented web applications and intelligent systems powered by clean architecture and scalable engineering.
            </motion.p>

            {/* CTA BUTTONS: WORK, RESUME, CONNECT */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold text-sm px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-indigo-500/25 w-full sm:w-auto"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-indigo-600 dark:bg-slate-800 hover:bg-indigo-700 dark:hover:bg-slate-700 text-white font-bold text-sm px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-indigo-500/25 w-full sm:w-auto border border-transparent dark:border-slate-700"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME (CV)</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold text-sm px-6 py-4 rounded-xl transition-all border border-slate-200 dark:border-slate-800 hover:border-indigo-300 shadow-2xs w-full sm:w-auto"
              >
                <span>LET'S CONNECT</span>
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>

            {/* SOCIAL PROFILES ROW */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">
                PROFILES:
              </span>
              
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-lg transition-all hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-lg transition-all hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-lg transition-all hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-xs"
                aria-label="LeetCode Profile"
              >
                <LeetcodeIcon className="w-4 h-4 text-amber-500" />
                <span>LeetCode</span>
              </a>
            </motion.div>

          </motion.div>

          {/* RIGHT 30% COLUMN - PORTRAIT & BADGES */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-92 lg:h-92 flex items-center justify-center">
              
              {/* Outer Orbit Line */}
              <div className="absolute inset-0 rounded-full border border-dashed border-indigo-300/60 dark:border-indigo-800/60 animate-spin-slow pointer-events-none"></div>

              {/* Technical Node Badges */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-2 left-2 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-md text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5"
              >
                <Code className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>FULL-STACK SDE</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-1/4 -right-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-md text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              >
                <Brain className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>AI/ML & GENAI</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-6 -left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-md text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              >
                <Database className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>DSA & SYSTEMS</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -bottom-2 right-6 z-20 bg-slate-900 dark:bg-indigo-600 text-white px-3 py-1 rounded-full shadow-lg text-[11px] font-mono font-bold flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>CGPA: 8.48</span>
              </motion.div>

              {/* Portrait Frame */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-100 dark:from-indigo-950 via-violet-50 dark:via-slate-900 to-slate-100 dark:to-slate-800 p-1.5 shadow-2xl border border-slate-200/90 dark:border-slate-800 group">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      referrerPolicy="no-referrer"
                      alt="Ekta Singh — Full-Stack SDE & AI/ML Engineer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-white relative">
                      <div className="w-20 h-20 rounded-full bg-indigo-600/20 border-2 border-indigo-500 flex items-center justify-center mb-2">
                        <span className="font-mono text-3xl font-black text-indigo-400">ES</span>
                      </div>
                      <span className="font-extrabold text-sm tracking-tight text-white">{PERSONAL_INFO.name}</span>
                      <span className="text-[10px] font-mono text-indigo-300">CSE (Data Science)</span>
                    </div>
                  )}

                  <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"></div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="flex flex-col items-center justify-center text-center pt-8">
        <Link
          href="/about"
          className="group flex flex-col items-center gap-1 text-xs font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors uppercase"
        >
          <span>LEARN ABOUT ME</span>
          <ArrowDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-bounce" />
        </Link>
      </div>

    </section>
  );
}
