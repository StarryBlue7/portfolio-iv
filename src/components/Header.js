import React from 'react';
import profileImg from '../assets/images/profile.png';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <img alt="Vince Lee" src={profileImg} />
            <h1>Vince Lee</h1> 
            <h3>Full Stack Web Developer</h3>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}  />
        </header>
    )
}

export default Header;