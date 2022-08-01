import { Component } from "react";
import './Landing.css';

class Landing extends Component{
    render(){
        return(
            <div className="LandingContainer">
                <div className="myIntro">
                    <h1 className="Intro">Hey there! I'm<span>...</span></h1>
                    <h1 className="MyName">Bach Nguyen</h1>
                    <a className="IntroButton" href="./src/images/resume.pdf" target="_blank">MY RESUME</a>
                </div>
            </div>
        )
    }
}
export default Landing;