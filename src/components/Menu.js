import React from "react";
import { useHistory } from "react-router-dom";
import pizzaData from "./data/pizzaData";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div id="menu">
      <h3>Pizza Menu</h3>
      <div id="menuItem">
        {
          pizzaData.map((pizza) => (
            <MenuCard {...pizza} key={pizza.id} />
          ))
        }
      </div>
    </div>
  );
}
