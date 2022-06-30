export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';


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
    type: 'ADD_QUANTITY',
    payload,
    quantity: 1,
  };
};
