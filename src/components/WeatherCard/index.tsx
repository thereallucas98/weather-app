import { LocationType } from "../../models/weather.model";
import { formatTimestampToHour } from "../../utils/formatTimestampToHour";
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
      <WeatherCardUI.WeatherCardWrapper>
        <WeatherCardUI.WeatherImageContent>
          <WeatherCardUI.WeatherImageStatus
            name={data.icon.name}
            size={120}
            color="#FFF"
          />
          <WeatherCardUI.WeatherImageDescription>
            {data.icon.label}
          </WeatherCardUI.WeatherImageDescription>
        </WeatherCardUI.WeatherImageContent>
        <WeatherCardUI.WeatherLocationContent>
          <WeatherCardUI.TemperatureValue>
            {data.main.temp}°C
          </WeatherCardUI.TemperatureValue>
          <WeatherCardUI.LocationLabelWrapper>
            <WeatherCardUI.LocationIcon
              name="location-pin"
              size={20}
              color="#FFF"
            />
            <WeatherCardUI.LocationCity>
              {data.name},
            </WeatherCardUI.LocationCity>
            <WeatherCardUI.LocationCountry>
              {data.country}
            </WeatherCardUI.LocationCountry>
          </WeatherCardUI.LocationLabelWrapper>
        </WeatherCardUI.WeatherLocationContent>
      </WeatherCardUI.WeatherCardWrapper>

      <TemperatureCard data={data.main} />
      <WindSunCard data={data.wind} sunRise={sunRise} sunSet={sunSet} />
    </WeatherCardUI.Container>
  );
}

export { WeatherCard };
