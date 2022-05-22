import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './PrettyPizza.css';
import { PizzaImages } from './slideshow/PizzaImages';
import SlideshowPizza from './slideshow/SlideshowPizza';

//beginning of function 
const Home = () => {

  const history = useHistory();

  const routeToForm = () => {
    history.push('/pizza');
  };


  return (
    <div className='Home'>
      <nav>
        <div className="nav-button">
          <Link to="/"><h1>Fiesta Pizza</h1></Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <div>
        <SlideshowPizza slides={PizzaImages} />
      </div>
    </div>
  );
};

export default Home;

{/* <button onClick={routeToForm} id='order-pizza'>Order Pizza!</button> */ }

