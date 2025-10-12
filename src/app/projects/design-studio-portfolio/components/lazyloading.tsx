// test10/src/app/projects/design-studio-portfolio/components/lazyloading.tsx
'use client';
import { motion } from 'framer-motion';

export default function LazyLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          Loading Ultra-Fast Portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
}