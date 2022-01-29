import React from 'react';
import './Crewstyle.css';
import { useState } from "react"
import data from "../starter-code/data.json"


const Crew = () => {

  const [crew] = useState(data.crew)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = crew[value]


  return (
    <div className='crewContainer'>
      <h5 className='mobileHeading'><span className='mobileNumber'>02</span>MEET YOUR CREW</h5>
      <div className='crewContent'>
        <div className='crewContentText'>
          <ul className='crewNavbar' id='crewMobileNav'>
            {crew.map((item, index) => (
              <li key={index}
                className={`crewNavList `}>
                <div key={index} onClick={() => setValue(index)} className={`crewBtn ${index === value && "crewBorderBottom"
                  }`}></div>
              </li>

            ))}
          </ul>
          <h5><span className='number'>02</span>MEET YOUR CREW</h5>
          <h3>{role}</h3>
          <h2>{name}</h2>
          <p>{bio}</p>
          <ul className='crewNavbar' id='crewDesktopNav'>
            {crew.map((item, index) => (
              <li key={index}
                className={`crewNavList `}>
                <div key={index} onClick={() => setValue(index)} className={`crewBtn ${index === value && "crewBorderBottom"
                  }`}></div>
              </li>

            ))}
          </ul>
        </div>
        <div className='crewImg'>
          <img src={images.png} alt={name}></img>
          <hr className='crewHr' />
        </div>

      </div>
    </div>
  )
};

export default Crew;
