import { configureStore } from "@reduxjs/toolkit";
import tvShowReducer from "./Weathers";

export const store = configureStore({
  reducer: {
    weathers: tvShowReducer,
  }
});

// State 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;