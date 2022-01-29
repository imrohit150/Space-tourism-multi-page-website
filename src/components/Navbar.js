import React from 'react';
import './Navbarstyle.css';
import logo from '../starter-code/assets/shared/logo.svg'
import { Link, useLocation } from "react-router-dom";
import hamburger from '../starter-code/assets/shared/icon-hamburger.svg'
import closebtn from '../starter-code/assets/shared/icon-close.svg'


const Navbar = () => {

  const location = useLocation();



  const openMenu = () => {
    document.getElementById("menuBar").style.width = "70%";
    document.getElementById("hamBurger").style.display = "none";
    document.getElementById("navCloseBtn").style.display = "initial";
  };

  const closeMenu = () => {
    document.getElementById("menuBar").style.width = "0%";
    document.getElementById("navCloseBtn").style.display = "none";
    document.getElementById("hamBurger").style.display = "initial";
  };


  return (
    <>
      <hr className='navHr' />
      <div className='navContainer' id='menuBar'>
        <div className='navLogo'>
          <Link to="/"><img src={logo} alt='logo' ></img></Link>
        </div>
        <ul className='navContent'>
          <li className={`navList ${location.pathname === "/" ? "active" : ""}`}><Link className="cnt" to="/"><span className='navSpan'>00 </span>HOME</Link></li>
          <li className={`navList ${location.pathname === "/destination" ? "active" : ""}`}><Link className="cnt" to="/destination"><span className='navSpan'>01 </span>DESTINATION</Link></li>
          <li className={`navList ${location.pathname === "/crew" ? "active" : ""}`}><Link className="cnt" to="/crew"><span className='navSpan'>02 </span>CREW</Link></li>
          <li className={`navList ${location.pathname === "/technology" ? "active" : ""}`}><Link className="cnt" to="/technology"><span className='navSpan'>03 </span>TECHNOLOGY</Link></li>
        </ul>
      </div>

      <div className='hamBurgerContainer'>
        <div className='navLogoTwo'>
          <Link to="/"><img src={logo} className='hamLogo' alt='logo' ></img></Link>
        </div>
        <img id="hamBurger" alt='hamburger' onClick={openMenu} src={hamburger}></img>
        <img id="navCloseBtn" alt='closebutton' onClick={closeMenu} src={closebtn}></img>
      </div>
    </>
  )
};

export default Navbar;

