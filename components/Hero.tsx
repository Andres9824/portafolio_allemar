import React from 'react';
import { Github, Mail } from 'lucide-react';
import { RESUME_DATA, PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 bg-slate-50">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-2">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
                {RESUME_DATA.name.split(' ')[0]} <br />
                {RESUME_DATA.name.split(' ')[2]}
                </h1>
                <p className="text-xl text-slate-500 font-light italic">
                Economista & Data Scientist
                </p>
            </div>
            
            <div className="space-y-2">
                <p className="text-m text-slate-500 font-light italic">
                leonardorubio1998@gmail.com
                </p>
                <p className="text-m text-slate-500 font-light italic">
                (+593) 986357872
                </p>
            </div>
            <p className="text-slate-600 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg font-light">
              {RESUME_DATA.summary}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="px-8 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Mail size={16} /> Contactar
              </a>
              <a 
                href={RESUME_DATA.contact.github}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 border border-slate-300 bg-white text-slate-700 hover:border-slate-800 hover:text-slate-900 transition-all flex items-center gap-2"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
            
            <div className="pt-8 border-t border-slate-200 flex justify-center md:justify-start gap-8 text-slate-400">
                <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-slate-800 font-serif">2+</p>
                    <p className="text-xs uppercase tracking-wider">Años Exp.</p>
                </div>
                <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-slate-800 font-serif">100%</p>
                    <p className="text-xs uppercase tracking-wider">Data Driven</p>
                </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center md:justify-end relative">
             <div className="relative">
                <div className="absolute top-4 right-4 w-full h-full border-2 border-primary rounded-tr-[80px] rounded-bl-[80px] -z-10"></div>
                <img 
                src={PROFILE_IMAGE_URL} 
                alt={RESUME_DATA.name}
                className="w-80 h-96 lg:w-[400px] lg:h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;