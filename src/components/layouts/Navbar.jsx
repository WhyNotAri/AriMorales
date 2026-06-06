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

            <nav className={`links ${isMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>

            <div className="navbar-actions">
                <button
                    type="button" className="toggle-theme" onClick={toggleTheme} aria-label="Toggle theme"
                >
                    {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation" aria-expanded={isMenuOpen}
                >
                    <span className="hamburger"></span>
                </button>
            </div>
        </header>
    )
}

export default Navbar