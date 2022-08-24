import React from "react";
import pizzaData from "./data/pizzaData";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div id="menu">
      <div className="menu-img">
        <h3>Pizza Menu</h3>
      </div>
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
