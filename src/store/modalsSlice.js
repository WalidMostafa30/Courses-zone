import { createSlice } from "@reduxjs/toolkit";

const initialState = { register: false, login: false };

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleRegister: (state) => {
      state.register = !state.register;
    },
    toggleLogin: (state) => {
      state.login = !state.login;
    },
  },
});

export const { toggleRegister, toggleLogin } = modalsSlice.actions;

export default modalsSlice.reducer;
