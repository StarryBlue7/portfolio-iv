import React from "react";
import { FaGithub } from "react-icons/fa";

const styles = {
    h4: {
        marginBottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    card: {
        flex: "1 1 60%",
    },
    image: {
        objectFit: "cover",
        width: "100%",
    },
};

function Project({ project, imgLoaded }) {
    return (
        <summary style={styles.card}>
            <h4 style={styles.h4}>
                <a target="_blank" rel="noreferrer" href={project.deployed_url}>
                    {project.title}
                </a>
                <a target="_blank" rel="noreferrer" href={project.github_url}>
                    <FaGithub />
                </a>
            </h4>
            <a
                target="_blank"
                rel="noreferrer"
                href={project.deployed_url}
                style={styles.imgBox}
            >
                <img
                    alt={project.title}
                    src={project.img_url}
                    style={styles.image}
                    onLoad={() => imgLoaded()}
                />
            </a>
        </summary>
    );
}

export default Project;
