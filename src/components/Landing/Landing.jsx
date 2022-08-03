import { Component } from "react";
import "./Landing.css";
import resume from "/Users/bachnguyen/Documents/personal-website/src/images/resume.pdf";

const dotsStyling = {
    letterSpacing: 3,
    opacity: 0.7
}

class Landing extends Component{
    render(){
        return(
            <div className="LandingContainer">
                <div className="myIntro">
                    <h1 className="Intro">Hey there! I'm<span style={dotsStyling}> ...</span></h1>
                    <h1 className="MyName">Bach Nguyen</h1>
                    <h1 className="About">A <span className="Major">Computer Science</span> student based in <span className="State">Colorado</span>.</h1>
                    <a className="IntroButton" href={resume} target="#">MY RESUME</a>
                </div>
            </div>
        )
    }
}
export default Landing;