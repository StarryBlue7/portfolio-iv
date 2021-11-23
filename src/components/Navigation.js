import React from 'react';

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

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul style={styles}>
            <li><a
                href="#home" onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'active' : ''}
                >Home
            </a></li>
            <li><a
                href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'active' : ''}
                >About
            </a></li>
            <li><a
                href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'active' : ''}
                >Portfolio
            </a></li>
            <li><a
                href="#resume" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'active' : ''}
                >Résumé
            </a></li>
            <li><a
                href="#contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'active' : ''}
                >Contact
            </a></li>
        </ul>
    );
}

export default Navigation;