import { Component } from "react";
import ResumeHeading from "./ResumeHeading";
import './Resume.css';

const ResumeItem = [
    {
        title: 'SKILLS',
        url: '#',
        cName: 'resume-link'

    },
    {
        title: 'EXPERIENCE',
        url: '#',
        cName: 'resume-link'

    },
    {
        title: 'EDUCATION',
        url: '#',
        cName: 'resume-link'
    },
    {
        title: 'COURSES',
        url: '#',
        cName: 'resume-link'
    }

]

const Hline = ({ color }) => (
    <hr
        style={{
            backgroundColor: '#A4A4A4',
            height: 2
        }}
    />
);
const consistentBG = {
    color: '#151515',
    backgroundColor: 'white'
}

class Resume extends Component{

    render(){
        return(
            <div className="resumeContainer">
                <div className="resumeTemplate">
                    <h1 className="resumeTitle">RESUME</h1>
                    <ul className="resume-menu">
                        {ResumeItem.map((item, index) => {
                            return (
                                <li className="Items" key={index}>
                                    <a className={item.cName} href={item.url}>{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <Hline />
                    <ResumeHeading>SKILLS</ResumeHeading>
                    <div className="education">
                        <h1 style={consistentBG}>University of Colorado boulder</h1>
                        <p style={consistentBG}>B.A Computer Science</p>
                    </div>
                    <ResumeHeading>EXPERIENCE</ResumeHeading>
                </div>
            </div>
        )
    }
}
export default Resume;