import React from 'react';
import { Github, MapPin, Phone } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  const { contact } = RESUME_DATA;

  return (
    <section id="contacto" className="contact">
      <div className="wrap">
        <p className="eyebrow">05 — Contacto</p>
        <h2 className="contact__title">
          Conversemos sobre <em>datos</em> y territorio.
        </h2>
        <a href={`mailto:${contact.email}`} className="contact__email">
          {contact.email}
        </a>

        <div className="contact__list">
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="contact__item">
            <span className="eyebrow"><Phone size={13} /> Teléfono · WhatsApp</span>
            <span className="contact__value">{contact.phone}</span>
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="contact__item">
            <span className="eyebrow"><Github size={13} /> GitHub</span>
            <span className="contact__value">{contact.githubUser}</span>
          </a>
          <div className="contact__item">
            <span className="eyebrow"><MapPin size={13} /> Ubicación</span>
            <span className="contact__value">{contact.location}</span>
          </div>
        </div>

        <footer className="footer mono">
          <span>© {new Date().getFullYear()} {RESUME_DATA.name}</span>
          <span>Economía &amp; Ciencia de Datos</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
