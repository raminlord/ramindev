import HeroSection from './components/hero-section';
import WorkShowcase from './components/work-showcase';
import PerformanceMetrics from './components/performance-metrics';
import ContactForm from './components/contact-form';
import SmoothScrolling from './components/smooth-scrolling';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Studio Portfolio | Ultra-Fast Showcase',
  description: 'A high-performance portfolio for a modern design studio. Load time: under 2s. Lighthouse score: 90+.',
};

export default function DesignStudioPortfolio() {
  return (
    <SmoothScrolling>
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <HeroSection />
        <WorkShowcase />
        <PerformanceMetrics />
        <ContactForm />
      </main>
    </SmoothScrolling>
  );
}