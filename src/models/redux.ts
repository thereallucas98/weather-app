import { UserType } from "./user.model";
import { LocationType } from "./weather.model";

export interface IWeatherState {
  items: LocationType[];
};

export interface IUserState {
  data: UserType;
}