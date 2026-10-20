import React from 'react';
import { CERTIFICATIONS, EDUCATION, RESUME_DATA } from '../constants';
import SectionHead from './SectionHead';

const Education: React.FC = () => {
  return (
    <section id="formacion" className="section section--deep">
      <div className="wrap">
        <SectionHead num="04 — Formación" title="Estudios y certificaciones" />

        <div className="edu">
          <div>
            <p className="eyebrow edu__label">Educación</p>
            {EDUCATION.map((item) => (
              <div key={item.degree} className="degree">
                <h3 className="degree__title">{item.degree}</h3>
                <p className="degree__meta">{item.institution}</p>
                <p className="degree__period mono">{item.period}</p>
                {item.note && <p className="degree__note mono">{item.note}</p>}
              </div>
            ))}

            <div className="langs">
              {RESUME_DATA.languages.map((lang) => (
                <p key={lang.name}>
                  {lang.name} <span>· {lang.level}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow edu__label">Certificaciones</p>
            <ul className="certs">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.name}>
                  <div>
                    <span className="certs__name">{cert.name}</span>
                    {cert.issuer && <span className="certs__issuer">{cert.issuer}</span>}
                  </div>
                  {cert.date && <span className="certs__date mono">{cert.date}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
