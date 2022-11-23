import React from 'react';
import { useState } from 'react';
import logo from '../img/logo.png';
import '../Components/navbar.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNavbar] = useState(false);
  const changebackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changebackground);

  return (
    <nav className={nav ? 'nav-bg' : 'nav'}>
      <Link
        to="hero"
        className="logo"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <img src={logo} alt="this is a logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu" id="menu">
        <li>
          <Link to="hero" spy={true} smooth={true} offset={10} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Our Services
          </Link>
        </li>
        <li>
          <Link to="aboutus" spy={true} smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contactus"
            className="glowbtn"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
