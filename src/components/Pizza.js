import React, { Component } from "react";
import pizzaData from "./data/pizzaData";
import Header from "./Header";
import Footer from "./Footer";

export default class Pizza extends Component {
  render() {
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
                    <button className="cart-button" onClick={() => this.props.addToCart(pizza)}>Add To Cart</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Footer />
      </section>
    );
  }
};

