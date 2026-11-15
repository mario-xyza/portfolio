import { useState } from 'react';
import './MediaGallery.css';

const thumb = (item) => {
  if (item.type === 'video') return `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;
  if (item.type === 'file') return item.poster;
  return item.src;
};

function MediaGallery({ media, lang, title }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = media[active];

  const select = (i) => {
    setActive(i);
    setPlaying(false);  
  };

  return (
    <div className="gallery">
      <div className="gallery-stage">
        {current.type === 'file' && (
        <video
            key={current.src}
            src={current.src}
            poster={current.poster}
            controls
            playsInline
            preload="metadata"
        />
        )}
        
        {current.type === 'image' && (
          <img src={current.src} alt={current.alt?.[lang] ?? title} />
        )}

        {current.type === 'video' && !playing && (
          <button
            type="button"
            className="gallery-play"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${current.alt?.[lang] ?? title}`}
          >
            <img src={thumb(current)} alt="" />
            <span className="gallery-play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
            </span>
          </button>
        )}

        {current.type === 'video' && playing && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
            title={current.alt?.[lang] ?? title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {media.length > 1 && (
        <ul className="gallery-thumbs">
          {media.map((item, i) => (
            <li key={i}>
              <button
                type="button"
                className={i === active ? 'active' : ''}
                onClick={() => select(i)}
                aria-label={item.alt?.[lang] ?? `${i + 1}`}
                aria-current={i === active}
              >
                <img src={thumb(item)} alt="" loading="lazy" />
                {(item.type === 'video' || item.type === 'file') && (
                    <span className="thumb-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="10" height="10">
                        <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                    </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MediaGallery;