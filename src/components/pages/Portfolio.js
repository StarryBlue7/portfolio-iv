import React from 'react';
import Project from '../Project';

// Import project data JSON
import projectData from '../../data/projectData.json';

const styles = {
    projects: {
        display: 'flex',
        flexFlow: 'row wrap-reverse',
    },
    project: {
        flex: '1 1 30%'
    }
}

// Portfolio page
function Portfolio() {
    return (
        <section className="page">
            <h2>Portfolio</h2>
            {/* Map project data to list */}
            <article style={styles.projects}>
                {projectData.map((project, i) => (
                    <Project project={project} key={i} style={styles.project} />
                ))}
            </article>
        </section>
    );
}

export default Portfolio;