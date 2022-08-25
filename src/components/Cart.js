import React from "react";
import { useSelector } from "react-redux";
import CartMenuItems from "./CartMenuItems";

export default function Cart() {
  const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);

  if (quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }
  return (
    <div className="cart">
      <h2>Your Cart Items</h2>
      {
        cartItems.map((item) => (
          <CartMenuItems key={item.id} {...item} />
        ))
      }
      <p>Shipping and Handling: Free</p>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <button className="checkout" onClick={() => alert('Working on checkout. Thank you for visiting Little Mateos')}>Proceed to Checkout</button>
    </div >
  );
};

