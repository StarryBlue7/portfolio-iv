import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import Footer from './Footer';

const styles = {
    overflow: "hidden",
    minHeight: "98vh",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

function Main() {
    const [currentPage, setCurrentPage] = useState('');

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main style={styles}>
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
            
            <Footer />
        </main>
    );
}

export default Main;
