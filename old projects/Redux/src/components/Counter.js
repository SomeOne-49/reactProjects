import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../store/slices/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.toggleCounter);
  const incAmount = 4;
  const decAmount = 3;
  const onIncrement = () => {
    dispatch(counterAction.increment());
  };
  const onIncreaseBy = () => {
    dispatch(counterAction.increaseBy(incAmount));
  };
  const onDecreaseBy = () => {
    dispatch(counterAction.decreaseBy(decAmount));
  };
  const onDecrement = () => {
    dispatch(counterAction.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onIncreaseBy}>Increase By {incAmount}</button>
        <button onClick={onDecreaseBy}>Decrease By {decAmount}</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

