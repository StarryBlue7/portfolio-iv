import React from 'react';
import profileImg from '../assets/images/profile.png';

function Header() {
    return (
        <header>
            <img alt="Vince Lee" src={profileImg} />
            <h1>Vince Lee</h1> 
            <h3>Full Stack Web Developer</h3>
        </header>
    )
}

export default Header;