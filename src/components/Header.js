import React, { useState } from "react";
import './PrettyPizza.css';
import Cart from "./Cart";
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { BsCart4, BsPhone } from 'react-icons/bs';
import { GiFullPizza } from 'react-icons/gi';

const Header = () => {
  const { quantity } = useSelector((state) => state.cart);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header-section">
      <h3><BsPhone />+1 (123)-456-8888</h3>
      <div className="header-title">
        <h3>Little Mateo's <GiFullPizza /></h3>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="navbar">
        <span className="menu-bars">
          {quantity ? <span>{quantity}</span> : <span>Ø</span>}
          <BsCart4 onClick={showSidebar} />
        </span>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <AiOutlineClose />
            </li>
            <Cart />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;