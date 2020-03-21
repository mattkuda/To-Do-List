import React from 'react'

function About() {

    function getStyle(){
        return {
            background: 'white',
            color:'black',
            padding: '20px',
            marginTop: '10px',
            borderRadius: "5px",
            lineHeight: "200%"
        }
    }

    return (
        <React.Fragment height="100%">
            <div style={getStyle()}>
            <h1 position="absolute">About</h1>
                <p>This is my first To-Do List app!</p>
                <p>I put my ReactJS fundamentals to the test in order to complete this project.</p>
                <p>Moving forward, I'm excited to build more complex applications!</p>
            </div>
        </React.Fragment>
    )
}

export default About;