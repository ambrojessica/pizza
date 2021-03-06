//import
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './components/PrettyPizza.css';
import SubmitPage from './components/SubmitPage';
import Cart from './components/Cart';
import Pizza from './components/Pizza';

const App = (props) => {

  const [cart, setCart] = useState([]);
  // {
  //   k25: {...pizza, qty:1}
  // }

  const addToCart = (pizza, id) => {
    // check if akready in cart => ++ qty
    // cart?.[pizza.id] = ...qty++
    // if not, add to cart
    setCart([...cart, pizza]);
    const check_index = cart.findIndex(pizza => pizza.id === id);
    if (check_index !== -1) {
      cart[check_index].quantity++;
      console.log("Quantity updated:", cart);
    } else {
      cart.push({ ...cart.find(p => p.id === id), quantity: 1 });
      console.log('The product has been added to cart:', cart);
    }
  };

  const deleteFromCart = (pizza) => {
    setCart(cart.filter((p) => {
      return p.id !== pizza.id;
    }));
  };

  return (
    <div className='App'>

      <Switch>
        <Route path="/submit">
          <SubmitPage
          />
        </Route>

        <Route path="/cart">
          <Cart
            {...props}
            cart={cart}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
          />
        </Route>

        <Route path="/pizza"
          render={() => <Pizza addToCart={addToCart} />}
        />

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  );
};
export default App;
