import React from 'react';
import './PrettyPizza.css';
import { useHistory } from 'react-router-dom';

//beginning of function 
const Home = () => {

  const history = useHistory();

  const routeToForm = () => {
    history.push('/pizza');
  };


  return (
    <div className='Home'>
      <div className='intro'>
        <h2>Get a pizza delivered while coding</h2>
        <button onClick={routeToForm} id='order-pizza'>Order Pizza!</button>
      </div>

      <div className="container-logo">
        <div className='logo1'>
          <h3>PizzaHut</h3>
        </div>
        <div className='logo2'>
          <h3>Dominos</h3>
        </div>
        <div className='logo3'>
          <h3>Little Caesars</h3>
        </div>
      </div>
    </div>
  );



};

export default Home;