import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-links">
                <a href="mailto:arimorales2506@gmail.com" title="Email: arimorales2506@gmail.com"><MdEmail size={29} /></a>
                <a href="https://github.com/WhyNotAri" title="GitHub: WhyNotAri"><FaGithub size={29} /></a>
                <a href="https://www.linkedin.com/in/ari-morales-648486355/" title="LinkedIn: Ari Morales"><FaLinkedin size={29} /></a>
            </div>
        </section>
    )
}

export default Contact