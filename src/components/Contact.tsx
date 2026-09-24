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
    <section id="contact" className="py-20 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              09 — CONTACT
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Let's build something intelligent.
            </h2>

            <p className="text-slate-600 text-base sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
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
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-sm px-6 py-4 rounded-2xl transition-all shadow-md w-full sm:w-auto"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME (CV)</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono font-bold text-sm px-6 py-4 rounded-2xl border border-slate-200 transition-colors w-full sm:w-auto cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </motion.div>

          {/* DIRECT CONTACT INFO GRID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto pt-8 border-t border-slate-200"
          >
            <a
              href={PERSONAL_INFO.contact.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">
                  DIRECT GMAIL
                </span>
                <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {PERSONAL_INFO.contact.email}
                </span>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">
                  PHONE / WHATSAPP
                </span>
                <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {PERSONAL_INFO.contact.phone}
                </span>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">
                  LOCATION
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* SOCIAL ICONS */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors shadow-2xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors shadow-2xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 transition-colors shadow-2xs"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
