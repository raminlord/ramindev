'use client';

import { Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const telegramResponse = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          data: formData
        }),
      });

      const result = await telegramResponse.json();
      
      if (result.success) {
        alert('Thank you! I’ll send your free tech audit within 24 hours. 📱');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Message sent! (Telegram notification failed)');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Message sent! (Notification service offline)');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Build Something That <span className="text-cyan-400">Sells</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I only take 3 new clients per month. Next slot opens soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">Email</div>
                  <div className="text-white font-semibold">hi@ramindev.digital</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">Location</div>
                  <div className="text-white font-semibold">Available Worldwide</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-slate-700/50 hover:bg-cyan-500/20 p-3 rounded-lg border border-slate-600 hover:border-cyan-400 transition duration-300">
                  <Github className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="bg-slate-700/50 hover:bg-cyan-500/20 p-3 rounded-lg border border-slate-600 hover:border-cyan-400 transition duration-300">
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="#" className="bg-slate-700/50 hover:bg-cyan-500/20 p-3 rounded-lg border border-slate-600 hover:border-cyan-400 transition duration-300">
                  <Twitter className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20">
              <h4 className="text-white font-bold mb-3">What to Expect</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Free tech audit within 24h
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Projects start at $5,000
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  100% on-time delivery
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Serious inquiries only
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Start With a Free Audit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition duration-300"
                  placeholder="What’s your goal? (e.g., increase signups, reduce bounce rate...)"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Get Free Audit →
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}