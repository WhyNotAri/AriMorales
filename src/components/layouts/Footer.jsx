function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Ari Morales.</p>
                <div className="footer-links">
                    <a href="https://github.com/WhyNotAri" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ari-morales-648486355/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;