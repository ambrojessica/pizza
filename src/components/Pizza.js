import React, { Component } from "react";
import pizzaData from "./data/pizzaData";
import Header from "./Header";
import Footer from "./Footer";

export default class Pizza extends Component {

  state = {
    pizza: []
  };

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
                    <button onClick={() => this.props.addToCart(pizza)}>Add To Cart</button>
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


// const DisplayPizza = ({ item }) => {

//   const { name, image, description, price } = item;

//   return (
//     <div className="pizzaCard">
//       <div className="pizzaCardContent">
//         <img src={image} alt="images of pizza" />
//         <h3>{name}</h3>
//         <h5>{description}</h5>
//         <h4>{price}</h4>
//         <button onClick={() => this.props.addToCart(pizza)}>Add To Cart</button>
//       </div>
//     </div>
//   );
// };