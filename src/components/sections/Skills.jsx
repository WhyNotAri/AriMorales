function Skills() {
    const mySkills = [
        {
            category: 'Backend',
            skills: ['Java Spring Boot', 'Python']
        },
        {
            category: 'Frontend',
            skills: ['React', 'JavaScript', 'HTML', 'CSS']
        },
        {
            category: 'Tools',
            skills: ['Git', 'GitHub Actions', 'Postman', 'Docker', 'Kubernetes', 'AWS']
        }
    ]

    return (
        <section id="skills">
            <h2>Skills</h2>
            <p>
                I'm currently improving my skills and building projects that helps me strengthen my
                backend, frontend and deployment skills.
            </p>
            <div className="skills">
                {mySkills.map((category, index) => (
                    <div key={index} className="category">
                        <h3>{category.category}</h3>
                        <ul>
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills