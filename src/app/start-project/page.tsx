'use client';

import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, DollarSign, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function StartProject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const projectTypes = [
    'Website Development',
    'E-Commerce Platform',
    'Web Application',
    'UI/UX Design',
    'Performance Optimization',
    'Other'
  ];

  const budgets = [
    '$1,000 - $3,000',
    '$3,000 - $5,000', 
    '$5,000 - $8,000',
    '$8,000 - $15,000',
    '$15,000+'
  ];

  const timelines = [
    '2-4 weeks',
    '1-2 months', 
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

// در بخش handleSubmit فایل start-project/page.tsx
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
        type: 'project',
        data: formData
      }),
    });

    const result = await telegramResponse.json();
    
    if (result.success) {
      alert('Thank you! I will contact you within 2 hours to discuss your project. 📱');
      // ریست فرم
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
    } else {
      alert('Project submitted! (Telegram notification failed)');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Project submitted! (Notification service offline)');
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your <span className="text-cyan-400">Project</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let&apos;s turn your idea into a successful digital product. Fill out the form below and I&apos;ll get back to you within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Process Info */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700 sticky top-6">
                <h3 className="text-xl font-bold text-white mb-6">How It Works</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/20 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">1. Consultation</h4>
                      <p className="text-gray-300 text-sm">Free 30-minute call to discuss your project</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/20 p-2 rounded-lg">
                      <DollarSign className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">2. Proposal</h4>
                      <p className="text-gray-300 text-sm">Detailed project proposal with timeline & pricing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/20 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">3. Development</h4>
                      <p className="text-gray-300 text-sm">Agile development with weekly updates</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/20 p-2 rounded-lg">
                      <Clock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">4. Launch</h4>
                      <p className="text-gray-300 text-sm">Deployment and 30-day support period</p>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-8 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">✓ 100% Satisfaction Guarantee</h4>
                  <p className="text-green-300 text-sm">30-day support and revisions included</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Information */}
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

                  <div>
                    <label className="block text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition duration-300"
                      placeholder="Your Company (Optional)"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition duration-300"
                      >
                        <option value="">Select Type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Budget Range *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition duration-300"
                      >
                        <option value="">Select Budget</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition duration-300"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition duration-300"
                      placeholder="Please describe your project in detail: goals, target audience, features needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg"
                  >
                    Start My Project ›
                  </button>

                  <p className="text-center text-gray-400 text-sm">
                    I&apos;ll contact you within 2 hours to discuss your project
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}