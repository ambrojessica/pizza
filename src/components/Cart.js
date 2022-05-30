import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Cart = (props) => {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0);

  const history = useHistory();

  const routeToForm = () => {
    history.push('/submit');
  };

  return (
    <div>
      <Header />
      <div className="cart">
        {props.cart.map((pizza) => (
          <div key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <div>
              <h2>{pizza.name}</h2>
              <p>${pizza.price}</p>
              <button
                onClick={() => props.removeFromCart(pizza)}
              >
                Remove
              </button>
            </div>
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

export default Cart;

