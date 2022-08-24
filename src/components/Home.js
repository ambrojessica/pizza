import React from 'react';
import './PrettyPizza.css';
import { IoIosArrowForward } from 'react-icons/io';

//beginning of function 
const Home = () => {
  return (
    <div className='Home'>
      <div className='home-content'>
        <h2>Little Mateo's</h2>
        <h4>Making People Happy One Slice at a Time</h4>
        <a href='#menuItem'>
          <button>VIEW MENU <IoIosArrowForward /></button>
        </a>
      </div>
    </div>
  );
};

export default Home;


