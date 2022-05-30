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

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (pizza) => {
    setCart(cart.filter((p) => p.id !== pizza.id));
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
            removeFromCart={removeFromCart}
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
