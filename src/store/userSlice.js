import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state) => {
      state.user = true;
    },
    logoutAction: (state) => {
      state.user = null;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
