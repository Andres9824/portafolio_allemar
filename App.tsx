import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/10 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      
      <footer className="py-12 bg-slate-50 border-t border-slate-200 text-center text-slate-500 text-sm font-serif italic">
        <p>© {new Date().getFullYear()} Andrés Leonardo Lema Rubio. Economía & Ciencia de Datos.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;