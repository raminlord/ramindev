'use client';

import { motion } from 'framer-motion';
import { LazyLoadImage } from './lazy-loading';

const works = [
  { id: 1, title: 'Brand Identity', src: '/work1.jpg' },
  { id: 2, title: 'Web Redesign', src: '/work2.jpg' },
  { id: 3, title: 'Mobile App UI', src: '/work3.jpg' },
  { id: 4, title: 'Packaging', src: '/work4.jpg' },
];

export default function WorkShowcase() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Selected Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <LazyLoadImage
                src={work.src}
                alt={work.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 bg-white">
                <h3 className="font-semibold text-lg">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}