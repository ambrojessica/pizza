export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';


export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id,
      quantity: 1
    }
  };
};

export const removeFromCart = (id) => {

  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
};

export const updateCartQuantity = (id) => {

  return {
    type: 'ADD_QUANTITY',
    id,
    quantity: 1,
  };
};