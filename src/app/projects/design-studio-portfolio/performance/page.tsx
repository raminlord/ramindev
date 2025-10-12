// test10/src/app/projects/design-studio-portfolio/performance/page.tsx
import Link from 'next/link';
import { Suspense } from 'react';
import LazyLoading from '../components/lazyloading';

export const metadata = {
  title: 'Performance Details | Design Studio Portfolio',
  description: 'Detailed performance metrics and optimization strategies',
};

const performanceDetails = [
  {
    category: 'Load Time Optimization',
    improvements: [
      'Reduced from 5s to 2s load time',
      'Static Generation (SSG) implementation',
      'Image optimization with Next.js Image',
      'Minimal JavaScript bundle'
    ]
  },
  {
    category: 'Lighthouse Score',
    improvements: [
      'Performance: 92/100',
      'Accessibility: 95/100', 
      'Best Practices: 93/100',
      'SEO: 96/100'
    ]
  },
  {
    category: 'Technical Optimizations',
    improvements: [
      'Code splitting and lazy loading',
      'CSS-in-JS optimization',
      'Bundle size reduction',
      'Progressive image loading'
    ]
  },
  {
    category: 'Business Impact',
    improvements: [
      '40% increase in form submissions',
      '75% reduction in bounce rate',
      '60% longer session duration',
      'Higher conversion rates'
    ]
  }
];

export default function PerformancePage() {
  return (
    <Suspense fallback={<LazyLoading />}>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Link 
              href="/projects/design-studio-portfolio" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-300"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Performance Details
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive breakdown of our optimization strategies and measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {performanceDetails.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.improvements.map((improvement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Boost Your Performance?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's transform your digital presence with our proven optimization strategies.
            </p>
            <Link 
              href="/projects/design-studio-portfolio#contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}