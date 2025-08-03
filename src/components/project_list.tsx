import React, { useState, useEffect } from 'react';
import '../pages/Home/styles.css';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export interface Project {
  id: number;
  title: string;
  year?: string;
  company?: string;
  description: string;
  longDescription?: string;
  role?: string;
  image: string;
  video?: string; // <-- optional video URL (webm)
  type: 'commercial' | 'private' | 'technical-art';
  websiteLink?: string;
  projectLink?: string;
  githubLink?: string;
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

const ProjectItem: React.FC<{ project: Project; onClick: (project: Project) => void }> = ({ project, onClick }) => {
  const isHauntedCleaner = project.id == 1;

  return (
    <div
      className={`project-grid-item ${isHauntedCleaner ? 'haunted-cleaner' : ''}`}
      onClick={() => onClick(project)}
      style={{ cursor: 'pointer' }}
    >
      {isHauntedCleaner && (
        <>
          <img
            src="/Char_Rebecca_Ghost.webp"
            className="ghost-image ghost-left"
            alt="Char Jones Ghost"
          />
          <img
            src="/Char_Jones.webp"
            className="ghost-image ghost-right"
            alt="Rebecca Ghost"
          />
        </>
      )}
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
};


const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedProject]);

  const handleProjectClick = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const commercialProjects = projects.filter((p) => p.type === 'commercial');
  const gamesProjects = projects.filter((p) => p.type === 'private');
  const technicalArtProjects = projects.filter((p) => p.type === 'technical-art');

  return (
    <div className="project-list">
      <h2 className="project-heading-style">Commercial</h2>
      {commercialProjects.length > 0 && (
        <ProjectGrid projects={commercialProjects} onProjectClick={handleProjectClick} />
      )}

      <h2 className="project-heading-style">Jam Games</h2>
      {gamesProjects.length > 0 && (
        <ProjectGrid projects={gamesProjects} onProjectClick={handleProjectClick} />
      )}

      <h2 className="project-heading-style">Technical Art</h2>
      {technicalArtProjects.length > 0 && (
        <ProjectGrid projects={technicalArtProjects} onProjectClick={handleProjectClick} />
      )}

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>×</button>

            <div className="project-modal-content">
              <h2 className="project-modal-title project-heading-style">{selectedProject.title}</h2>

              <div className="project-modal-meta">
                <strong>{selectedProject.company}</strong>
                {selectedProject.year && <span> • {selectedProject.year}</span>}
              </div>

              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="project-modal-video"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-modal-image"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              )}

              {selectedProject.role && (
                <div className="project-modal-role">{selectedProject.role}</div>
              )}

              {selectedProject.longDescription && (
                <div className="project-modal-long-description">
                  {parse(DOMPurify.sanitize(selectedProject.longDescription))}
                </div>
              )}
            </div>
          </div>

          {(selectedProject.projectLink || selectedProject.githubLink || selectedProject.websiteLink) && (
            <div className="fixed-project-modal-links" onClick={(e) => e.stopPropagation()}>
              {selectedProject.projectLink && (
                <a
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  🎮 Play Game
                </a>
              )}
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  📁 View Code
                </a>
              )}
              {selectedProject.websiteLink && (
                <a
                  href={selectedProject.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  🌐 Show Website
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
