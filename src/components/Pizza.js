import React from "react";
import pizzaData from "./data/pizzaData";
import Header from "./Header";
import Footer from "./Footer";
import 'animate.css';
import { FaShoppingCart } from "react-icons/fa";

const Pizza = () => {

  return (
    <section>
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
                    onClick={() => this.props.addToCart(pizza)}><span>
                      Add To Cart</span><span><FaShoppingCart /></span>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pizza;