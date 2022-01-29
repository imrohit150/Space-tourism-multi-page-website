import React from 'react';
import './Technologystyle.css';
import { useState } from "react"
import data from "../starter-code/data.json"

const Technology = () => {

  const [technology] = useState(data.technology)
  const [value, setValue] = useState(0)

  const { name, images, description } = technology[value]


  return (
    <div className='techContainer'>
      <div className='techContentBox'>
        <h5><span className='number'>03</span>SPACE LAUNCH 101</h5>
        <div className='techContent'>
          <ul className='techNavbar'>
            {technology.map((item, index) => (
              <li key={index} className="techNavList">
                <button
                  onClick={() => setValue(index)}
                  className={`techBtn ${index === value && "techBorderBottom"
                    }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
          <div className='technavContent'>
            <h6>THE TERMINOLOGY...</h6>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className='techImg'>
        <img className= 'desktop' src={images.portrait} alt={name}></img>
        <img className='tablet' src={images.landscape} alt={name}></img>
      </div>
    </div>
  )
};

export default Technology;
