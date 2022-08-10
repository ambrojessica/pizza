import React from "react";
import './PrettyPizza.css';
import { FaCartPlus, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <div className="header">
        <h3><FaPhoneAlt />+1 (123)-456-8888</h3>
        <h3>Little Mateo's</h3>
        <FaCartPlus className='shoppingCart' />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;