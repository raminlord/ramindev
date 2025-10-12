// test10/src/app/projects/design-studio-portfolio/components/performancemetrics.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const metrics = [
  { id: 1, value: 92, label: 'Lighthouse Score', suffix: '/100' },
  { id: 2, value: 2, label: 'Load Time', suffix: 's' },
  { id: 3, value: 40, label: 'Conversion Increase', suffix: '%' },
  { id: 4, value: 95, label: 'User Satisfaction', suffix: '%' }
];

export default function PerformanceMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [animatedValues, setAnimatedValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const timers = metrics.map((metric, index) => {
        return setTimeout(() => {
          let start = 0;
          const duration = 2000;
          const increment = metric.value / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= metric.value) {
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = metric.value;
                return newValues;
              });
              clearInterval(timer);
            } else {
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.floor(start);
                return newValues;
              });
            }
          }, 16);
        }, index * 300);
      });

      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Performance Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from our ultra-fast portfolio implementation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {animatedValues[index]}
                <span className="text-2xl text-gray-600">{metric.suffix}</span>
              </div>
              <div className="text-gray-600 text-lg">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Before & After Performance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Load Time:</span>
                  <div className="flex items-center gap-4">
                    <span className="text-red-600 line-through">5s</span>
                    <span className="text-green-600 font-semibold">2s</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lighthouse Score:</span>
                  <div className="flex items-center gap-4">
                    <span className="text-red-600 line-through">65</span>
                    <span className="text-green-600 font-semibold">92</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full w-full mb-2" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Before: Slow & Frustrating</span>
                <span>After: Fast & Engaging</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}