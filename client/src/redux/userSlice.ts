// redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for user state
interface UserState {
  user: {
    name: string;
    email: string;
    currency: string;
    totalBalance: number;
  } | null;
  isAuthenticated: boolean;
}

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
    setUser: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        currency: string;
        totalBalance: number;
      }>
    ) => {
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
