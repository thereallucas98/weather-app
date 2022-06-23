import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Weathers";
import userReducer from "./User";

export const store = configureStore({
  reducer: {
    weathers: weatherReducer,
    user: userReducer,
  }
});

// State 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;