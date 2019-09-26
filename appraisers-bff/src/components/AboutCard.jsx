import React from "react";

const AboutCard = props => {
    return(
        <div className="about-card">
            
            {console.log("this in in return", props.title.github)}
            <img src= {props.title.image} alt={props.title.name} className="bio-pic"/>
            <h1 className="about-name">{props.title.name}</h1>
            <p className="about-role">Role:{props.title.role}</p>
            <a href={props.title.github}>Contact Me</a>
        </div>


    )
}

export default AboutCard;