import React from "react";
import "./Logo.css";
import logo from "./../../asset&fonts/img/logo.svg";

function Logo() {
  return (
    <div className='logo-container'>
      <img src={logo} alt='درمانیتو ' />
      <div className='logo-text'>
        <p className='logo-bold'>درمانیتو</p>
        <p>همراه شما در درمان</p>
      </div>
    </div>
  );
}

export default Logo;
