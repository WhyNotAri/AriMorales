import RevealSection from '../RevealSection'

function Hero() {
    return (
        <RevealSection id="home">
            <p>Hi, I'm <span>Ari Morales</span></p>
            <h1>A Software Engineering Student</h1>
            <p>
                I build apps using Java Spring Boot, Python and React,
                focusing on practical, maintainable, scalable and user-friendly solutions.
            </p>

            {/*<div>
                <a href="#" className="btn">My Projects</a>
                <a href="#" className="btn">Contact Me</a>
            </div>*/}
        </RevealSection>
    )
}

export default Hero