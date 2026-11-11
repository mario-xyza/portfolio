import './Navbar.css';

function Navbar(){
    return (
        <header className='navbar-container'>
            <div className='navbar-logo cal-sans-regular'>
                <a href="#inicio">Jesús Morales</a>
            </div>

            <nav className='navbar-links'>
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contacto" className='btn-contacto'>Contacto</a>
            </nav>
        </header>
    )
}

export default Navbar;