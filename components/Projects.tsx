import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-8">
            <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Portafolio</span>
                <h2 className="text-4xl font-serif font-bold text-slate-900">Proyectos Destacados</h2>
            </div>
            <a href="https://github.com/Andres9824" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium mt-4 md:mt-0">
                <Github size={18} /> Explorar repositorio completo
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
                <div key={project.id} className="group flex flex-col h-full bg-slate-50 border border-slate-100 hover:border-slate-300 transition-all duration-300 rounded-none hover:shadow-xl">
                    <div className="p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-bold text-white bg-slate-900 px-3 py-1 uppercase tracking-wider">
                                {project.category.split(' ')[0]}
                            </span>
                            <ArrowUpRight className="text-slate-300 group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-light">
                            {project.description}
                        </p>

                        <div className="pt-6 border-t border-slate-200">
                             <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-4">
                                {project.links?.map((link, i) => (
                                    <a 
                                        key={i} 
                                        href={link.url}
                                        className="text-sm font-bold text-slate-900 hover:text-primary flex items-center gap-1 transition-colors underline decoration-slate-300 hover:decoration-primary underline-offset-4"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="https://github.com/Andres9824" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-primary pb-1">
                Ver todo en GitHub <ArrowUpRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;