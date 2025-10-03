'use client';

import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  // در بخش handleSubmit فایل Contact.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // ارسال به تلگرام
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
      alert('Thank you! I will get back to you within 24 hours. 📱');
      // ریست فرم
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      });
    } else {
      alert('Message sent! (Telegram notification failed)');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Message sent! (Notification service offline)');
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            Let's <span className="text-cyan-400">Work Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your digital presence to the next level? Let's discuss your project!
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
                  <div className="text-white font-semibold">reslami1250@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">Phone</div>
                  <div className="text-white font-semibold">+98(914)2539332</div>
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
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Free initial consultation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Detailed project proposal
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Transparent pricing
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition duration-300"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Project Budget *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition duration-300"
                  >
                    <option value="">Select Budget</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000 - $8,000">$5,000 - $8,000</option>
                    <option value="$8,000+">$8,000+</option>
                  </select>
                </div>
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
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}