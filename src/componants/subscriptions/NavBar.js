import React, { useState } from "react";
import Logo from "./Logo";
import close from "./../../asset&fonts/img/close.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <div>
      <nav className=' nav'>
        <div
          onClick={() => {
            setIsNavActive(!isNavActive);
          }}
          className='burger'
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <button className='btn btn-download' id='nav-downloaad-btn'>
            دانلود درمانیتو
          </button>
        </div>
        <div className='content-list '>
          <ul>
            <li className='active'>
              <Link to='/'>صفحه اصلی</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='FAQ'> درباره ما </Link>
            </li>
            <li>
              <Link to='contact-us'> تماس با ما </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='register'>عضویت داروخانه ها </Link>{" "}
            </li>
          </ul>
        </div>
        <div className='nav-logo '>
          <Logo />
        </div>
      </nav>
      <div className={`responsive-nav ${isNavActive ? "" : "hide-nav"}`}>
        <div className='close'>
          <img
            src={close}
            onClick={() => {
              setIsNavActive(false);
            }}
          />
        </div>
        <div className='nav-logo'>
          <Logo />
        </div>
        <button className='btn btn-download'>دانلود مستقیم درمانیتو</button>
        <div className='hr'></div>
        <div className='res-nav-list'>
          <ul>
            <li className='res-active'>
              <Link to='/'>صفحه اصلی</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='register'>عضویت داروخانه ها </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='FAQ'> درباره ما </Link>
            </li>
            <li>
              <Link to='contact-us'> تماس با ما </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to='FAQ'> سوالات متداول </Link>
            </li>
            <li> قوانین و شرایط </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
