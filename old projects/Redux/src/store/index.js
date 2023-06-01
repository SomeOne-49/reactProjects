import {  configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';
import AuthenticationReducer from "./slices/auth";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: AuthenticationReducer,
  },
});




export default store;
