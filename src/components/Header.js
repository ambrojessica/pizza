import React from "react";
import { NavLink } from 'react-router-dom';
import './PrettyPizza.css';
import { FaCartPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-button">
          <h3>(123)-456-8888</h3>
          <NavLink to="/"><h1>Just Pizza</h1></NavLink>
          <NavLink to="/cart"><FaCartPlus className='shoppingCart' />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;