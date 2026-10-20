import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Formación', href: '#formacion' },
  { name: 'Contacto', href: '#contacto' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled || isMenuOpen ? 'is-scrolled' : ''}`}>
      <div className="wrap header__inner">
        <a href="#inicio" className="header__brand" onClick={() => setIsMenuOpen(false)}>
          A. Lema<span>.</span>
        </a>

        <button
          className="header__toggle"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="nav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="nav" className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
