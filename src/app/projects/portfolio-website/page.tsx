import { ArrowLeft, ExternalLink, Github, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

export default function EcommerceProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <header className="border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-Commerce Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Full-stack e-commerce solution with advanced features and seamless user experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-slate-700 h-96 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <div className="text-4xl mb-4">🛒</div>
                  <div>E-Commerce Platform Preview</div>
                  <div className="text-sm mt-2">Online store & dashboard</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Completed: Nov 2024</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Client: Retail Business</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a href="#" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a href="#" className="w-full border border-slate-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  Source Code
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">About This Project</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A complete e-commerce platform featuring product management, shopping cart, 
              payment integration, and admin dashboard. Built with modern technologies 
              for scalability and optimal performance.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}