import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { shoppingActions } from "../../store/slices/shoppingList";
const Products = (props) => {
  const dispatch = useDispatch();
  const onAddFood = (data) => {
    dispatch(shoppingActions.addFood(data));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          amount={1}
          description="This is a first product - amazing!"
          onClick={onAddFood}
        />
        <ProductItem
          title="Test2"
          price={6.4}
          amount={1}
          description="This is a first product - amazing!"
          onClick={onAddFood}
        />
      </ul>
    </section>
  );
};

export default Products;

