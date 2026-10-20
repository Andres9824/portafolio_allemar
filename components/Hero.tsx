import React from 'react';
import { ArrowDown, Github } from 'lucide-react';
import { RESUME_DATA, PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <p className="eyebrow">{RESUME_DATA.name} · {RESUME_DATA.contact.location}</p>
            <h1 className="hero__title">
              {RESUME_DATA.title}.
              <em>{RESUME_DATA.tagline}</em>
            </h1>
            <hr className="hero__rule" />
            <p className="hero__summary">{RESUME_DATA.summary}</p>
            <p className="hero__tools mono">Python · SQL · GeoPandas · Power BI · Databricks · R · Stata</p>

            <div className="hero__actions">
              <a href="#contacto" className="btn btn--solid">
                Contactar <ArrowDown size={15} />
              </a>
              <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>

          <figure className="hero__figure">
            <img src={PROFILE_IMAGE_URL} alt={`Retrato de ${RESUME_DATA.name}`} className="hero__photo" />
            <figcaption className="hero__caption mono">Economía · Datos · Territorio</figcaption>
          </figure>
        </div>

        <div className="facts">
          {RESUME_DATA.highlights.map((fact) => (
            <div key={fact.label} className="fact">
              <p className="fact__value">{fact.value}</p>
              <p className="fact__label">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
