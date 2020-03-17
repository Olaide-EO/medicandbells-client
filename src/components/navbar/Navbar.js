import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";


import { useSelector } from 'react-redux';



export default function Navbar(props) {
  
  return (
    
        <header className="header">
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Meds and Bells</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>                                                       
          </li>
          <li>
            <Link to='/faq'>Faq</Link>
          </li>
          <li>
            <Link to='/contactus'>Contact Us</Link>
          </li>
        </ul>
      </header>


        
      
      
     
    
  );
}