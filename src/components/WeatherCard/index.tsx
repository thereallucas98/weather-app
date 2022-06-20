import { LocationType } from "../../models/weather.model";
import { formatTimestampToHour } from "../../utils/formatTimestampToHour";
import { MainCard } from "./MainCard";
import { TemperatureCard } from "./TemperatureCard";
import { WindSunCard } from "./WindSunCard";

import * as WeatherCardUI from "./styles";

interface WeatherCardProps {
  data: LocationType;
}

function WeatherCard({ data }: WeatherCardProps) {
  const sunRise = formatTimestampToHour(data.units.sunrise);
  const sunSet = formatTimestampToHour(data.units.sunset);

  return (
    <WeatherCardUI.Container>
      <MainCard
        icon={data.icon}
        name={data.name}
        country={data.country}
        temperature={data.main.temp}
      />
      <TemperatureCard data={data.main} />
      <WindSunCard data={data.wind} sunRise={sunRise} sunSet={sunSet} />

      <WeatherCardUI.FooterButtons>
        <WeatherCardUI.ShowDetailWeatherButton>
          <WeatherCardUI.ShowDetailWeatherButtonText>Ver mais detalhes</WeatherCardUI.ShowDetailWeatherButtonText>
        </WeatherCardUI.ShowDetailWeatherButton>
        <WeatherCardUI.FavoriteWeatherLocationButton>
          <WeatherCardUI.IconFavoriteWeather 
            name="favorite-border"
            size={24}
            color="#FFFF"
          />
        </WeatherCardUI.FavoriteWeatherLocationButton>
      </WeatherCardUI.FooterButtons>
    </WeatherCardUI.Container>
  );
}

export { WeatherCard };
