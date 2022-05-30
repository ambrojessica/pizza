import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Cart(props) {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0);

  const history = useHistory();
  const routeToForm = () => {
    history.push('/submit');
  };
  const backToMenu = () => {
    history.push('/pizza');
  };

  return (
    <div>
      <Header />
      <div className="cart">
        <button onClick={backToMenu}>Go back & Add more</button>
        {props.cart.map((pizza) => (
          <div key={pizza.id} className="PizzaCartInfo">
            {/* <img src={pizza.image} /> */}
            <h2>{pizza.name}</h2>
            <p>${pizza.price}</p>
            <button
              onClick={() => props.removeFromCart(pizza)}
            >
              Remove Pizza
            </button>
          </div>
        ))}
        <div>
          <p>Total: ${total}</p>
          <button
            onClick={routeToForm}
          >
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

