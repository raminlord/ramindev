'use client';

import { Code, Palette, Smartphone, Zap, Search, Shield } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Web Development",
    description: "Full-stack web applications built with modern technologies like Next.js, React, and TypeScript.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    price: "$5,000+"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered designs that convert visitors into customers and drive business growth.",
    features: ["User Research", "Wireframing", "Prototyping"],
    price: "$3,000+"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First Development",
    description: "Websites that look and perform perfectly on all devices, with mobile users as priority.",
    features: ["PWA Ready", "Touch Optimized", "Cross-Browser"],
    price: "$4,500+"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Lightning-fast websites that load in under 2 seconds and score 90+ on Lighthouse.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting"],
    price: "$2,500+"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Analytics",
    description: "Data-driven strategies to improve your search rankings and track user behavior.",
    features: ["Technical SEO", "Google Analytics", "Conversion Tracking"],
    price: "$1,800+"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website secure, updated, and performing at its best.",
    features: ["Security Updates", "Backup Solutions", "24/7 Monitoring"],
    price: "$500/month"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Services That <span className="text-cyan-400">Drive Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I don&apos;t just build websites - I create digital solutions that solve business problems and deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-700/30 rounded-xl p-8 border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>

              {/* Price */}
              <div className="text-cyan-400 font-bold text-lg mb-4">
                {service.price}
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-cyan-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Online Presence?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help you achieve your business goals with a custom web solution.
          </p>
          <Link 
            href="/start-project"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}