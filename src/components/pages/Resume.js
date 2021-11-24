import React from 'react';
import resume from '../../assets/CV_VinceLee_2021.pdf'

const styles = {
    resume: {
        width: "100%",
        height: "60vh",
    }
}

// Resume page
function Resume() {
    return (
        <section className="page">
            <h2>Résumé & CV</h2>
            <embed src={resume} style={styles.resume} />
        </section>
    )
}

export default Resume;