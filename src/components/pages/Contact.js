import React from 'react';
import emailIcon from '../../assets/icons/envelope.svg';
import gitHubIcon from '../../assets/icons/github.svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';

function Contact() {
    return (
        <section>
            <h2>Contact Me</h2>
            <section>
                <a target="_blank" rel="noreferrer" href="mailto:StarryBlue7@gmail.com">
                    <img alt="Email" src={emailIcon} />
                    <h5>E-mail</h5>
                </a>
                
                <a target="_blank" rel="noreferrer" href="https://github.com/StarryBlue7">
                    <img alt="GitHub" src={gitHubIcon} />
                    <h5>GitHub</h5>
                </a>
                
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vince-lee">
                    <img alt="LinkedIn" src={linkedInIcon} />
                    <h5>LinkedIn</h5>
                </a>
            </section>
        </section>
    )
}

export default Contact;