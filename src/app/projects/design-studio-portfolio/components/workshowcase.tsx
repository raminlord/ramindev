// test10/src/app/projects/design-studio-portfolio/components/workshowcase.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: '/api/placeholder/600/400',
    delay: 0.1
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    image: '/api/placeholder/600/400',
    delay: 0.2
  },
  {
    id: 3,
    title: 'Mobile App UI',
    category: 'App Design',
    image: '/api/placeholder/600/400',
    delay: 0.3
  },
  {
    id: 4,
    title: 'Dashboard Design',
    category: 'UI/UX',
    image: '/api/placeholder/600/400',
    delay: 0.4
  },
  {
    id: 5,
    title: 'Packaging Design',
    category: 'Product Design',
    image: '/api/placeholder/600/400',
    delay: 0.5
  },
  {
    id: 6,
    title: 'Marketing Site',
    category: 'Web Development',
    image: '/api/placeholder/600/400',
    delay: 0.6
  }
];

export default function WorkShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our Design Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with attention to performance and user experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: project.delay }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9SQHLJwqXqUFFI//Z"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}