const initialState = {
  cart: [],
  qty: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':

    case 'UPDATE_CART_QUANTITY':
      return {

      };


    case 'REMOVE_FROM_CART':
      const deleteFromCart = state.filter((item) => {
        if (item.id === action.payload.id) {
          item.qty += 1;
        }
        return item;
      });
      return {

      };
    default:
      return state;
  }
};

export default cartReducer;