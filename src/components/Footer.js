import React from 'react';

import emailIcon from '../assets/icons/envelope.svg';
import gitHubIcon from '../assets/icons/github.svg';
import linkedInIcon from '../assets/icons/linkedin.svg';

const styles = {
    iconBox: {
        display: "flex",
        gap: 20,
    },
    icon: {
        filter: "invert(1)",
        width: 50
    },
    text: {
        textAlign: "center",
        fontSize: "60%",
        position: "absolute",
        bottom: 5,
        transform: "translateX(-50%)",
        left: "50%"
    }
}

function Footer() {
    return (
        <footer style={styles.text}>
            <section style={styles.iconBox}>
                <a target="_blank" rel="noreferrer" href="mailto:StarryBlue7@gmail.com">
                    <img alt="Email" style={styles.icon} src={emailIcon} />
                </a>
                
                <a target="_blank" rel="noreferrer" href="https://github.com/StarryBlue7">
                    <img alt="GitHub" style={styles.icon} src={gitHubIcon} />
                </a>
                
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vince-lee">
                    <img alt="LinkedIn" style={styles.icon} src={linkedInIcon} />
                </a>
            </section>
            <p>&copy; Vince Lee 2021</p>
        </footer>
    )
}

export default Footer;