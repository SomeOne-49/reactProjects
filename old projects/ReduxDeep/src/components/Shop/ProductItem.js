import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cart";

const ProductItem = (props) => {
  const { title, price, description, onClick } = props;
  const dispatch = useDispatch()
  const onAddToCart = () => {
    dispatch(cartActions.sendingStart())
    onClick({
      name: title,
      price: price.toFixed(2),
      amount: props.amount,
    });
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

