export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';


export const addToCart = (payload) => {
  return {
    type: 'ADD_TO_CART',
    payload
  };
};

export const removeFromCart = (payload) => {

  return {
    type: 'REMOVE_FROM_CART',
    payload,
  };
};

export const updateCartQuantity = (payload) => {

  return {
    type: 'UPDATE_CART_QUANTITY',
    payload
  };
};
