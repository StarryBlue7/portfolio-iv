import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    listStyleType: "none",
    gap: 15,
    width: "100%",
    padding: 0,
    margin: 0,
    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
    fontSize: "80%",
}

// Navbar, change page location state on button clicks
function Navigation({ currentPage }) {
    return (
        <ul style={styles} className='nav'>
            <li><Link
                to="/portfolio-iv/" 
                className={currentPage === '/portfolio-iv/' ? 'active' : ''}
                >Home
            </Link></li>
            <li><Link
                to="/portfolio-iv/about" 
                className={currentPage === '/portfolio-iv/about' ? 'active' : ''}
                >About
            </Link></li>
            <li><Link
                to="/portfolio-iv/portfolio" 
                className={currentPage === '/portfolio-iv/portfolio' ? 'active' : ''}
                >Portfolio
            </Link></li>
            <li><Link
                to="/portfolio-iv/resume" 
                className={currentPage === '/portfolio-iv/resume' ? 'active' : ''}
                >Résumé
            </Link></li>
            <li><Link
                to="/portfolio-iv/contact" 
                className={currentPage === '/portfolio-iv/contact' ? 'active' : ''}
                >Contact
            </Link></li>
        </ul>
    );
}

export default Navigation;