import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../models/redux";

const initialStateValue: IUserState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    addUserData: (state, action) => {
      const user = action.payload;

      state.data = user;
    },
    updateUserData: (state, action) => {
      const user = action.payload;

      state.data = user;
    },
  },
});

export const {
  addUserData,
  updateUserData,
} = userSlice.actions;

export default userSlice.reducer;
