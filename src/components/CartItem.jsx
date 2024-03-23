import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem({ id }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = () => {
    if (amount === 1) {
      dispatch(removeItem({ id }));
      return;
    }
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleRemoveItem}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncreaseQuantity}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecreaseQuantity}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
