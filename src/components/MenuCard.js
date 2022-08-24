import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/addToCart';

export default function MenuCard({ id, image, description, name, price }) {
  const dispatch = useDispatch();
  return (
    <div className='menuCard'>
      <img src={image} alt='pizza' onClick={() => dispatch(addToCart({ id, description, name, price }))} />
      <div className='menuCardItem'>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>{price}</h3>
        <button onClick={() => dispatch(addToCart({ id, description, name, price }))}>Add To Cart</button>
      </div>
    </div>
  );
}
