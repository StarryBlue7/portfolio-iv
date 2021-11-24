import React from 'react';
import ContactForm from '../ContactForm';

// Contact page
function Contact() {
    return (
        <section className="page" style={{paddingBottom: "20vh"}}>
            <h2>Contact Me</h2>
            <ContactForm />
        </section>
    )
}

export default Contact;