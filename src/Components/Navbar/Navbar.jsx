import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import Logo from '../../Assets/Logo/Logo.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [indicatorActive, setIndicatorActive] = useState(false);

    const handleClick = () => {
      setIndicatorActive(!indicatorActive);
    };
    console.log(handleClick)
  
    const handleMenuItemClick = (e) => {
      const marker = document.querySelector('#indicator');
      marker.style.left = `${e.target.offsetLeft}px`;
      marker.style.width = `${e.target.offsetWidth}px`;
      marker.style.display = 'block';
      marker.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
  
      item.forEach((i) => i.classList.remove('active'));
      e.target.classList.add('active');
    };
  
    const item = document.querySelectorAll('nav a');
  
    return (
        <div className='flex flex-wrap'>
      <nav className='flex justify-between w-screen'>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
        <div className='flex w-full items-center'>
        <a className="text-3xl font-bold font-heading" href="https://www.vgecg.ac.in/ieee.php">
          <img className="h-9" src={Logo} alt="logo"/>
        </a>
        <div className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
        <Link to="#" onClick={handleMenuItemClick}>
          Home
        </Link>
        <Link to="#" onClick={handleMenuItemClick}>
          Team
        </Link>
        <Link to="#" onClick={handleMenuItemClick}>
          About
        </Link>
        <Link to="#" onClick={handleMenuItemClick}>
          Events
        </Link>
        <Link to="#" onClick={handleMenuItemClick}>
          ContactUs
        </Link>
        </div>
        <div id="indicator"></div>
        </div>
      </nav>
      </div>
    );
}

export default Navbar;
