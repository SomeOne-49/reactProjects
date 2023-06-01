import { useSelector, useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/slices/cart";

const CartButton = (props) => {
  const cartItemsNumber = useSelector((state) => state.shopping.shoppingArr.length);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartActions.toggleOpen());
  };
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default CartButton;

