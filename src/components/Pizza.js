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
            pizzaData.map((item) => (
              <DisplayPizza key={item} item={item} />
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
  const { name, image, description, price } = item;
  return (
    <div className="pizzaCard">
      <div className="testing">
        <img src={image} alt="images of pizza" />
        <h3>{name}</h3>
        <h5>{description}</h5>
        <span>{price}</span>
      </div>
    </div>

  );
};