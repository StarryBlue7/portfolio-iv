import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import Footer from './Footer';

const styles = {
    main: {
        overflow: "hidden",
        minHeight: "100vh",
        flexGrow: 1,
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    spacer: {
        flexGrow: 1
    }
}

function Main() {
    const [currentPage, setCurrentPage] = useState('');

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main style={styles.main}>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />

            <Fade bottom collapse when={currentPage === 'About'}>
                <AboutMe />
            </Fade>
            <Fade bottom collapse when={currentPage === 'Portfolio'}>
                <Portfolio />
            </Fade>
            <Fade bottom collapse when={currentPage === 'Resume'}>
                <Resume />
            </Fade>
            <Fade bottom collapse when={currentPage === 'Contact'}>
                <Contact />
            </Fade>
            <div style={styles.spacer} />
            <Footer />
        </main>
    );
}

export default Main;
