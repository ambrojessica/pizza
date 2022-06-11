import React, { useState } from "react";
import pizzaData from "./data/pizzaData";
import Header from "./Header";
import Footer from "./Footer";
import 'animate.css';
import { FaShoppingCart } from "react-icons/fa";

const Pizza = (props) => {

  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = ({ pizza }) => {
    props.addToCart(pizza);
    setShowCart(true);
  };

  return (
    <div>
      <Header />
      <div className="pizzaContainer">
        <div className="pizzaInfo">
          {
            pizzaData.map((pizza) => (
              <div className="pizzaCard" key={pizza.id}>
                <div className="pizzaCardContent">
                  <img src={pizza.image} alt="images of pizza" />
                  <h3>{pizza.name}</h3>
                  <h5>{pizza.description}</h5>
                  <h4>{pizza.price}</h4>
                  <button className="cart-button"
                    onClick={handleAddToCart}>
                    {showCart ? <FaShoppingCart /> : "Add to Cart"}
                    <span></span>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pizza;