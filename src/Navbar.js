
import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css';
import icon from './assests/icon.png'; 

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-content">
      <div className="navbar-left">
        <img src={icon} alt="Icon" className="navbar-icon" />
      </div>
      <ul className="navbar-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/legend">Legend</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/tech">Tech</Link></li>
        <li><Link to="/war-room">War Room</Link></li>
        <li><Link to="/skullonomics">Skullonomics</Link></li>
        <li><Link to="/moonmap">Moonmap</Link></li>
      </ul>
      <div className="navbar-right">
        <button className="connect-button">Connect</button>
      </div>
    </div>
  </nav>
);

export default NavBar;
