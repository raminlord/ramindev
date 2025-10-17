'use client';

import { motion } from 'framer-motion';

export default function Testimonial() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border border-purple-100"
        >
          <div className="text-6xl mb-6 text-center">💫</div>
          
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 text-center leading-relaxed mb-8">
             &quot This website finally feels like me and attracts exactly the kind of clients I want to work with. 
            The transformation in my business has been incredible - I went from zero paying clients to fully 
            booking my coaching program in just 3 weeks! &quot
          </blockquote>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                EC
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-lg">Emma Clark</div>
                <div className="text-gray-600">Life Coach & Business Mentor</div>
              </div>
            </div>
            
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-400">⭐</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Perfect Match Clients</h4>
            <p className="text-gray-600 text-sm">Attracting clients who value my expertise</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="text-2xl mb-2">💸</div>
            <h4 className="font-semibold mb-2">Higher Value Clients</h4>
            <p className="text-gray-600 text-sm">Clients willing to invest in transformation</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="font-semibold mb-2">Business Growth</h4>
            <p className="text-gray-600 text-sm">Scaled from solo to group coaching</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}