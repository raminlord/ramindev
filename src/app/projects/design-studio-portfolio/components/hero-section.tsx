'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-center max-w-4xl leading-tight"
      >
        From <span className="text-gray-400 line-through">5s</span> to <span className="text-black">2s</span> Load Time
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-center max-w-2xl text-gray-600"
      >
        A high-performance portfolio that keeps clients engaged — not waiting.
      </motion.p>
      <motion.div
        style={{ y }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gray-300 rounded-full"
      />
    </section>
  );
}