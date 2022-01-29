import React from 'react';
import './Destinationstyle.css'
import { useState } from "react"
import data from "../starter-code/data.json"

const Destination = () => {

  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]


  return (
    <div className='destContainer'>
      <div className='destContent'>
        <div className='destContentImg'>
          <h5><span className='number'>01</span>PICK YOUR DESTINATION</h5>
          <img src={images.png} alt={name} />
        </div>
        <div className='destContentTwo'>
          <ul className='destNavbar'>
            {planets.map((item, index) => (
              <li key={index} onClick={() => setValue(index)}
                className={`destNavBtn ${index === value && "borderBottom"
                  }`}>
                {item.name}
              </li>
            ))}
          </ul>
          <h2>{name}</h2>
          <p>{description}</p>
          <hr className='destHr'/>
          <div className='info'>
            <div className='infoOne'>
              <h6>AVG. DISTANCE</h6>
              <h4>{distance}</h4>
            </div>
            <div className='infoTwo'>
              <h6>EST. TRAVEL TIME</h6>
              <h4>{travel}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Destination;
