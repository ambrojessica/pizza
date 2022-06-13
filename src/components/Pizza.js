import React, { useState } from "react";
import pizzaData from "./data/pizzaData";
import Header from "./Header";
import Footer from "./Footer";
import 'animate.css';
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "./actions/cartActions";


const Pizza = (props) => {

  // const [open, setOpen] = useState(false);
  // const clicked = (pizza) => (ev) => {
  //   props?.addToCart?.(pizza);
  //   console.log('it works');
  //   setOpen(true);
  // };
  return (
    <div>
      <Header />
      <div className="pizzaContainer">
        <div className="pizzaInfo">
          {
            pizzaData.map((pizza) => (
              <div className="pizzaCard" key={pizza.id} pizza={pizza}>
                <div className="pizzaCardContent">
                  <img src={pizza.image} alt="images of pizza" />
                  <h3>{pizza.name}</h3>
                  <h5>{pizza.description}</h5>
                  <h4>{pizza.price}</h4>
                  <button className="cart-button"
                    onClick={() => addToCart(pizza)}>
                    {/* {
                      open ? "Add To Cart " : <FaShoppingCart />
                    } */}
                    Add to Cart
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