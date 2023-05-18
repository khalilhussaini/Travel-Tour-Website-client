import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="part">
        <h1>Travel and Tour Website</h1>
        <div className="containerbarr">
        <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>

        </li>
      </ul> 
        </div>
    
      </div>
    </header>
  );
};

export default Header;
