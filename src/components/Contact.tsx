'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              09 — CONTACT
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
              Let's build something intelligent.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Whether you're looking for an AI/ML collaborator, research enthusiast, developer or someone who loves turning ambitious ideas into working systems — I'd love to connect.
            </p>
          </motion.div>

          {/* PRIMARY CTA: GMAIL COMPOSE, RESUME, COPY EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href={PERSONAL_INFO.contact.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-indigo-500/25 transition-all w-full sm:w-auto"
            >
              <span>LET'S TALK</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-base px-8 py-4 rounded-2xl border border-slate-800 transition-all shadow-md w-full sm:w-auto"
            >
              <FileText className="w-5 h-5 text-indigo-400" />
              <span>VIEW RESUME</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all w-full sm:w-auto cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 font-bold">COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </motion.div>

          {/* CONTACT INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            
            {/* EMAIL CARD */}
            <div className="glass-card bg-slate-50/80 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block mb-1">
                  EMAIL ADDRESS
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="font-mono text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  {PERSONAL_INFO.contact.email}
                </a>
              </div>
            </div>

            {/* PHONE CARD */}
            <div className="glass-card bg-slate-50/80 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block mb-1">
                  PHONE / WHATSAPP
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {PERSONAL_INFO.contact.phone}
                </a>
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="glass-card bg-slate-50/80 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block mb-1">
                  LOCATION & CAMPUS
                </span>
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white block">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

          </div>

          {/* SOCIAL LINKS ROW */}
          <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-800 dark:text-slate-200" />
              <span>GITHUB</span>
            </a>

            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>LINKEDIN</span>
            </a>

            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl transition-all"
            >
              <LeetcodeIcon className="w-4 h-4 text-amber-500" />
              <span>LEETCODE</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
