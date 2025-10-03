
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-brand-light/70 max-w-2xl mx-auto">
            Explora una selección de nuestro trabajo, donde la visión y la ejecución se unen para crear espacios excepcionales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
