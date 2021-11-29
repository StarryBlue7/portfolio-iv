import React from 'react';
import resume from '../../assets/CV_VinceLee_2021.pdf'

const styles = {
    resume: {
        width: "100%",
        height: "60vh",
    }
}

// Resume & skills page
function Resume() {
    return (
        <section className="page">
            <h2>Résumé & CV</h2>
            <embed src={resume} style={styles.resume} />

            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Java</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>jQuery</li>
                <li>CSS/HTML5</li>
                <li>Responsive Web Design</li>
            </ul>
        </section>
    )
}

export default Resume;