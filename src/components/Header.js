import React from "react";
import { Link } from 'react-router-dom';
import './PrettyPizza.css';
import { FaCartPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-button">
          <Link to="/"><h1>Fiesta Pizza</h1></Link>
          <p>(888)-888-8888</p>
          <Link to="/cart"><FaCartPlus className='shoppingCart' /></Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;