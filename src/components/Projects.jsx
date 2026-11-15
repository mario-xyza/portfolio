import ProjectCard from './ProjectCard';
import { projects } from '../projects'; 
import './Projects.css';

function Projects({ texts, lang }) {
  return (
    <section id="proyectos" className="projects">
      <h2 className="projects-heading cal-sans-regular">{texts.heading}</h2>

      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          lang={lang}
          reverse={i % 2 === 1}
          cta={texts.viewProject}
        />
      ))}
    </section>
  );
}

export default Projects;