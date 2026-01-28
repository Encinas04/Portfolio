import './Header.css'
function Header() {


    function Header() {
        return (
            <header className="header">
                {/* 1. EL LOGO (Izquierda) */}
                <div className="logo">
                    <span>&lt;</span>
                    TuNombre
                    <span>/&gt;</span>
                </div>

                {/* 2. EL MENÚ (Derecha) */}
                <nav className="navbar">
                    <a href="#projects">Proyectos</a>
                    <a href="#skills">Habilidades</a>
                    {/* Este último parece un botón pero es un enlace */}
                    <a href="#contact" className="btn-contact">Hablemos</a>
                </nav>
            </header>
        )
    }

    export default Header

}
export default Header;