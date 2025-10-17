'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <span ref={ref}>
      {isInView ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}

export default function ResultsSection() {
  const stats = [
    { number: 12, label: 'New Client Inquiries', emoji: '📥' },
    { number: 7, label: 'Paid Sessions Booked', emoji: '💰' },
    { number: 3, label: 'Weeks After Launch', emoji: '⚡' },
    { number: 1200, label: 'Investment Returned', emoji: '🎯', suffix: '%' }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Real Results in Just 3 Weeks
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center mb-12 opacity-90 max-w-2xl mx-auto"
        >
          Emma is new website started delivering results immediately after launch
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">The ROI Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">$1,200</div>
              <div className="opacity-90">Website Investment</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$3,500+</div>
              <div className="opacity-90">Client Revenue</div>
            </div>
            <div>
              <div className="text-2xl font-bold">291%</div>
              <div className="opacity-90">ROI in 3 Weeks</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}