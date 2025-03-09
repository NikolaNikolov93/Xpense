// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Correct import for localStorage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "theme"],
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

// Configure store
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore redux-persist actions
      },
    }),
});

// Type for dispatch and root state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
