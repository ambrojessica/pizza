import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  Cart: [],
  qty: 0,
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:



    case UPDATE_CART_QUANTITY:



    case REMOVE_FROM_CART:



    default:
      return state;
  };
};

export default cartReducer;