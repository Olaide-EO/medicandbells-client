import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";


import { useSelector } from 'react-redux';


export default function Navbar(props) {

  let stateForNavbar = useSelector(state => state.user);
  
  let dataState = useSelector(state => state.data);

  const handleClick = () => {
    const menuButton = document.getElementById('menu-btn');
        menuButton.click();
  }

  let navLink = !stateForNavbar.authenticated ? (

          <ul className="menu">
          
          <li>
            <Link to='/login' onClick={handleClick}>Login</Link>
          </li>
          <li>
            <Link to='/signup' onClick={handleClick}>Signup</Link>                                                       
          </li>

        </ul>
    ) : (
       
           <ul className="menu">
          
          <li>
            <Link to='/medications' onClick={handleClick}>Medications</Link>
          </li>
          <li>
            <Link to='/addMed' onClick={handleClick}>Add New</Link>                                                       
          </li>
          <li>
            <Link to='/profile' onClick={handleClick}>Profile</Link>
          </li>
          
        </ul>

    )
  
  return (
    
        <header className="header">
        <Link to="/" className="logo">
          
          <span className="logo-name">Meds <span className="and">&</span> Bells</span>
         
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        {navLink}
      </header>


        
      
      
     
    
  );
}


 /*
          <li>
            <Link to='/faq' onClick={handleClick}>Faq</Link>
          </li>
          <li>
            <Link to='/contactus' onClick={handleClick}>Contact Us</Link>
          </li>
          */