import React from "react";
import { GiFullPizza } from "react-icons/gi";
import './PrettyPizza.css';

const Footer = () => {
  return (
    <div className="footer-info" id="contact">
      <h3>Little Mateo's <GiFullPizza /></h3>
      <p>+1 (123)-456-8888 <span>9:00am - 5:00pm</span></p>
      <div className="nav-info">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;