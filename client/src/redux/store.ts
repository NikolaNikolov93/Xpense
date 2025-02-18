// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Configure store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Type for dispatch and root state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
