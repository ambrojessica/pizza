import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/addToCart';

export default function MenuCard({ id, description, name, price }) {
  const dispatch = useDispatch();
  return (
    <div>
      {/* image */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={() => dispatch(addToCart({ id, description, name, price }))}>Add To Cart</button>
    </div>
  );
}
