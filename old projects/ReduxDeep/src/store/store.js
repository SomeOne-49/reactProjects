import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cart";
import shoppingList from "./slices/shoppingList";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    shopping: shoppingList,
  },
});

export default store;
