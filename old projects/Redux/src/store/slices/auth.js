import { createSlice } from "@reduxjs/toolkit";
//~ Authentication States ==>
const initialAuthState = { isAuthenticated: false };
const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    toggleAuthentication(state, action) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const authActions = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
