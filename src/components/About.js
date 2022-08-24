import React from 'react';
import './PrettyPizza.css';

export default function About() {
  return (
    <div id='about'>
      <div className='about-content'>
        <h3>Get to Know Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet turpis quis augue finibus vestibulum.</p>
        <hr></hr>
        <p>Nam ultrices enim lorem, aliquet ultrices quam tincidunt ut. In id dignissim velit. Cras in blandit odio. Nulla at consectetur eros, id aliquet lacus.</p>
      </div>
      <img src='https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='family eating pizza' />
    </div>
  );
}
