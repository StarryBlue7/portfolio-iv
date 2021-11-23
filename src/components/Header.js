import React from 'react';
import Slide from 'react-reveal/Slide';
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
        paddingTop: "15vh",
        paddingBottom: 10,
    },
    profilePhoto: {
        width: 325,
    },
    h1: {
        margin: "-20px 0px 0px 0px",
        fontSize: "300%",
    },
    h3: {
        margin: "-25px 0px 0px 0px",
        fontSize: "75%",
        fontWeight: "normal",
    }
}

function Header({ currentPage, handlePageChange }) {
    return (
        <header style={styles.header}>
            <Slide top collapse when={currentPage === 'Home'}>
                <div style={styles.profile}>
                    <img style={styles.profilePhoto} alt="Vince Lee" src={profileImg} />
                    <h1 style={styles.h1}>Vince Lee</h1> 
                    <h3 style={styles.h3}>Full Stack Web Developer</h3>
                </div>
            </Slide>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}  />
        </header>
    )
}

export default Header;