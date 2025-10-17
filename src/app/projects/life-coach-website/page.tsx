import HeroSection from './components/herosection';
import ProblemSection from './components/problemsection';
import SolutionSection from './components/solutionsection';
import BeforeAfter from './components/beforeafter';
import ResultsSection from './components/resultssection';
import Testimonial from './components/testimonial';
import CTASection from './components/ctasection';

export default function LifeCoachCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BeforeAfter />
      <ResultsSection />
      <Testimonial />
      <CTASection />
    </div>
  );
}