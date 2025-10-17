'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Before & After: The Transformation
        </motion.h2>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('before')}
              className={`flex-1 py-4 font-semibold text-lg ${
                activeTab === 'before'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              ❌ Before
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`flex-1 py-4 font-semibold text-lg ${
                activeTab === 'after'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              ✅ After
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'before' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Cluttered Design</h4>
                    <p className="text-red-700">Too many elements competing for attention</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">❌ No Clear CTA</h4>
                    <p className="text-red-700">Visitors didn't know what to do next</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Slow Loading</h4>
                    <p className="text-red-700">5+ second load times on mobile</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Generic Content</h4>
                    <p className="text-red-700">Didn't speak to specific client needs</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 text-white p-6 rounded-lg text-center">
                  <p className="text-lg">"My website looked dated and wasn't converting any clients"</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'after' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Clean & Focused</h4>
                    <p className="text-green-700">Clear visual hierarchy guiding to CTA</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Strong CTAs</h4>
                    <p className="text-green-700">Multiple clear paths to book calls</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Lightning Fast</h4>
                    <p className="text-green-700">Under 2-second load times</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Client-Focused</h4>
                    <p className="text-green-700">Content speaks directly to ideal clients</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg text-center">
                  <p className="text-lg">"Now my website feels like me and converts visitors into paying clients"</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}