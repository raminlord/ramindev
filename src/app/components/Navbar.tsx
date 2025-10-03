'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md fixed w-full z-50 border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            YourName
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition duration-300">Home</a>
            <a href="#services" className="text-white hover:text-cyan-400 transition duration-300">Services</a>
            <a href="#projects" className="text-white hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="#about" className="text-white hover:text-cyan-400 transition duration-300">About</a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition duration-300">Contact</a>
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
            <a href="#home" className="block text-white hover:text-cyan-400 transition duration-300">Home</a>
            <a href="#services" className="block text-white hover:text-cyan-400 transition duration-300">Services</a>
            <a href="#projects" className="block text-white hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="#about" className="block text-white hover:text-cyan-400 transition duration-300">About</a>
            <a href="#contact" className="block text-white hover:text-cyan-400 transition duration-300">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}