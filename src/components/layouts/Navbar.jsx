import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(!document.documentElement.classList.contains('light'));

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleTheme = () => {
        const newIsDarkMode = document.documentElement.classList.toggle('light');
        setIsDarkMode(!newIsDarkMode);
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

                <button type="button" className="toggle-theme"
                    onClick={() => {
                        toggleTheme();
                        closeMenu();
                    }} aria-label="Toggle theme"
                >
                    {isDarkMode ? <FiSun size={20}/> : <FiMoon size={20}/>}
                </button>
            </nav>
        </header>
    )
}

export default Navbar