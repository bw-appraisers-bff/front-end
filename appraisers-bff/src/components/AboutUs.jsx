import React from 'react';
import AboutCard from "./AboutCard";




const AboutUs = ( ) => {
    const teamData = [
        {image: "../../../images/teamPics/SeanFinal.png", name: "Sean Doyle", role: "Project Manager/BE", github: "https://github.com/sdoylelambda" },
        {image: "../../../images/teamPics/KevinFinal.png", name: "Kevin Afable", role: "Frontend", github: "https://github.com/Vyraal1" },
        {image: "../../../images/teamPics/LouisFinal.png", name: "Louis Galinas", role: "Frontend", github: "https://github.com/gelinas" },
        {image: "../../../images/teamPics/BriannaFinal.png", name: "Brianna Keune", role: "Frontend", github: "https://github.com/briannakeune"},
        {image: "../../../images/teamPics/ArvinFinal.png", name: "Arvin Agas", role: "Backend", github: "https://github.com/arvagas" },
        {image: "../../../images/teamPics/JaydenFinal.png", name: "Jayden Kim", role: 'Data Engineer', github: "https://github.com/Jaydenzk" },
        {image: "../../../images/teamPics/MatthewFinal.png", name: "Matthew Mauney", role: 'Data Engineer', github: "https://github.com/mauney "},
        {image: "../../../images/teamPics/TaylorFinal.png", name: 'Taylor Bickell', role: 'Machine Learning', github: "https://github.com/tcbic" },
        {image: "../../../images/teamPics/MarvinFinal.png", name: 'Marvin Davila', role: 'Machine Learning', github: 'https://github.com/MAL3X-01' }, 
        {image: "../../../images/teamPics/MichaelFinal.png", name: "Michael Guadalupe", role: "Front End", github: "https://github.com/MichaelHMods" }

    ]

   console.log(teamData)
    return (
        <div className="about-container">
            <div className="description-container">
                <h1>About the Team</h1>
                <p className="about-description">
                Bringing you a way to find the value of your home is a team of developers and engineers from across the United States. We strive to make sure you are getting the best home estimates possible given the information within our grasp. Whether you are a buyer or a seller, we hope to bring value to your housing needs and desires.                </p>
            </div>
            <div className="bio-card">
                {teamData.map((title, role) => {
                    return(
                        <AboutCard title={title} index={role}/>
                    )
                })}
                
            </div>
        </div>
    );
    
};

export default AboutUs;