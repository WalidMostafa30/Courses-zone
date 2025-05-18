import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./modalsSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    user: userSlice,
  },
});
