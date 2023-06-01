import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const foodArr = useSelector((state) => state.shopping.shoppingArr);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {foodArr.map((el,index) => {
          return <CartItem key={index} item={el} id={index} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;

