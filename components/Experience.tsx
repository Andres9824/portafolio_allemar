import React from 'react';
import { EXPERIENCE, RESUME_DATA } from '../constants';
import { Briefcase, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16">
            
            {/* Header Column */}
            <div className="md:w-1/3">
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6 relative inline-block">
                    Experiencia
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"></span>
                </h2>
            </div>

            {/* Content Column */}
            <div className="md:w-2/3 space-y-12">
                {EXPERIENCE.map((job) => (
                    <div key={job.id} className="group relative pl-8 border-l border-slate-200 hover:border-primary transition-colors duration-300">
                        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-300 group-hover:border-primary transition-colors"></span>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">{job.role}</h3>
                            <span className="text-sm font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">{job.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium mb-4">
                            <Briefcase size={14} className="text-primary" />
                            {job.company}
                            <span className="mx-2 text-slate-300">|</span>
                            <MapPin size={14} className="text-primary" />
                            {job.location}
                        </div>

                        <ul className="space-y-2">
                            {job.description.map((desc, i) => (
                                <li key={i} className="text-slate-600 leading-relaxed text-sm flex gap-3">
                                    <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-slate-300 flex-shrink-0"></span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        {/* Education Highlight */}
        <div className="mt-24 pt-12 border-t border-slate-100">
             <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Formación Académica</h3>
                </div>
                <div className="md:w-2/3 grid gap-8">
                    {RESUME_DATA.education.map((edu, idx) => (
                        <div key={idx} className="flex justify-between items-start border-b border-slate-50 pb-4">
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg">{edu.degree}</h4>
                                <p className="text-slate-500">{edu.institution}</p>
                            </div>
                            <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                                {edu.period}
                            </span>
                        </div>
                    ))}
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;