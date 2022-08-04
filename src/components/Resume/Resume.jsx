import { Component } from "react";
import { ResumeHeading, Education, Experience} from "./ResumeHeading";
import './Resume.css';
import { BiFontFamily, BiFontSize } from "react-icons/bi";
import Button from 'react-bootstrap/Button';

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
                    <ResumeHeading href="#">SKILLS</ResumeHeading>
                    <ResumeHeading>EXPERIENCE</ResumeHeading>
                    <Experience />
                    <ResumeHeading>EDUCATION</ResumeHeading>
                    <Education />
                    <ResumeHeading>COURSES</ResumeHeading>
                </div>
            </div>
        )
    }
}
export default Resume;