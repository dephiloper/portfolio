import React, { useState } from 'react';
import '../pages/Home/styles.css'; // Ensure this points to the correct CSS file

export interface Project {
  id: number;
  title: string;
  year?: string;
  company?: string;
  description: string;
  role?: string;
  image: string;
  type: 'commercial' | 'private' | 'technical-art';
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectGrid: React.FC<{ projects: Project[]; onProjectClick: (project: Project) => void }> = ({ projects, onProjectClick }) => {
  const isOdd = projects.length % 2 === 1;
  const firstProject = isOdd ? projects[0] : null;
  const restProjects = isOdd ? projects.slice(1) : projects;

  return (
    <div className="project-grid-container">
      {firstProject && (
        <div className="project-grid single-center">
          <ProjectItem key={firstProject.id} project={firstProject} onClick={onProjectClick} />
        </div>
      )}
      <div className="project-grid">
        {restProjects.map((project) => (
          <ProjectItem key={project.id} project={project} onClick={onProjectClick} />
        ))}
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project; onClick: (project: Project) => void }> = ({ project, onClick }) => (
  <div className="project-grid-item" onClick={() => onClick(project)} style={{ cursor: 'pointer' }}>
    <div className="image-container">
      <img src={project.image} alt={project.title} />
      <div className="project-info-overlay">
        <p className="project-meta">
          {project.company && <span>{project.company}</span>}
          {project.year && <span> • {project.year}</span>}
          {project.role && (
            <>
              <br />
              <em>{project.role}</em>
            </>
          )}
        </p>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
    <h3 className="project-title">{project.title}</h3>
  </div>
);

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    console.log('Clicked project:', project);
    setSelectedProject(project);
  };

  const closeModal = () => setSelectedProject(null);

  const commercialProjects = projects.filter((p) => p.type === 'commercial');
  const gamesProjects = projects.filter((p) => p.type === 'private');
  const technicalArtProjects = projects.filter((p) => p.type === 'technical-art');

  return (
    <div className="project-list">
      <h2>Commercial</h2>
      {commercialProjects.length > 0 && (
        <ProjectGrid projects={commercialProjects} onProjectClick={handleProjectClick} />
      )}

      <h2>Games</h2>
      {gamesProjects.length > 0 && (
        <ProjectGrid projects={gamesProjects} onProjectClick={handleProjectClick} />
      )}

      <h2>Technical Art</h2>
      {technicalArtProjects.length > 0 && (
        <ProjectGrid projects={technicalArtProjects} onProjectClick={handleProjectClick} />
      )}

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{ width: '100%', marginBottom: '1rem' }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <p><strong>{selectedProject.company}</strong> • {selectedProject.year}</p>
            {selectedProject.role && <p><em>{selectedProject.role}</em></p>}
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
