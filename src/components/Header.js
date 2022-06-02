import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import profileImg from '../assets/images/profile.png';
import Navigation from './Navigation';

const styles = {
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    profile: {
        paddingBottom: 10,
    },
    profilePhoto: {
        paddingTop: "15vh",
    },
    h1: {
        margin: "-20px 0px 0px 0px",
        fontSize: "300%",
    },
    h3: {
        margin: "-25px 0px 10px 0px",
        fontSize: "75%",
        fontWeight: "normal",
    }
}

function Header({ currentPage }) {
    // Profile img loading state
    const [imgReady, setImgReady] = useState(false);

    return (
        <header style={styles.header}>
            <Fade top collapse when={currentPage === '/' && imgReady === true}>
                <img 
                    style={styles.profilePhoto} 
                    className="profile-img"
                    alt="Vince Lee" 
                    src={profileImg}
                    onLoad={() => setImgReady(true)} 
                />
                <h1 style={styles.h1}>Vince Lee</h1> 
                <h3 style={styles.h3}>Full-Stack Web Developer</h3>
            </Fade>
            <Navigation 
                currentPage={currentPage} 
            />
        </header>
    )
}

export default Header;