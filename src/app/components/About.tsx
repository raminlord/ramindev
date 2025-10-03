'use client';

import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: <Award className="w-6 h-6" />, number: "15+", label: "Projects Completed" },
  { icon: <Users className="w-6 h-6" />, number: "12+", label: "Happy Clients" },
  { icon: <Clock className="w-6 h-6" />, number: "3+", label: "Years Experience" },
  { icon: <CheckCircle className="w-6 h-6" />, number: "100%", label: "Client Satisfaction" }
];

const skills = [
  { name: "Next.js/React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Performance Optimization", level: 93 }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer focused on creating digital solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Crafting Digital Excellence
              </h3>
              <p className="text-gray-300 mb-4 text-lg">
                I'm a full-stack developer specializing in modern web technologies. 
                My journey began 3+ years ago, and since then I&apos;ve helped numerous 
                businesses establish their online presence with cutting-edge solutions.
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                I believe in <span className="text-cyan-400">code that matters</span> - 
                every line should serve a purpose, whether it&apos;s improving user experience, 
                boosting performance, or driving conversions.
              </p>
              <p className="text-gray-300 text-lg">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or optimizing web performance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="text-cyan-400 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Download Resume
            </button>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              My Development Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="text-cyan-400 text-3xl mb-4">🚀</div>
                <h4 className="text-white font-bold mb-2">Performance First</h4>
                <p className="text-gray-300 text-sm">
                  Every website should load instantly and provide smooth user experience
                </p>
              </div>
              <div className="p-6">
                <div className="text-cyan-400 text-3xl mb-4">💡</div>
                <h4 className="text-white font-bold mb-2">Business Driven</h4>
                <p className="text-gray-300 text-sm">
                  Code should solve real business problems and deliver measurable results
                </p>
              </div>
              <div className="p-6">
                <div className="text-cyan-400 text-3xl mb-4">🔧</div>
                <h4 className="text-white font-bold mb-2">Maintainable Code</h4>
                <p className="text-gray-300 text-sm">
                  Clean, documented code that&apos;s easy to scale and maintain over time
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}