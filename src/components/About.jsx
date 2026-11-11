import './About.css'

function About() {
    return (
        <section id='sobre-mi' className='about-container'>
            <div className='about-wrapper'>
                <h1 className='about-heading cal-sans-regular'>Sobre mí</h1>
                <div className='about-divider'></div>
                <div className='about-grid'>

                    <div className='about-left-col'>
                        <p className='about-bio'>Soy Jesús, estudiante de Ingeniería en TI. Me apasiona el desarrollo de software y la robótica a través de proyectos reales.</p>
                        <div className='about-contact'>
                            <div className="contact-block">
                                <span className="contact-label">Enfoque</span>
                                <span className="contact-text">Desarrollo & Robótica</span>
                            </div>

                            <div className="contact-block">
                                <span className="contact-label">Correo</span>
                                <a href="mailto:jesusmmoraleguzm@gmail.com" className="contact-link">
                                    jesusmmoraleguzm@gmail.com
                                </a>
                            </div>

                            <a href="https://github.com/mario-xyza" target='_blank' rel="noopener noreferrer" className="link-in-line">GitHub ↗</a>
                        </div>
                    </div>
                    <div className='about-right-col'>
                        <p className='about-text'>
                            Programo principalmente en Python, Java, C y C++. Mi trabajo se centra en desarrollar software funcional y sistemas aplicados, con experiencia en proyectos de robótica y vehículos autónomos que integran visión por computadora y modelos de lenguaje.
                        </p>
                        <p className='about-text'>
                            Actualmente curso la carrera de Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de San Luis Potosí, manteniendo un PGA de 9.65/10.0.
                        </p>
                        <p className='about-text'>
                            Soy Vicepresidente del Club de Robótica en la UPSLP, donde organizo torneos e imparto talleres de programación y electrónica. Además, cuento con experiencia mentoreando equipos de robótica (FIRST Tech Challenge y FIRST LEGO League).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;