import React from "react";
import {Link} from "react-router-dom";

const AboutCard = props => {
    return(
        <div className="about-card">
            
            {console.log("this in in return", props.title.github)}
            <img src= {props.title.image} alt={props.title.name} className="bio-pic"/>
            <div className="bio-data">
                <h1 className="about-name">{props.title.name}</h1>
                <p className="about-role">Role:{props.title.role}</p>
                <a href={props.title.github} >GitHub</a>
            </div>
        </div>


    )
}

export default AboutCard;