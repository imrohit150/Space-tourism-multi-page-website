import React from 'react';
import './Homestyle.css';
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className='container'>
      <div className='content'>
        <div className='contentText'>
          <h5> So, you want to travel to</h5>
          <h1>Space</h1>
          <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='contentBtn'>
          <div className='contentBtnContainer'>
            <Link className='btn' to="/destination">Explore</Link>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Home;
