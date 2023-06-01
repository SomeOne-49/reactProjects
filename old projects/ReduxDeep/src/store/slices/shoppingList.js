import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  shoppingArr: [],
};

const shoppingList = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addFood(state, action) {
      for (let item of state.shoppingArr) {
        if (item.name === action.payload.name) {
          item.amount++;
          return;
        }
      }
      state.shoppingArr = [...state.shoppingArr, action.payload];
    },
    incrementAmount(state, action) {
      state.shoppingArr[action.payload].amount++;
    },
    decrementAmount(state, action) {
      if (state.shoppingArr[action.payload].amount === 1) {
        state.shoppingArr.splice(action.payload, 1);
        return;
      }
      state.shoppingArr[action.payload].amount--;
    },
  },
});

export const shoppingActions = shoppingList.actions;

export default shoppingList.reducer;
