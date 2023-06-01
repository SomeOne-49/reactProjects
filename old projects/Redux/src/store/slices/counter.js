import { createSlice } from "@reduxjs/toolkit";
//~ Countr States ==>
const initialCounterState = { counter: 0, toggleCounter: true };
const counterSlice = createSlice({
  name: "counterReducer",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      ++state.counter;
    },
    decrement(state) {
      --state.counter;
    },
    increaseBy(state, action) {
      state.counter += action.payload;
      state.toggleCounter = true;
    },
    decreaseBy(state, action) {
      state.counter -= action.payload;
      state.toggleCounter = true;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
