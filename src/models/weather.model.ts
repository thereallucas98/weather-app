
export interface WeatherParamsType {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface WeatherDate {
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface WeatherType {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherWindType {
  deg: number;
  speed: number;
}

interface WeatherIconType {
  name: string;
  label: string;
}

export interface LocationType {
  main: WeatherParamsType;
  name: string;
  country: string;
  units: WeatherDate;
  weather: WeatherType[];
  wind: WeatherWindType;
  icon: WeatherIconType;
}