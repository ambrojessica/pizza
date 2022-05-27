import React from "react";
import { Link } from 'react-router-dom';
import './PrettyPizza.css';
import { FaCartPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-button">
          <h3>(123)-456-8888</h3>
          <Link to="/"><h1>Just Pizza</h1></Link>
          <Link to="/cart"><FaCartPlus className='shoppingCart' /></Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;