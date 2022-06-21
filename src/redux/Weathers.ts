import { createSlice } from "@reduxjs/toolkit";
import { IWeatherState } from "../models/redux";

const initialStateValue: IWeatherState = {
  items: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialStateValue,
  reducers: {
    addWeatherLocationToFavorite: (state, action) => {
      const weather = action.payload;
      const hasWeatherAlreadyFavorited = state.items.findIndex(
        (item) => item.name === weather.name
      );

      if (hasWeatherAlreadyFavorited === -1) {
        state.items.push(weather);
      }
    },

    removeWeatherLocationFromFavorite: (state, action) => {
      const weather = action.payload;
      const hasWeatherAlreadyFavorite = state.items.findIndex(
        (item) => item.name === weather.name
      );

      if (hasWeatherAlreadyFavorite === 0) {
        const updatedItems = state.items.filter(
          (item) => item.name !== weather.name
        );

        state.items = updatedItems;
      }
    },
  },
});

export const {
  addWeatherLocationToFavorite,
  removeWeatherLocationFromFavorite,
} = weatherSlice.actions;

export default weatherSlice.reducer;
