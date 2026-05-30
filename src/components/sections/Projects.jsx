const projects = [
    {
        title: 'Minecraft Java Plugin',
        description: 'A Minecraft Java plugin using Paper API to create a custom command that gives the player a compass to track a player.',
        technologies: [
            'Java 25',
            'Paper API',
            'Gradle'
        ],
        url: 'https://github.com/WhyNotAri/Track-A-Player',
        reason: "I made it because I wanted to play a minigame called Manhunt in Minecraft with my friends and I couldn't find a proper mod or plugin that did it."
    },
    {
        title: 'Virus Auto Scanner',
        description: 'A virus auto scanner using Python and VirusTotal API to check if a downloaded file is a threat.',
        technologies: [
            'Python 3.12',
            'VirusTotal API',
        ],
        url: 'https://github.com/WhyNotAri/VirusDownloadsScan',
        reason: "I made it because I wanted to learn Python and because I'm a paranoid who wants to keep his PC safe."
    },
    {
        title: 'E-Commerce Web Application',
        description: 'An e-commerce web application built with Java Spring Boot and PostgreSQL.',
        technologies: [
            'Java Spring Boot',
            'PostgreSQL',
            'HTML',
            'CSS',
            'JavaScript',
        ],
        url: 'https://github.com/WhyNotAri/MySales',
        reason: "I made it because I wanted to learn Java Spring Boot and I wanted to see how backend is connected to frontend using a persistent database."
    },
    {
        title: 'Orders Management System',
        description: 'Another web application now built with Php Laravel and Vue.js to manage orders',
        technologies: [
            'Php Laravel',
            'MySQL',
            'Vue.js',
        ],
        url: 'https://github.com/WhyNotAri/HALCON',
        reason: "It was a school project where we had to build a web application to manage orders while following the software development lifecycle."
    },
    {
        title: 'Portfolio Website',
        description: 'A portfolio website built with React and Vite.',
        technologies: [
            'React',
            'Vite',
        ],
        url: 'https://github.com/WhyNotAri/AriMorales',
        reason: "I made it because I wanted to learn React and Vite and I wanted to showcase my projects."
    },
    {
        title: 'Orders Organiser',
        description: 'An app to organise orders for people who have his own small business.',
        technologies: [
            'Java Spring Boot',
            'PostgreSQL',
            'React Native',
        ],
        url: 'https://github.com/WhyNotAri',
        reason: "I saw a friend struggling with some organisation in his small business and I'm making this app to help him."
    }
];

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects