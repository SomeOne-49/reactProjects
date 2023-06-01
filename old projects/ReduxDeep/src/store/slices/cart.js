import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  sendingStatus: false,
  notification: null,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
    },
    sendingStart(state){
      state.sendingStatus = true
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
