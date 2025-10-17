'use client';

import { motion } from 'framer-motion';

export default function SolutionSection() {
  const features = [
    {
      icon: '💫',
      title: 'Conversion-Focused Design',
      description: 'Every element designed to guide visitors toward booking calls'
    },
    {
      icon: '📱',
      title: 'Mobile-First Approach',
      description: 'Flawless experience on all devices - where most clients browse'
    },
    {
      icon: '🎯',
      title: 'Client-Attracting Messaging',
      description: 'Speaks directly to ideal clients and their transformation'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Performance',
      description: 'Under 2-second load times for better SEO and user experience'
    },
    {
      icon: '📅',
      title: 'Integrated Booking System',
      description: 'Seamless calendar integration for instant call scheduling'
    },
    {
      icon: '✨',
      title: 'Authentic Brand Story',
      description: 'Showcases your unique personality and coaching style'
    }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Solution: A Client-Attraction Machine
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We transformed Emma &quots outdated website into a conversion-optimized platform that speaks directly to her ideal clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg border border-blue-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Investment: $1,200</h3>
          <p className="text-lg opacity-90">
            One-time payment for a complete, conversion-optimized website that pays for itself with your first few clients
          </p>
        </motion.div>
      </div>
    </section>
  );
}