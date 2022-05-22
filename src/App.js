import React from 'react';
//import
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './components/PrettyPizza.css';
import SubmitPage from './components/SubmitPage';
import Cart from './components/Cart';
import Pizza from './components/Pizza';


const App = () => {

  return (
    <div className='App'>

      <Switch>
        <Route path="/submit">
          <SubmitPage
          />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/pizza">
          <Pizza />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  );
};
export default App;
