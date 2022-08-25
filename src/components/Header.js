import React, { useState } from "react";
import './PrettyPizza.css';
import Cart from "./Cart";
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { BsCart4, BsPhone } from 'react-icons/bs';
import { GiFullPizza } from 'react-icons/gi';
import Popup from 'reactjs-popup';


const Header = () => {
  const { quantity } = useSelector((state) => state.cart);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header-section" id='home'>
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
        <Popup
          trigger={<button className="menu-bars">{quantity ? <span>{quantity}</span> : <span>Ø</span>}
            <BsCart4 onClick={showSidebar} /> </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                <AiOutlineClose />
              </button>
              <Cart />
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Header;