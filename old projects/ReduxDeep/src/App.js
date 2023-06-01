import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import { sendData, getData } from "./store/slices/cartActions";
let initial = true;
function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isOpen);
  const shoppingArr = useSelector((state) => state.shopping.shoppingArr);
  const notification = useSelector((state) => state.cart.notification);
  const sendingStatus = useSelector((state) => state.cart.sendingStatus);
  //^ Get The Data ==>
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  //^ Send The Data ==>
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (sendingStatus){
      dispatch(sendData(shoppingArr));
    }
  }, [shoppingArr, sendingStatus, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {isOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

