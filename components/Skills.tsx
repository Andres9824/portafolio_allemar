import React from 'react';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { Database, Code, Award, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Stack Tecnológico</span>
                <h2 className="text-4xl font-serif font-bold text-slate-900">Dominio Técnico</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SKILLS.map((skill, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-primary">
                            {idx === 0 ? <Code /> : idx === 1 ? <Database /> : <Layers />}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-6 font-serif border-b border-slate-100 pb-2">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) => (
                                <span key={i} className="px-3 py-1.5 text-sm bg-slate-50 text-slate-600 rounded-md font-medium border border-slate-100">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                     <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <Award className="w-8 h-8 text-primary" />
                     </div>
                     <h3 className="text-2xl font-serif font-bold text-slate-900">Certificaciones & Logros</h3>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                             <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                             <p className="text-slate-600 font-medium leading-tight">{cert}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;