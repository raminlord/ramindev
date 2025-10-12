// test10/src/app/projects/design-studio-portfolio/page.tsx
import { Suspense } from 'react';
import HeroSection from './components/herosection';
import WorkShowcase from './components/workshowcase';
import PerformanceMetrics from './components/performancemetrics';
import ContactForm from './components/contactform';
import SmoothScrolling from './components/smoothscrolling';
import LazyLoading from './components/lazyloading';

export const metadata = {
  title: 'Design Studio Portfolio | Ultra-Fast Performance',
  description: 'A high-performance design studio portfolio with 90+ Lighthouse score and 2s load time',
};

export default function DesignStudioPortfolio() {
  return (
    <SmoothScrolling>
      <div className="min-h-screen bg-white">
        <Suspense fallback={<LazyLoading />}>
          <HeroSection />
          <WorkShowcase />
          <PerformanceMetrics />
          <ContactForm />
        </Suspense>
      </div>
    </SmoothScrolling>
  );
}
