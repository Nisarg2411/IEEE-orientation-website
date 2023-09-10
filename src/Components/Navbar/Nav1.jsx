import React, { useState } from 'react'
import './Nav1.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Assuming you are using Font Awesome for the bars icon
import logo from '../../Assets/Logo/Logo.jpg';
const Nav1 = () => {
    const [activeNav, setActiveNav] = useState('#');
  return (
    <div>
      <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
        <label className="logo"><img src={logo} alt=""></img></label>
      <ul>
        <li><a onClick={()=>setActiveNav('#home')} className={`${activeNav==="#home"?"active" : ""}`} href="#home">Home</a></li>
        <li><a onClick={()=>setActiveNav('#about')} className={`${activeNav==="#about"?"active" : ""}`} href="#about">About</a></li>
        <li><a onClick={()=>setActiveNav('#member')} className={`${activeNav==="#member"?"active" : ""}`} href="#member">Members</a></li>
        <li><a onClick={()=>setActiveNav('#event')} className={`${activeNav==="#event"?"active" : ""}`} href="#events">Events</a></li>
        <li><a onClick={()=>setActiveNav('#contact')} className={`${activeNav==="#contact"?"active" : ""}`} href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav1
