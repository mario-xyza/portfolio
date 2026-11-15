import { useState, useEffect } from 'react'
import { translations } from './translations';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

function App() {

  const [lang, setLang] = useState(getInitialLang());
  const t = translations[lang];

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      <div>
        <div className="texture" aria-hidden="true"></div>
        <Navbar texts={t.navbar} lang={lang} onToggleLang={toggleLanguage} />
        <Hero texts={t.hero} />
        <About texts={t.about} />
        <Projects texts={t.projects} lang={lang} />
        <Skills texts={t.skills} lang={lang} />
        <Footer texts={t.footer} />
      </div>
    </>
  )
}

export default App
