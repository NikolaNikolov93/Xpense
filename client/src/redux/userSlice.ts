// redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types/types";

// Define the type for user state

// Initial state for the user slice
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUserBalance: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.totalBalance = action.payload;
      }
    },
  },
});

// Export actions
export const { setUser, removeUser, updateUserBalance } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
