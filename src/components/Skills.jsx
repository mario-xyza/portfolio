import { categories, skills } from '../skills';
//import './Skills.css';

function Skills({ texts, lang }) {
  return (
    <section id="habilidades" className="skills">
      <div className="skills-wrapper">
        <h2 className="skills-heading cal-sans-regular">{texts.heading}</h2>
        <div className="skills-divider" />

        <div className="skills-groups">
          {categories.map((c) => (
            <div key={c.id} className="skills-group">
              <h3 className="skills-group-title">{c.label[lang]}</h3>

              <ul className="skills-grid">
                {skills
                  .filter((s) => s.category === c.id)
                  .map(({ name, icon }) => (
                    <li key={name} className="skill-item">
                      <img src={icon} alt="" width="40" height="40" loading="lazy" />
                      <span>{name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;