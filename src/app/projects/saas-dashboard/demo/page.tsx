'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // ✅ اضافه کردن import

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-12"
        >
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HR Analytics Dashboard
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our enterprise-grade SaaS dashboard with real-time analytics, 
            role-based access control, and comprehensive HR insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📊', title: 'Real-time Analytics', desc: 'Live data visualization' },
              { icon: '👥', title: 'Role-based Views', desc: 'HR, Manager, Employee' },
              { icon: '📈', title: 'Advanced Reporting', desc: 'PDF, Excel, CSV exports' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects/saas-dashboard"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Launch Dashboard
            </Link>
            
            <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              View Documentation
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion
          </div>
        </motion.div>
      </div>
    </div>
  );
}