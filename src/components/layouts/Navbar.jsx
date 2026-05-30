import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <a href="#home" className="logo" onClick={closeMenu}>Ari Morales</a>

            <button 
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle Navigation"
                aria-expanded={isMenuOpen}
            >
                <span className="hamburger"></span>
            </button>

            <nav className={`links ${isMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>
        </header>
    )
}

export default Navbar