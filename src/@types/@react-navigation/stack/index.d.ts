declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    WeatherInDetail: NavigationStackProp<string>;
    Favorite: NavigationStackProp<string>;
    LoginWithoutAuth: NavigationStackProp<string>;
    Dashboard: NavigationStackProp<string>;
  }
}