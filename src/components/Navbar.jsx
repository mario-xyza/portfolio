import './Navbar.css';

function Navbar({texts , lang, onToggleLang}){
    return (
        <header className='navbar-container'>
            <div className='navbar-logo cal-sans-regular'>
                <a href="#inicio">Jesús Morales</a>
            </div>

            <nav className='navbar-links'>
                <a href="#sobre-mi">{texts.about}</a>
                <a href="#proyectos">{texts.projects}</a>
                <a href="#habilidades">{texts.skills}</a>
                <a href="#contacto" className='btn-contacto'>{texts.contact}</a>
            </nav>
        </header>
    )
}

export default Navbar;