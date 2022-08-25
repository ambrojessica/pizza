import { useDispatch } from "react-redux";
import { addItemQuantity, removeFromCart, subtractItemQuantity } from "./redux/addToCart";
import { AiOutlineClose } from "react-icons/ai";


const CartMenuItems = (props) => {
  const dispatch = useDispatch();
  const { image, name, price, quantity } = props;

  return (
    <div className="cart-item">
      <span onClick={() => dispatch(removeFromCart(props))}>
        <AiOutlineClose />
      </span>
      <img src={image} alt='pizza' />
      <h3>{name}</h3>
      <p>${price}</p>
      {/* buttons */}
      <div className="quantity">
        <button onClick={() => dispatch(subtractItemQuantity(props))}>
          -
        </button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(addItemQuantity(props))}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartMenuItems;