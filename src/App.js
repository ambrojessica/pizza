import React from 'react';
//import
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './components/PrettyPizza.css';
import SubmitPage from './components/SubmitPage';
import Cart from './components/Cart';



const App = () => {


  return (
    <div className='App'>
      {/* <nav>
        <div className="nav-button">
          <Link to="/">Home</Link>
        </div>
      </nav> */}

      <Switch>
        <Route path="/submit">
          <SubmitPage
          />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
