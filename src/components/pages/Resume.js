import React from 'react';

const styles = {
    resume: {
        width: "100%",
        height: "65vh",
    }
}

// Resume & skills page
function Resume() {
    return (
        <section className="page resume">
            <h2>Résumé & CV</h2>
            <iframe 
                src="https://onedrive.live.com/embed?cid=F69DEF0A9F7B5ED0&resid=F69DEF0A9F7B5ED0%216772&authkey=AKaW1Y4jdXODH8A&em=2" 
                style={styles.resume} 
                title="cv"
                frameborder="0" 
                scrolling="no"
            ></iframe>

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