import React, { useEffect } from "react";
import Project from "../Project";

// Import project data JSON
import projectData from "../../data/projectData.json";

const styles = {
    projects: {
        display: "flex",
        flexFlow: "row wrap-reverse",
    },
    project: {
        flex: "1 1 30%",
    },
};

// Portfolio page
function Portfolio({ setImgsStatus }) {
    // Build image loading status array
    useEffect(() => {
        setImgsStatus(projectData.map(() => false));
    }, [setImgsStatus]);

    // Set individual image status to ready
    const imgLoaded = (i) => () => {
        setImgsStatus((prev) => {
            let newStatus = [...prev];
            newStatus[i] = true;
            return newStatus;
        });
    };

    return (
        <section className="page">
            <h2>Portfolio</h2>
            {/* Map project data to list */}
            <article style={styles.projects}>
                {projectData.map((project, i) => (
                    <Project
                        project={project}
                        key={i}
                        style={styles.project}
                        imgLoaded={imgLoaded(i)}
                    />
                ))}
            </article>
        </section>
    );
}

export default Portfolio;
