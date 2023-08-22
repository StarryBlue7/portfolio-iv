import React from "react";
import resume from "../../assets/CV_VinceLeeZak_2023.pdf";

const styles = {
    resume: {
        width: "100%",
        height: "65vh",
    },
    download: {
        width: "100%",
        textAlign: "center",
        fontSize: "60%",
        marginTop: 0,
        marginBottom: 60,
    },
};

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
            <p style={styles.download}>
                <a href={resume} download>
                    Download
                </a>
            </p>

            <h2>Skills</h2>
            <ul>
                <li>JavaScript, TypeScript</li>
                <li>React, JSX, Redux</li>
                <li>Node, Express</li>
                <li>SQL, Seqeuelize, PostgreSQL</li>
                <li>NoSQL, MongoDB, Mongoose</li>
                <li>GraphQL</li>
                <li>C#, .NET</li>
                <li>Python</li>
                <li>jQuery</li>
                <li>CSS/HTML5</li>
                <li>SEO & Responsive Web Design</li>
            </ul>
        </section>
    );
}

export default Resume;
