import React from "react";
import pizzaData from "./data/pizzaData";
import Header from "./Header";
import Footer from "./Footer";

const Pizza = () => {

  return (
    <section>
      <Header />
      <div className="pizzaContainer">
        <div className="pizzaInfo">
          {
            pizzaData.map((item, pizza) => (
              <DisplayPizza key={item} item={item} addToCart={pizza} />
            ))
          }
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pizza;

const DisplayPizza = ({ item }) => {
  const { name, image, description, price, pizza } = item;
  return (
    <div className="pizzaCard">
      <div className="pizzaCardContent">
        <img src={image} alt="images of pizza" />
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h4>{price}</h4>
        <button onClick={() => this.props.addToCart(pizza)}>Add To Cart</button>
      </div>
    </div>

  );
};