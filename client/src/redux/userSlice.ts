// redux/userSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types/types";
import { refreshUserData } from "../services/authService";
import { BASE_URL } from "../constants";

// Define the type for user state

// Initial state for the user slice
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};
export const fetchFreshUserData = createAsyncThunk(
  `${BASE_URL}auth/fetchFreshUserData`,
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await refreshUserData(token);
      if (!response) {
        return rejectWithValue("Failed to refresh user data...");
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "The token expired");
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchFreshUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchFreshUserData.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
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
