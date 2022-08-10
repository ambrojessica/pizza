import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/addToCart';

export default function MenuCard({ pizza }) {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      {/* image */}
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
