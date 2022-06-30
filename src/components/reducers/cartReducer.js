import { ADD_TO_CART, ADD_QUANTITY, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  Cart: [],
  qty: 0,
  // total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      if (state.qty === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price
        };
        state.Cart.push(cart);
      }
      else {
        let check = false;
        state.Cart.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Cart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price
          };
          state.Cart.push(_cart);
        }
      }
      return {
        ...state,
        qty: state.qty + 1
      };

    case 'UPDATE_CART_QUANTITY':
      state.qty++;
      state.Cart[action.payload].quantity++;
      return {
        ...state
      };


    case 'REMOVE_FROM_CART':
      let quantity_ = state.Cart[action.payload].quantity;
      return {
        ...state,
        qty: state.qty - quantity_,
        Cart: state.Cart.filter(item => {
          return item.id !== state.Cart[action.payload].id;
        })
      };
    default:
      return state;
  };
};

export default cartReducer;