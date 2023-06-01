import { cartActions } from "./cart";
import { shoppingActions } from "./shoppingList";
export const sendData = (data) => {
  return async (dispatch) => {
    dispatch(
      cartActions.setNotification({
        status: "Send",
        title: "Sending...",
        message: "date is sending",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://rdux-https-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw new Error("Error");
    };

    try {
      await sendRequest();
      dispatch(
        cartActions.setNotification({
          status: "success",
          title: "Success!",
          message: "date is sended.",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error...",
          message: "date is not saved",
        })
      );
    }
  };
};

export const getData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://rdux-https-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) throw new Error("fetching failed");
      const data = await response.json();
      return data;
    };
    try {
      const myData = await fetchData();
      if (myData)
        myData.forEach((el) => {
          dispatch(shoppingActions.addFood(el));
        });
    } catch (error) {
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error...",
          message: "date is not saved",
        })
      );
    }
  };
};
