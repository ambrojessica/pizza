import React from 'react';
import './PrettyPizza.css';
import { useHistory } from 'react-router-dom';

const PizzaForm = (props) => {

  //const
  const { change, submit, values, errors } = props;
  const { name, size, instructions } = props.values;
  const history = useHistory();

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const completeValue = type === 'checkbox' ? checked : value;
    change(name, completeValue);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
    history.push('/submit');
  };

  return (
    <form>
      <div className='Form' onSubmit={onSubmit} id='pizza-form' >
        <div className='title'>
          <h2>Build Your Own Pizza!</h2>
          <img src={'https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'}
            alt='pizza in oven'
          />
        </div>

        {/* name input */}
        <div className='name' id='name-input'>
          <div>{errors.name}</div>
          <label>Let's Start With Your Name:
            <input
              value={name}
              type='text'
              name='name'
              onChange={onChange}
            />
          </label>
        </div>

        {/* size */}
        <div className='size' id='size-dropdown'>
          <label>Start with a Size:</label>
          <select
            onChange={onChange}
            value={size}
            name='size'
          >
            <option value=''>Select a Size</option>
            <option value='small'>Small - 4 Slices</option>
            <option value='medium'>Medium - 8 Slices </option>
            <option value='large'>Large - 12 Slices</option>
          </select>
        </div>

        {/* sauce */}
        <div className='sauce'>
          <div className='sauce-flex'>
            <input
              type='radio'
              name='sauce'
              value='original red'
              onChange={onChange}
              checked={values.sauce === 'original red'}
            />
            <label>Original Red</label>
          </div>

          <div className='sauce-flex'>
            <input
              type='radio'
              name='sauce'
              value='bbq sauce'
              onChange={onChange}
              checked={values.sauce === 'bbq sauce'}
            />
            <label>BBQ Sauce</label>
          </div>

          <div className='sauce-flex'>
            <input
              type='radio'
              name='sauce'
              value='garlic ranch'
              onChange={onChange}
              checked={values.sauce === 'garlic ranch'}
            />
            <label>Garlic Ranch</label>
          </div>

          <div className='sauce-flex'>
            <input
              type='radio'
              name='sauce'
              value='spinach alfredo'
              onChange={onChange}
              checked={values.sauce === 'spinach alfredo'}
            />
            <label>Spinach Alfredo</label>
          </div>
        </div>

        {/*toppings*/}
        <div className='toppings'>
          <div className='toppingIndex'>
            <input
              type='checkbox'
              name='pepperoni'
              onChange={onChange}
              checked={values.pepperoni}
            />
            <label>Pepperoni</label>
          </div>

          <div className='toppingIndex'>
            <input
              type='checkbox'
              name='sausage'
              onChange={onChange}
              checked={values.sausage}
            />
            <label>Sausage</label>
          </div>

          <div className='toppingIndex'>
            <input
              type='checkbox'
              name='ham'
              onChange={onChange}
              checked={values.ham}
            />
            <label>Ham</label>
          </div>

          <div className='toppingIndex'>
            <input
              type='checkbox'
              name='canadian bacon'
              onChange={onChange}
              checked={values['canadian bacon']}
            />
            <label>Canadian Bacon</label>
          </div>

          <div className='toppingIndex'>
            <input
              type='checkbox'
              name='pineapple'
              onChange={onChange}
              checked={values.pineapple}
            />
            <label>Pineapple</label>
          </div>

          <div className='toppingIndex'>
            <input
              type='checkbox'
              name='mushrooms'
              onChange={onChange}
              checked={values.mushroom}
            />
            <label>Mushrooms</label>
          </div>

        </div>

        {/* special instructions */}
        <div className='instructions' id='special-text'>
          <label>Any Special Instructions:</label>
          <input
            value={instructions}
            placeholder="Feeling spicy?"
            type='text'
            name='instructions'
            onChange={onChange}
          />
        </div>

        {/* button */}
        <button onClick={onSubmit} type='submit' className='add-cart'>Add to Cart 🛒</button>

        <div className='top-page'>
          <a href='#'>Back To Top</a>
        </div>
      </div>
    </form >
  );

};

export default PizzaForm;