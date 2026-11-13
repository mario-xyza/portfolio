import { useState } from 'react'
import { translations } from './translations';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <>
    <div>
      <Navbar texts={t.navbar} lang={lang} onToggleLang={toggleLanguage} />
      <Hero texts={t.hero}/>
      <About texts={t.about}/>
    </div>
    </>
  )
}

export default App
