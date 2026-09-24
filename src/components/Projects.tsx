'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, Project } from '@/data/portfolioData';
import { Sparkles, ExternalLink, Activity, ArrowRight, BarChart2, ShieldCheck, CheckCircle, Play, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Interactive PHANTOM Simulator state
  const [phantomCondition, setPhantomCondition] = useState<'Brand New / Sealed' | 'Light Use' | 'Damaged Box' | 'Defective'>('Light Use');

  const getPhantomScore = () => {
    let score = 78;
    if (phantomCondition === 'Brand New / Sealed') score = 94;
    else if (phantomCondition === 'Light Use') score = 78;
    else if (phantomCondition === 'Damaged Box') score = 65;
    else if (phantomCondition === 'Defective') score = 32;

    let decision = 'RESELL';
    let pathColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 85) { decision = 'RESELL (Grade A+)'; }
    else if (score >= 60) { decision = 'REFURBISH & REPACKAGE'; pathColor = 'text-blue-600 bg-blue-50 border-blue-200'; }
    else if (score >= 40) { decision = 'RECYCLE COMPONENTS'; pathColor = 'text-amber-600 bg-amber-50 border-amber-200'; }
    else { decision = 'ECO-DISPOSAL'; pathColor = 'text-rose-600 bg-rose-50 border-rose-200'; }

    return { score, decision, pathColor };
  };

  const phantomResult = getPhantomScore();

  const prismProject = PROJECTS[0];
  const neuroProject = PROJECTS[1];
  const mlopsProject = PROJECTS[2];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            04 — PROJECTS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Things I've built.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 font-normal">
            Production-grade AI applications, evaluation-driven RAG pipelines, and scalable MLOps architectures.
          </p>
        </motion.div>

        <div className="space-y-12">
          
          {/* ======================================================== */}
          {/* 01 — PRISM (FEATURED LARGE CARD) */}
          {/* ======================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-400"></div>

            {/* CARD TOP HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-mono text-xs font-bold border border-indigo-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    {prismProject.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-medium border border-slate-200">
                    {prismProject.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {prismProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 font-bold tracking-wider uppercase mt-0.5">
                  {prismProject.fullTitle}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setSelectedProject(prismProject)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect</span>
                </button>

                {prismProject.links.github && (
                  <a
                    href={prismProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {prismProject.links.liveDemo && (
                  <a
                    href={prismProject.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl font-normal">
              "{prismProject.description}"
            </p>

            {/* HIGHLIGHTED PHANTOM RECOVERY ENGINE BLOCK */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-8 border border-slate-800 shadow-2xl relative">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
                <div>
                  <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30 mb-1">
                    RECOVERY INTELLIGENCE ENGINE
                  </span>
                  <h4 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                    PHANTOM
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    Predictive Heuristic Asset Navigation & Transition Optimization Matrix
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-normal">
                  "PHANTOM is a recovery intelligence engine that scores returned products and routes them to their optimal second life: Resell, Refurbish, Recycle, or Dispose."
                </p>
              </div>

              {/* 6 FACTOR SCORING RADIAL / WEIGHT BAR */}
              <div className="mb-8">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-indigo-400" />
                  PHANTOM RECOVERY ENGINE SCORING WEIGHTS
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { label: 'Condition', weight: '30%', desc: 'Physical state' },
                    { label: 'Demand', weight: '20%', desc: 'Resale velocity' },
                    { label: 'Resale Potential', weight: '20%', desc: 'Margin yield' },
                    { label: 'Repair Feasibility', weight: '10%', desc: 'Parts cost' },
                    { label: 'Return Reason', weight: '10%', desc: 'Buyer feedback' },
                    { label: 'Sustainability Impact', weight: '10%', desc: 'Carbon offset' },
                  ].map((factor, idx) => (
                    <div key={idx} className="bg-slate-800/90 p-3 rounded-xl border border-slate-700/80 text-center">
                      <div className="text-xl font-mono font-black text-indigo-400">{factor.weight}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{factor.label}</div>
                      <div className="text-[10px] text-slate-400">{factor.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ANIMATED DECISION ENGINE FLOW */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div className="text-xs font-mono font-bold text-slate-300">
                    INTELLIGENT DECISION ENGINE — AUTOMATED RECOVERY ROUTING
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Automatically routes returned products to their optimal recovery path.
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-1.5">
                    RESELL
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 hidden sm:inline" />
                  </div>
                  <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 font-mono text-xs font-bold flex items-center justify-center gap-1.5">
                    REFURBISH
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400 hidden sm:inline" />
                  </div>
                  <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold flex items-center justify-center gap-1.5">
                    RECYCLE
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 hidden sm:inline" />
                  </div>
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 font-mono text-xs font-bold flex items-center justify-center gap-1.5">
                    DISPOSE
                  </div>
                </div>
              </div>

              {/* LIVE SIMULATION DEMO WIDGET */}
              <div className="bg-slate-800/60 p-4 rounded-xl border border-indigo-500/30">
                <div className="text-xs font-mono font-bold text-indigo-300 mb-3 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  TRY PHANTOM LIVE RECOVERY SIMULATION:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">SELECT ITEM CONDITION:</label>
                    <select
                      value={phantomCondition}
                      onChange={(e) => setPhantomCondition(e.target.value as any)}
                      className="w-full bg-slate-900 text-white text-xs font-mono p-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Brand New / Sealed">Brand New / Sealed</option>
                      <option value="Light Use">Light Use</option>
                      <option value="Damaged Box">Damaged Box</option>
                      <option value="Defective">Defective</option>
                    </select>
                  </div>

                  <div className="text-center bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                    <span className="text-[10px] font-mono text-slate-400 block">COMPUTED SCORE:</span>
                    <span className="text-xl font-mono font-black text-indigo-400">
                      {phantomResult.score} / 100
                    </span>
                  </div>

                  <div className={`p-2.5 rounded-lg border text-center font-mono text-xs font-bold ${phantomResult.pathColor}`}>
                    <span className="text-[10px] text-slate-500 block">OPTIMAL ROUTE:</span>
                    {phantomResult.decision}
                  </div>
                </div>
              </div>

            </div>

            {/* PRODUCT PASSPORT & SUSTAINABILITY DASHBOARD METRICS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* PRODUCT PASSPORT */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  PRODUCT PASSPORT (7-STAGE LIFECYCLE TRACKER)
                </h5>
                <div className="space-y-1.5 font-mono text-xs text-slate-600">
                  {prismProject.phantomDetails?.passportStages.map((stage, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {sIdx + 1}
                      </span>
                      <span>{stage.substring(3)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUSTAINABILITY DASHBOARD */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-900 mb-3 flex items-center justify-between">
                  <span>SUSTAINABILITY DASHBOARD METRICS</span>
                  <span className="text-[10px] text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full font-mono font-bold">REAL-TIME</span>
                </h5>
                <p className="text-xs text-slate-600 mb-4 font-mono">"Real-time Sustainability Impact Dashboard"</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-3 rounded-xl border border-indigo-100 shadow-2xs">
                    <div className="text-lg font-mono font-black text-indigo-700">2.4T</div>
                    <div className="text-[10px] font-bold text-slate-600">CARBON SAVED</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-indigo-100 shadow-2xs">
                    <div className="text-lg font-mono font-black text-emerald-700">18.5k</div>
                    <div className="text-[10px] font-bold text-slate-600">WASTE DIVERTED</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-indigo-100 shadow-2xs">
                    <div className="text-lg font-mono font-black text-violet-700">4,200</div>
                    <div className="text-[10px] font-bold text-slate-600">GREEN CREDITS</div>
                  </div>
                </div>
              </div>

            </div>

            {/* TECH STACK & FOOTNOTE */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase mr-2">TECH STACK:</span>
                {prismProject.techStack.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-mono text-slate-400 italic">
                * Built for Amazon HackOn Season 6.
              </span>
            </div>
          </motion.article>


          {/* ======================================================== */}
          {/* 02 — NEUROSEARCH */}
          {/* ======================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
                    {neuroProject.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-mono text-xs font-bold border border-indigo-200">
                    {neuroProject.secondaryBadge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-medium border border-slate-200">
                    {neuroProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                  {neuroProject.title}
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    87% RAGAS Faithfulness
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(neuroProject)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect</span>
                </button>

                {neuroProject.links.github && (
                  <a
                    href={neuroProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-700 text-base mb-6 leading-relaxed">
              "{neuroProject.description}"
            </p>

            <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 text-xs font-mono font-bold text-indigo-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              BUILT DURING INTERNSHIP — Hybrid BM25 + FAISS retrieval with Groq LLaMA3
            </div>

            {/* RAG RETRIEVAL PIPELINE DIAGRAM */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 mb-6">
              <div className="text-xs font-mono font-bold text-indigo-400 mb-3 uppercase tracking-wider">
                RETRIEVAL PIPELINE DIAGRAM:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
                {neuroProject.ragDetails?.retrievalPipeline.map((step, idx) => (
                  <div key={idx} className="bg-slate-800 p-2.5 rounded-lg border border-slate-700 font-bold">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
              {[
                'Hybrid BM25 + FAISS retrieval',
                'PDF chat interface',
                'Session memory tracking',
                'SQLite authentication',
                'Cited answer generation',
                'Dockerized deployment'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/70 border border-slate-200 text-xs text-slate-800 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase mr-2">TECH STACK:</span>
              {neuroProject.techStack.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>


          {/* ======================================================== */}
          {/* 03 — ML PLATFORM */}
          {/* ======================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-mono text-xs font-bold">
                    {mlopsProject.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-medium border border-slate-200">
                    {mlopsProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {mlopsProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(mlopsProject)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors self-start lg:self-auto"
              >
                <Eye className="w-4 h-4" />
                <span>Inspect</span>
              </button>
            </div>

            <p className="text-slate-700 text-base mb-6 leading-relaxed">
              "{mlopsProject.description}"
            </p>

            {/* MLOPS ARCHITECTURE DIAGRAM */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 mb-6">
              <div className="text-xs font-mono font-bold text-indigo-400 mb-3 uppercase tracking-wider">
                END-TO-END MLOPS ARCHITECTURE:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-center text-xs font-mono">
                {mlopsProject.mlopsDetails?.architecture.map((step, idx) => (
                  <div key={idx} className="bg-slate-800 p-2 rounded-lg border border-slate-700 font-bold">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
              {[
                'Feature store using Feast',
                'ML experiment tracking using MLflow',
                'Model monitoring using Evidently AI',
                'Redis-backed serving',
                'A/B testing workflows',
                'Ollama batching & inference',
                'Prometheus + Grafana observability'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/70 border border-slate-200 text-xs text-slate-800 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase mr-2">TECH STACK:</span>
              {mlopsProject.techStack.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>

        </div>

      </div>

      {/* PROJECT INSPECTION MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
