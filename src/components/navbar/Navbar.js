import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";


import { useSelector } from 'react-redux';


export default function Navbar(props) {

  let stateForNavbar = useSelector(state => state.user);
  
  let dataState = useSelector(state => state.data);

  let navLink = !stateForNavbar.authenticated ? (

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
    ) : (
       
           <ul className="menu">
          
          <li>
            <Link to='/medications'>Medications</Link>
          </li>
          <li>
            <Link to='/add'>Add New</Link>                                                       
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/Faq'>Faq</Link>
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