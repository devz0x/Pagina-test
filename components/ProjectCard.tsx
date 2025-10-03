
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden bg-brand-gray cursor-pointer">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-sm uppercase tracking-widest text-brand-accent">{project.category}</p>
        <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-in-out">
          <p className="text-sm text-brand-light/90">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
