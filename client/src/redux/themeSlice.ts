// redux/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "dark", // Default theme
};

// Create slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

// Export actions
export const { toggleTheme, setTheme } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
