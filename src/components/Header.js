import React, { useState } from "react";
import './PrettyPizza.css';
import { FaPhoneAlt, FaCartPlus } from 'react-icons/fa';
import Cart from "./Cart";
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from "react-redux";

const Header = () => {
  const { quantity } = useSelector((state) => state.cart);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="header">
        <h3><FaPhoneAlt />+1 (123)-456-8888</h3>
        <h3>Little Mateo's</h3>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </nav>
      <div>
        <span className="menu-bars">
          {quantity !== 0 && <span>{quantity}</span>}
          <FaCartPlus onClick={showSidebar} />
        </span>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <p className='menu-bars'>
                <AiOutlineClose />
              </p>
            </li>
            <Cart />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;