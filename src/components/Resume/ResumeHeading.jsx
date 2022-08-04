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
        <div>
            <h1 style={headingStyle}>{props.children}</h1>
        </div>
    )
}

const titleStyle = {
    color: '#151515',
    backgroundColor: 'white',
    fontFamily: 'Source Code Pro, monospace',
    fontSize: '18px',
    fontWeight: '500',
    paddingBottom: '5px'
    
}
const positionStyle = {
    fontWeight: '200',
    color: '#151515',
    backgroundColor: 'white',
    fontFamily: 'Source Code Pro, monospace',
    paddingTop: '1px',
    paddingBottom: '10px',

}

function Education (){
    return(
        <div className="educationContainer">
            <h1 style={titleStyle}>UNIVERSITY OF COLORADO BOULDER - Expected 2023</h1>
            <p style={positionStyle}>B.A. Computer Science | Minor in Creative Technology & Design </p>
        </div>
    )
}
function Experience (){
    const listColor = {
        fontWeight: '300',
        color: 'black',
        fontFamily: 'Source Code Pro, monospace',
        paddingTop: '1px',
        paddingBottom: '5px',
        fontSize: '15px',
        marginLeft: '17px'
    }
    return(
        <div className="experienceContainer">
            <h1 style={titleStyle}>UNIVERSITY OF COLORADO BOULDER CS DEPARTMENT</h1>
            <p style={positionStyle}>COURSE ASSISTANT</p>
            <ul style={{listStylePosition: 'outside'}}>
                <li style={listColor}>Collaborated with professors in supervising weekly recitations for Data Structures & Algorithms.</li>
                <li style={listColor}>Led office hours & student discussions to assist students with course related assignments.</li> 
                <li style={listColor}>Provided students with the tools, skills, & various perspectives to develop their own problem solving methods.</li> 
                <li style={listColor}>Saved professors on average of 10 hours a week in student help related tasks.</li> 
            </ul> 
        </div>
    )
}

const Courses = [
    {
        title: 'COMPUTER SYSTEMS',
        number: '2400',
        department: 'CSCI',
        url: '#',
        cName: 'courses'

    },
    {
        title: 'ALGORITHMS',
        number: '3104',
        department: 'CSCI',
        url: '#',
        cName: 'courses'

    },
    {
        title: 'SOFTWARE DEV & TOOLS',
        number: '3308',
        department: 'CSCI',
        url: '#',
        cName: 'courses'

    },
    {
        title: 'DISCRETE STRUCTURES',
        number: '2824',
        department: 'CSCI',
        url: '#',
        cName: 'courses'

    },    
    {
        title: 'Human Computer Interaction',
        number: '3002',
        department: 'CSCI',
        url: '#',
        cName: 'courses'

    },    
    {
        title: 'WEB',
        number: '2200',
        department: 'CTD',
        url: '#',
        cName: 'courses'

    },

]


export {ResumeHeading, Education, Experience};