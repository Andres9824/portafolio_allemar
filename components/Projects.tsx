import React from 'react';
import { ArrowUpRight, Award } from 'lucide-react';
import { PROJECTS } from '../constants';
import SectionHead from './SectionHead';

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="section section--deep">
      <div className="wrap">
        <SectionHead
          num="02 — Proyectos"
          title="Investigación aplicada"
          intro="Machine Learning e ingeniería de datos al servicio de preguntas de política pública."
        />

        <div className="projects">
          {PROJECTS.map((project, index) => (
            <article key={project.id} className="project">
              <div>
                <p className="project__index">{String(index + 1).padStart(2, '0')}</p>
                <p className="project__date mono">{project.date}</p>
              </div>
              <div>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__context">{project.context}</p>
                {project.award && (
                  <p className="award">
                    <Award size={15} /> {project.award}
                  </p>
                )}
                <ul className="bullets">
                  {project.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                {project.links?.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="project__link">
                    {link.label} <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
