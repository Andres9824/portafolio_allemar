import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-serif font-bold text-slate-900 tracking-tight">
            ALema<span className="text-primary">Rubio</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-sm font-medium text-slate-600 hover:text-primary transition-colors tracking-wide uppercase text-[11px]"
                >
                    {link.name}
                </a>
            ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 md:hidden flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-xl font-serif text-slate-800 hover:text-primary block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {link.name}
                </a>
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;