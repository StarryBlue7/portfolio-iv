import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import Footer from './Footer';

function Main() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'About': return <AboutMe />;
            case 'Portfolio': return <Portfolio />;
            case 'Resume': return <Resume />;
            case 'Contact': return <Contact />;
            default: return <Home />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className="portfolio-page">
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </main>
    );
}

export default Main;
