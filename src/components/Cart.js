import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaTrashAlt } from 'react-icons/fa';

export default function Cart(props) {

  const [count, setCount] = useState(1);
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
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => { pizza.qty > 1 ? setCount(count - 1) : setCount(1); }}>-</button>
            <p> x{count}</p>
            <button
              onClick={() => props.removeFromCart(pizza)}>
              <FaTrashAlt />
            </button>
          </div>
        ))}
        {
          total < 1 ? <h3>Cart is Empty</h3> :
            <div>
              <p>Total: ${(total) * count}</p>
              <button className=
                "checkout-button" onClick={routeToForm}>
                Checkout
              </button>
            </div>
        }
      </div>
      <Footer />
    </div>
  );
};

