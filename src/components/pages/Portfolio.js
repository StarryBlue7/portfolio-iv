import React from 'react';

function Portfolio() {
    const styles = {
        h1: {
            fontSize: "300%",
            color: "white"
        },
        placeholder: {
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "LightSlateGrey"
        },
        image: {
            height: 200,
        }
    }

    return (
        <div className="placeholder" style={styles.placeholder}>
            <h1 style={styles.h1}>Coming Soon!</h1>
            <div>
                <img style={styles.image} src="https://www.pngplay.com/wp-content/uploads/2/Squirrel-PNG-Photos.png" alt="Squirrel" />
                <img 
                    className="App-logo" 
                    style={styles.image}
                    src="https://www.pngplay.com/wp-content/uploads/4/Acorn-PNG-Images-HD.png" 
                    alt="Acorn"
                />
            </div>
            
        </div>
    );
}

export default Portfolio;