'use client';

import Navbar from './components/navbar';
import Services from './components/services';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Navbar />
      
      <main className="pt-20">
        <section id="home" className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I Build
            <span className="text-cyan-400 block mt-2">Digital Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Specialized in creating fast, modern, and user-friendly websites for international businesses
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Contact Me
            </button>
          </div>
        </section>

        <Services />
        <Projects />
        <About />
        <Contact />
        
      </main>
    </div>
  );
}