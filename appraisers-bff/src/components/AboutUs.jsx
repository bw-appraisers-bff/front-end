import React from 'react';
import AboutCard from "./AboutCard";


const AboutUs = ( ) => {
    const teamData = [
        {image: "../../../images/teamPics/MichaelFinal.png", name: "Michael Guadalupe", role: "Front End", github: "https://github.com/MichaelHMods" },
        {image: "../../../images/teamPics/KevinFinal.png", name: "Kevin Afable", role: "Frontend", github: "https://github.com/Vyraal1" },
        {image: "../../../images/teamPics/LouisFinal.png", name: "Louis Galinas", role: "Frontend", github: "https://github.com/gelinas" },
        {image: "../../../images/teamPics/BriannaFinal.png", name: "Brianna Keune", role: "Frontend", github: "https://github.com/briannakeune"},
        {image: "../../../images/teamPics/ArvinFinal.png", name: "Arvin Agas", role: "Backend", github: "https://github.com/arvagas" },
        {image: "../../../images/teamPics/SeanFinal.png", name: "Sean Doyle", role: "Backend/TL", github: "https://github.com/sdoylelambda" },
        {image: "../../../images/teamPics/JaydenFinal.png", name: "Jayden Kim", role: 'Data Engineer', github: "https://github.com/" },
        {image: "../../../images/teamPics/MatthewFinal.png", name: "Matthew Mauney", role: 'Data Engineer', github: "https://github.com/mauney "},
        {image: "../../../images/teamPics/TaylorFinal.png", name: 'Taylor Bickell', role: 'Machine Learning', github: "https://github.com/tcbic" },
        {image: "../../../images/teamPics/MarvinFinal.png", name: 'Marvin Davila', role: 'Machine Learning', github: 'https://github.com/MAL3X-01' }, 
        
    ]

   console.log(teamData)
    return (
        <div className="about-container">
            <div className="description-container">
                <h1>About the Team</h1>
                <p className="about-description">
                Bringing you a way to find the value you your home is a team of devs from across the nation. We strive to make sure that you get the best house estimate with the volumes of information in our grasp. Whether you are a buyer or seller we hop to bring you everything you need to get you the home that you want.
                </p>
            </div>
            <div>
                {teamData.map((title, role) => {
                    return(
                        <AboutCard title={title} index={role}/>
                    )
                })}
                <h1>ahsdklf</h1>
            </div>
        </div>
    );
    
};

export default AboutUs;