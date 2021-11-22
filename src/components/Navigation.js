import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav">
        <li className="">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li className="">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li className="">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'active' : ''}
          >
            Portfolio
          </a>
        </li>
        <li className="">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'active' : ''}
          >
            Resume
          </a>
        </li>
        <li className="">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }

export default Navigation;