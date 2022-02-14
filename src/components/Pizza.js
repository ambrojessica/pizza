import React from 'react';
import './PrettyPizza.css';

const PizzaForm = (props) => {

  //const
  const { change, submit, values, errors } = props;
  const { name, size, instructions } = props.values;

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const completeValue = type === 'checkbox' ? checked : value;
    change(name, completeValue);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
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
          <label>Start with a Size:
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
          </label>
        </div>

        {/* sauce */}
        <div className='sauce'>
          <label>Original Red
            <input
              type='radio'
              name='sauce'
              value='original red'
              onChange={onChange}
              checked={values.sauce === 'original red'}
            />
          </label>
          <label>BBQ Sauce
            <input
              type='radio'
              name='sauce'
              value='bbq sauce'
              onChange={onChange}
              checked={values.sauce === 'bbq sauce'}
            />
          </label>
          <label>Garlic Ranch
            <input
              type='radio'
              name='sauce'
              value='garlic ranch'
              onChange={onChange}
              checked={values.sauce === 'garlic ranch'}
            />
          </label>
          <label>Spinach Alfredo
            <input
              type='radio'
              name='sauce'
              value='spinach alfredo'
              onChange={onChange}
              checked={values.sauce === 'spinach alfredo'}
            />
          </label>
        </div>

        {/*toppings*/}
        <div className='toppings'>
          <label>Pepperoni
            <input
              type='checkbox'
              name='pepperoni'
              onChange={onChange}
              checked={values.pepperoni}
            />
          </label>
          <label>Sausage
            <input
              type='checkbox'
              name='Sausage'
              onChange={onChange}
              checked={values.sausage}
            />
          </label>
          <label>Ham
            <input
              type='checkbox'
              name='ham'
              onChange={onChange}
              checked={values.ham}
            />
          </label>
          <label>Canadian Bacon
            <input
              type='checkbox'
              name='canadian bacon'
              onChange={onChange}
              checked={values['canadian bacon']}
            />
          </label>
          <label>Pineapple
            <input
              type='checkbox'
              name='pineapple'
              onChange={onChange}
              checked={values.pineapple}
            />
          </label>
          <label>Mushrooms
            <input
              type='checkbox'
              name='mushrooms'
              onChange={onChange}
              checked={values.mushroom}
            />
          </label>
        </div>

        {/* special instructions */}
        <div className='instructions' id='special-text'>
          <label>Any Special Instructions:
            <input
              value={instructions}
              type='text'
              name='instructions'
              onChange={onChange}
            />
          </label>
        </div>

        {/* button */}
        <button>Add to Cart 🛒</button>
      </div>
    </form>
  );

};

export default PizzaForm;