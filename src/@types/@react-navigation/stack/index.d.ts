declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    WeatherInDetail: NavigationStackProp<string>;
  }
}