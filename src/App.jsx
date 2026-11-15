import { useState } from 'react'
import { translations } from './translations';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects';

function App() {

  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <>
    <div>
      <div className="texture" aria-hidden="true"></div>
      <Navbar texts={t.navbar} lang={lang} onToggleLang={toggleLanguage} />
      <Hero texts={t.hero}/>
      <About texts={t.about}/>
      <Projects texts={t.projects} lang={lang}/>
    </div>
    </>
  )
}

export default App
