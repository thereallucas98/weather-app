import { LocationType } from "../../models/weather.model";
import { formatTimestampToHour } from "../../utils/formatTimestampToHour";
import { WindSunCard } from "../WeatherCard/WindSunCard";
import { PressureCard } from "./PressureCard";
import * as DetailWeatherCardUI from "./styles";
import { TemperatureCard } from "./TemperatureCard";

interface DetailWeatherCardProps {
  data: LocationType;
}

function DetailWeatherCard({ data }: DetailWeatherCardProps) {
  const sunRise = formatTimestampToHour(data.units.sunrise);
  const sunSet = formatTimestampToHour(data.units.sunset);

  return (
    <DetailWeatherCardUI.Container>
      <DetailWeatherCardUI.WeatherCardWrapper>
        <DetailWeatherCardUI.WeatherInfoSky>
          <DetailWeatherCardUI.WeatherImageStatus
            name={data.icon.name}
            size={80}
            color="#fff"
          />
          <DetailWeatherCardUI.WeatherImageDescription>
            {data.icon.label}
          </DetailWeatherCardUI.WeatherImageDescription>
        </DetailWeatherCardUI.WeatherInfoSky>
        <TemperatureCard data={data.main} />
      </DetailWeatherCardUI.WeatherCardWrapper>
      <WindSunCard data={data.wind} sunRise={sunRise} sunSet={sunSet} />
      <PressureCard data={data.main} />
    </DetailWeatherCardUI.Container>
  );
}

export { DetailWeatherCard };
