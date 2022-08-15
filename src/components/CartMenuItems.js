import { useDispatch } from "react-redux";
import { GrSubtractCircle, GrAddCircle, GrTrash } from 'react-icons/gr';
import { addItemQuantity, removeFromCart, subtractItemQuantity } from "./redux/addToCart";


const CartMenuItems = (props) => {
  const dispatch = useDispatch();
  const { image, name, description, price, quantity } = props;

  return (
    <div className="cart-menu-item">
      <div className="cart-item">
        <img src={image} alt='pizza' />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={() => dispatch(removeFromCart(props))}>
          <GrTrash />
        </button>
        {/* buttons */}
        <div className="quantity">
          <button onClick={() => dispatch(subtractItemQuantity(props))}>
            <GrSubtractCircle />
          </button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(addItemQuantity(props))}>
            <GrAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartMenuItems;