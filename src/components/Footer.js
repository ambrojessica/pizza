import React from "react";
import './PrettyPizza.css';

const Footer = () => {
  return (
    <div className="footer-info" id="contact">
      <div className="nav-info">
        <h3>Contact Us</h3>
        <nav>
          <address>
            123 Mozzarella Ave.
            Los Angeles, California
            US 90001
          </address>
          <a href="tel:123-456-8888">123-456-8888</a>
          <a href="mailto:peter.pepperoni@justpizza.com"
          >peter.pepperoni@justpizza.com</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;