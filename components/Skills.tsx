import React from 'react';
import { SKILLS } from '../constants';
import SectionHead from './SectionHead';

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="section">
      <div className="wrap">
        <SectionHead num="03 — Habilidades" title="Herramientas de trabajo" />

        <div className="skills">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="skill">
              <h3 className="skill__title">{skill.category}</h3>
              <ul className="skill__items">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
