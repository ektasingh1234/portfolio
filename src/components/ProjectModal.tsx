'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle, BarChart2, ShieldCheck, Activity } from 'lucide-react';
import { Project } from '@/data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white text-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-mono text-xs font-bold">
                  {project.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 font-mono text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {project.title}
              </h3>
              {project.fullTitle && (
                <p className="text-xs font-mono text-slate-500 font-bold tracking-wider uppercase mt-1">
                  {project.fullTitle}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {project.description}
            </p>

            {/* PRISM PHANTOM DETAILS IF AVAILABLE */}
            {project.phantomDetails && (
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-6">
                <div>
                  <div className="text-xs font-mono font-bold text-indigo-400 mb-1">
                    ENGINE ARCHITECTURE
                  </div>
                  <h4 className="text-xl font-bold">{project.phantomDetails.fullForm}</h4>
                  <p className="text-xs text-slate-300 mt-1">{project.phantomDetails.description}</p>
                </div>

                {/* SCORING FACTORS */}
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 mb-3 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-indigo-400" />
                    PHANTOM RECOVERY ENGINE WEIGHT DISTRIBUTION
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.phantomDetails.scoringFactors.map((f, idx) => (
                      <div key={idx} className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                        <div className="text-lg font-mono font-black text-indigo-400">{f.weight}%</div>
                        <div className="text-xs font-bold text-white">{f.label}</div>
                        <div className="text-[10px] text-slate-400">{f.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DECISION FLOW */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs font-mono font-bold text-slate-400 mb-2">INTELLIGENT DECISION ENGINE FLOW</div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-indigo-300 font-bold">
                    {project.phantomDetails.decisionFlow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 bg-slate-900 rounded border border-slate-800">{step}</span>
                        {idx < project.phantomDetails!.decisionFlow.length - 1 && <span className="text-slate-600">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TECH STACK */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                TECHNOLOGIES & FRAMEWORKS:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-indigo-600 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
