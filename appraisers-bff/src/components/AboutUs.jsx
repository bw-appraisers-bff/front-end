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
       
      <div>
        {teamData.map((title, role) => {
            return(
                <AboutCard title={title} index={role}/>
            )
        })}
          <h1>ahsdklf</h1>
      </div>

    );
    
};

export default AboutUs;