'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 right-0 bottom-0 w-1 z-40 pointer-events-none hidden md:block">
      <div className="w-full h-full bg-slate-200/50">
        <motion.div
          className="w-full bg-indigo-600 origin-top rounded-b-full shadow-sm"
          style={{ scaleY }}
        />
      </div>
    </div>
  );
}
