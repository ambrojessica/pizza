import React from 'react';
import { useHistory } from 'react-router-dom';
import './PrettyPizza.css';
import SlideshowPizza from './slideshow/SlideshowPizza';
import { PizzaImages } from './slideshow/PizzaImages';
import Header from './Header';
import Footer from './Footer';

//beginning of function 
const Home = () => {

  const history = useHistory();

  const routeToForm = () => {
    history.push('/pizza');
  };


  return (
    <div className='Home'>
      <Header />
      <SlideshowPizza slides={PizzaImages} />
      <div className='story-section'>
        <h3>Our Story</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laborum, iusto aperiam sed in reiciendis! Aperiam, eum nostrum rerum mollitia cum hic non totam quasi dolore, ea ipsam facilis perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id quaerat repellendus aliquam nesciunt? Nulla ad voluptas blanditiis repudiandae, sint rem et natus eius officiis maiores, quaerat vitae libero recusandae.</p>
        <button onClick={routeToForm} id='order-pizza'>Order Pizza!</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;


