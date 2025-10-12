'use client';

import { motion } from 'framer-motion';

export default function PerformanceMetrics() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Performance That Converts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Lighthouse Score', value: '92+' },
            { label: 'Load Time', value: '2s' },
            { label: 'Form Conversions', value: '+40%' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl"
            >
              <div className="text-4xl font-bold text-gray-900">{metric.value}</div>
              <div className="mt-2 text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}