import React from "react";
import './PrettyPizza.css';

const Footer = () => {
  return (
    <div className="footer-info">
      <nav>
        <img src="https://images.unsplash.com/photo-1542866788-0868e62ae8e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <div className="nav-info">
          <h3>Contact Us</h3>
          <address>
            123 Mozzarella Ave.
            Los Angeles, California
            US 90001
          </address>
          <a href="tel:123-456-8888">123-456-8888</a>
          <a href="mailto:peter.pepperoni@justpizza.com"
          >peter.pepperoni@justpizza.com</a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;