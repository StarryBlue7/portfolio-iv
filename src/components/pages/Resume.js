import React from "react";

const styles = {
    resume: {
        width: "100%",
        height: "100%",
    },
    embed: {
        height: "800px",
        display: "flex",
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
function Resume({ resumeReady, setResumeReady }) {
    return (
        <section className="page resume">
            <h2>Résumé & CV</h2>
            <div id="embed-container" style={resumeReady ? styles.embed : {}}>
                <iframe
                    src="https://onedrive.live.com/embed?cid=F69DEF0A9F7B5ED0&resid=F69DEF0A9F7B5ED0%216772&authkey=AKaW1Y4jdXODH8A&em=2"
                    style={styles.resume}
                    title="cv"
                    frameborder="0"
                    scrolling="no"
                    onLoad={() => setResumeReady(true)}
                ></iframe>
            </div>
            <p style={styles.download}>
                <a
                    href="https://1drv.ms/b/c/f69def0a9f7b5ed0/QdBee58K750ggPZ0GgAAAAAAAP5uLIZ_oYx4XQ"
                    target="_blank"
                    rel="noreferrer"
                    download="Vince_Zak_CV"
                >
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
