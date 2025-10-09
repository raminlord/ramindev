'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md fixed w-full z-50 border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
            YourName
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition duration-300">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition duration-300">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-cyan-400 transition duration-300">Projects</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition duration-300">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition duration-300">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="block text-white hover:text-cyan-400 transition duration-300 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('services')} className="block text-white hover:text-cyan-400 transition duration-300 w-full text-left">Services</button>
            <button onClick={() => scrollToSection('projects')} className="block text-white hover:text-cyan-400 transition duration-300 w-full text-left">Projects</button>
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-cyan-400 transition duration-300 w-full text-left">About</button>
            <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-cyan-400 transition duration-300 w-full text-left">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}