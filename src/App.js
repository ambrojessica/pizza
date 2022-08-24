//import
import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import './components/PrettyPizza.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Footer />
    </div>
  );
};
export default App;
