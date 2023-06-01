import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { shoppingActions } from "../../store/slices/shoppingList";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(shoppingActions.incrementAmount(props.id));
  };
  const onDecrement = () => {
    dispatch(shoppingActions.decrementAmount(props.id));
  };
  const { name, amount, price } = props.item;
  const total = price * amount;
  return (
    <li id={props.id} className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

