import React from "react";
import './PrettyPizza.css';

const Footer = () => {
  return (
    <div className="footer-info">
      <nav>
        <img src="https://images.unsplash.com/photo-1547197309-082bdc50ce8b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2738" alt="8 reasons to love pizza" />
        <div className="nav-info">
          <h3>Contact Us</h3>
          <address>
            123 Mozzarella Ave.
            Los Angeles, California
            US 90001
          </address>
          <a href="tel:1-888-888-8888">888-888-8888</a>
          <a href="mailto:peter.pepperoni@fiestapizza.com"
          >peter.pepperoni@fiestapizza.com</a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;