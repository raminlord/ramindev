'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          The Problem: Big Heart, Outdated Website
        </motion.h2>

        <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-6 mb-8 transform rotate-1">
          <div className="bg-gray-800 p-6 rounded border-2 border-gray-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-gray-400 text-sm">www.emmaclarkcoaching-old.com</div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-900 p-4 rounded">
                <h3 className="text-yellow-400 text-xl font-comic">Welcome to My Coaching Site!</h3>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1/4 bg-gray-700 p-4 rounded">
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-600 rounded"></div>
                    <div className="h-3 bg-gray-600 rounded"></div>
                    <div className="h-3 bg-gray-600 rounded"></div>
                  </div>
                </div>
                
                <div className="w-3/4 bg-gray-700 p-4 rounded">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="h-20 bg-gray-600 rounded"></div>
                    <div className="h-20 bg-gray-600 rounded"></div>
                    <div className="h-20 bg-gray-600 rounded"></div>
                  </div>
                  <div className="h-4 bg-gray-600 rounded mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                </div>
              </div>
              
              <div className="bg-red-900 p-3 rounded text-center">
                <button className="bg-blue-700 px-6 py-2 rounded text-white hover:bg-blue-800 transition-colors">
                  Click Here!
                </button>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-3xl mb-2">😔</div>
            <h3 className="font-semibold mb-2">Zero Conversions</h3>
            <p className="text-gray-400">Beautiful website, but no paying clients</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold mb-2">Not Mobile-Friendly</h3>
            <p className="text-gray-400">Lost 60% of potential clients on mobile</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">Wrong Message</h3>
            <p className="text-gray-400">Attracting free seekers instead of paying clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}