'use client';

import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with dashboard, payment integration, and inventory management.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    results: ["+45% Conversion Rate", "+60% Mobile Sales"]
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for B2B SaaS company with real-time data visualization and reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    results: ["-30% User Churn", "+50% Engagement"]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website for creative agency with smooth animations and optimized performance.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Website",
    results: ["90+ Lighthouse Score", "2s Load Time"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project is a testament to my expertise in delivering business-driven results through technical excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              
              {/* Project Image */}
              <div className="flex-1 group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 hover:border-cyan-400 transition-all duration-500">
                  <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center text-slate-400">
                      <div className="text-2xl mb-2">🚀</div>
                      <div>Project Preview</div>
                      <div className="text-sm mt-2">{project.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <div className="text-cyan-400 font-mono text-sm mb-4">
                  {project.category}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result, i) => (
                      <span 
                        key={i}
                        className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-slate-700/50 text-cyan-300 px-3 py-1 rounded-full text-sm border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-slate-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-300 mb-6 text-xl">
            Interested in working together?
          </p>
          <button className="group bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300 inline-flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}