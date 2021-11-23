import React from 'react';

const styles = {
    textAlign: "center",
    fontSize: "60%",
    position: "absolute",
    bottom: 5,
    transform: "translateX(-50%)",
    left: "50%"
}

function Footer() {
    return (
        <footer style={styles}>&copy; Vince Lee 2021</footer>
    )
}

export default Footer;