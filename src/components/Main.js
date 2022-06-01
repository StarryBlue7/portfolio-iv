import React from 'react';
import { useLocation } from 'react-router-dom';

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
        justifyContent: "flex-start",
        marginRight: "calc(-1 * (100vw - 100%))" // Prevent content shifting by scrollbar appearance
    },
    spacer: {
        flexGrow: 1 // Spacer to keep Footer at bottom on smaller pages
    }
}

// Main page
function Main() {
    // Page location state
    const currentPage = useLocation().pathname;

    return (
        <main style={styles.main}>
            <Header 
                currentPage={currentPage} 
            />

            {/* Conditional reveal animations based on page location state */}
            <Fade bottom collapse when={currentPage === '/portfolio-iv/about'}>
                <AboutMe />
            </Fade>
            <Fade bottom collapse when={currentPage === '/portfolio-iv/portfolio'}>
                <Portfolio />
            </Fade>
            <Fade bottom collapse when={currentPage === '/portfolio-iv/resume'}>
                <Resume />
            </Fade>
            <Fade bottom collapse when={currentPage === '/portfolio-iv/contact'}>
                <Contact />
            </Fade>
            <div style={styles.spacer} />
            <Footer />
        </main>
    );
}

export default Main;
