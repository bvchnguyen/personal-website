import { Component } from "react";

function ResumeHeading (props){
    const headingStyle = {
        fontWeight: '700',
        fontSize: '30px',
        color: '#151515',
        backgroundColor: 'white',
        paddingTop: '15px',
        letterSpacing: '5px'
    }
    return(
        <div style={{textAlign: 'center' }}>
            <h1 style={headingStyle}>{props.children}</h1>
        </div>
    )
}

export default ResumeHeading;