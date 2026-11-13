import './Hero.css';

function Hero({texts}) {
  return (
    <section id="inicio" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title cal-sans-regular">Jesús Morales</h1>
        <p className="hero-subtitle">{texts.subtitle}</p>
      </div>
    </section>
  );
}

export default Hero;