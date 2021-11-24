import React from 'react';
import resume from '../../assets/CV_VinceLee_2021.pdf'

function Resume() {
    return (
        <section className="page">
            <h2>Résumé</h2>
            <embed src={resume} />
        </section>
    )
}

export default Resume;