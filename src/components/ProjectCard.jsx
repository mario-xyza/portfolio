import './ProjectCard.css';
import MediaGallery from './MediaGallery';

function ProjectCard({ project, lang, reverse, cta }) {
  return (
    <article className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-info">
        <p className="project-meta">{project.meta[lang]}</p>
        <h3 className="project-title">{project.title[lang]}</h3>

        <ul className="project-tags">
          <li className="project-tag">{project.tag[lang]}</li>
          {project.stack.map((s) => (
            <li key={s} className="project-tag muted">{s}</li>
          ))}
        </ul>

        <p className="project-desc">{project.description[lang]}</p>

        {project.url && (
            <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                {cta} <span aria-hidden="true">→</span>
            </a>
        )}
      </div>

      {project.media ? (
        <div className="project-media-gallery">
            <MediaGallery media={project.media} lang={lang} title={project.title[lang]} />
        </div>
        ) : (
        <div className="project-media">
            <img src={project.image} alt={project.title[lang]} loading="lazy" />
        </div>
        )}
    </article>
  );
}

export default ProjectCard;