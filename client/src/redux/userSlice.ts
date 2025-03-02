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
      state.user = {
        ...action.payload,
        totalBalance: action.payload.totalBalance ?? 0,
      };
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
    updateUserProfilePicture: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.profilePicture = action.payload; // Update the profile picture with Base64 string
      }
    },
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user.name = action.payload.name;
        state.user.currency = action.payload.currency;
        state.user.totalBalance = action.payload.totalBalance;
      }
    },
  },
});

// Export actions
export const {
  setUser,
  removeUser,
  updateUserBalance,
  updateUserProfile,
  updateUserProfilePicture,
} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
