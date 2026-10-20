import React from 'react';
import { EXPERIENCE } from '../constants';
import SectionHead from './SectionHead';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="section">
      <div className="wrap">
        <SectionHead
          num="01 — Experiencia"
          title="Trabajo con datos y territorio"
          intro="Consultorías para gobiernos municipales del Ecuador: planes de uso y gestión del suelo, gestión de riesgos, cartografía y patrimonio."
        />

        <div>
          {EXPERIENCE.map((job) => (
            <article key={job.id} className="job">
              <div className="job__when mono">
                {job.periods.map((period) => (
                  <span key={period}>{period}</span>
                ))}
                <span className="job__type">{job.type}</span>
              </div>
              <div>
                <h3 className="job__role">{job.role}</h3>
                <p className="job__org">
                  <strong>{job.company}</strong>
                  {job.client && <> · {job.client}</>}
                  {' · '}
                  {job.location}
                </p>
                <ul className="bullets">
                  {job.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
