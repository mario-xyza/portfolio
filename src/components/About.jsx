import './About.css'

function About({texts}) {
    return (
        <section id='sobre-mi' className='about-container'>
            <div className='about-wrapper'>
                <h1 className='about-heading cal-sans-regular'>{texts.heading}</h1>
                <div className='about-divider'></div>
                <div className='about-grid'>

                    <div className='about-left-col'>
                        <p className='about-bio'>{texts.bio}</p>
                        <div className='about-contact'>
                            <div className="contact-block">
                                <span className="contact-label">{texts.availabilityLabel}</span>
                                <span className="contact-text">{texts.availabilityText}</span>
                            </div>

                            <div className="contact-block">
                                <span className="contact-label">{texts.emailLabel}</span>
                                <a href="mailto:jesusmmoraleguzm@gmail.com" className="contact-link">
                                    jesusmmoraleguzm@gmail.com
                                </a>
                            </div>

                            <a href="https://github.com/mario-xyza" target='_blank' rel="noopener noreferrer" className="link-in-line">GitHub ↗</a>
                        </div>
                    </div>
                    <div className='about-right-col'>
                        <p className='about-text'>
                            {texts.p1}
                        </p>
                        <p className='about-text'>
                            {texts.p2}
                        </p>
                        <p className='about-text'>
                            {texts.p3}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;