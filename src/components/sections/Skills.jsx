import RevealSection from '../RevealSection'

function Skills() {
    const mySkills = [
        {
            category: 'Backend',
            skills: ['Java', 'Spring Boot', 'Python', 'REST APIs', 'SQL', 'MySQL', 'PostgreSQL']
        },
        {
            category: 'Frontend',
            skills: ['React', 'CSS', 'JavaScript', 'HTML', 'Responsive Design']
        },
        {
            category: 'Tools',
            skills: ['Git', 'GitHub Actions', 'Postman', 'Docker', 'Kubernetes', 'CLI', 'AWS']
        }
    ]

    return (
        <RevealSection id="skills">
            <h2>Skills</h2>
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
        </RevealSection>
    )
}

export default Skills