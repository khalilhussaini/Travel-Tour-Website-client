import React from "react";
import { FaPlane } from "react-icons/fa";
import NavigationBar from "../NavigationBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="part">
        <div className="logo">
          <FaPlane className="plane-icon" />
          <div className="title">
            <h2>Travel and Tour</h2>
          </div>
        </div>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
