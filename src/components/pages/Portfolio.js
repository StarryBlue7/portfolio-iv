import React from 'react';
import Project from '../Project';
import Fade from 'react-reveal';

import projectData from '../../data/projectData.json';

function Portfolio() {
    return (
        <section>
            <h2>Portfolio</h2>
            <Fade cascade >
                {projectData.map(project => (
                    <Project project={project} />
                ))}
            </Fade>
        </section>
    );
}

export default Portfolio;