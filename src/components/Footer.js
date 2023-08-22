import React from "react";

import { BiMailSend } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const styles = {
    iconBox: {
        display: "flex",
        justifyContent: "center",
        gap: 20,
    },
    icon: {
        fontSize: "300%",
    },
    footer: {
        marginTop: "10vh",
        textAlign: "center",
        fontSize: "50%",
        justifySelf: "flex-end",
        zIndex: 1,
    },
};

function Footer() {
    return (
        <footer style={styles.footer}>
            <section style={styles.iconBox}>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:vince.lee.dev@gmail.com"
                >
                    <BiMailSend style={styles.icon} />
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/StarryBlue7"
                >
                    <FaGithub style={styles.icon} />
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/vince-lee-zak"
                >
                    <FaLinkedin style={styles.icon} />
                </a>
            </section>
            <p>&copy; Vince Lee Zak 2022</p>
        </footer>
    );
}

export default Footer;
