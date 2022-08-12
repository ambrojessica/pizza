import React from "react";
import { useSelector } from "react-redux";
import CartMenuItems from "./CartMenuItems";

export default function Cart() {
  const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);

  if (quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }
  return (
    <div>
      <p>Cart Items</p>
      {
        cartItems.map((item) => (
          <CartMenuItems key={item.id} {...item} />
        ))
      }
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

