import React from 'react';

export default function MenuCard({ pizza }) {
  return (
    <div>
      {/* image */}
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
