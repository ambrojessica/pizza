import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pizza from './components/Pizza';
import schema from './components/formSchema';
import * as yup from 'yup';
import './components/PrettyPizza.css';
import SubmitPage from './components/SubmitPage';


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  ham: false,
  ['Canadian Bacon']: false,
  pineapple: false,
  mushroom: false,
  instructions: '',
};

const formErrors = {
  name: '',
  size: '',
  sauce: '',
  instructions: ''
};

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(formErrors);

  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  return (
    <div className='App'>
      <nav>
        <h1>Fiesta Pizza!</h1>
        <div className="nav-button">
          <Link to="/">Home</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/submit">
          <SubmitPage
          />
        </Route>

        <Route path="/pizza">
          <Pizza
            values={formValues}
            change={onChange}
            errors={errors}
            submit={onSubmit}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
