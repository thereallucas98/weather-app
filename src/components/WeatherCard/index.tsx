import { LocationType } from "../../models/weather.model";
import * as WeatherCardUI from "./styles";

import { formatTimestampToHour } from "../../utils/formatTimestampToHour";

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

      <WeatherCardUI.InfoDetailsWrapper>
        <WeatherCardUI.InfoDetailCard>
          <WeatherCardUI.InfoDetailCardTitle>
            Sensação
          </WeatherCardUI.InfoDetailCardTitle>
          <WeatherCardUI.InfoDetailCardValue>
            {data.main.feels_like}°C
          </WeatherCardUI.InfoDetailCardValue>
        </WeatherCardUI.InfoDetailCard>
        <WeatherCardUI.InfoDetailCard>
          <WeatherCardUI.InfoDetailCardTitle>
            Máxima
          </WeatherCardUI.InfoDetailCardTitle>
          <WeatherCardUI.InfoDetailContentBox>
            <WeatherCardUI.InfoDetailCardFontAwesomeIcon
              name="temperature-high"
              color="#FFF"
              size={20}
            />
            <WeatherCardUI.InfoDetailCardValue>
              {data.main.temp_max}
            </WeatherCardUI.InfoDetailCardValue>
          </WeatherCardUI.InfoDetailContentBox>
        </WeatherCardUI.InfoDetailCard>
        <WeatherCardUI.InfoDetailCard>
          <WeatherCardUI.InfoDetailCardTitle>
            Mínima
          </WeatherCardUI.InfoDetailCardTitle>
          <WeatherCardUI.InfoDetailContentBox>
            <WeatherCardUI.InfoDetailCardFontAwesomeIcon
              name="temperature-low"
              color="#FFF"
              size={20}
            />
            <WeatherCardUI.InfoDetailCardValue>
              {data.main.temp_min}
            </WeatherCardUI.InfoDetailCardValue>
          </WeatherCardUI.InfoDetailContentBox>
        </WeatherCardUI.InfoDetailCard>
      </WeatherCardUI.InfoDetailsWrapper>

      <WeatherCardUI.InfoDetailsWrapper>
        <WeatherCardUI.InfoDetailCard>
          <WeatherCardUI.InfoDetailCardTitle>
            Vento
          </WeatherCardUI.InfoDetailCardTitle>
          <WeatherCardUI.InfoDetailCardValue>
            {data.wind.deg} / {data.wind.speed}
          </WeatherCardUI.InfoDetailCardValue>
        </WeatherCardUI.InfoDetailCard>
        <WeatherCardUI.InfoDetailCard>
          <WeatherCardUI.InfoDetailCardTitle>
            Sunrise
          </WeatherCardUI.InfoDetailCardTitle>
          <WeatherCardUI.InfoDetailContentBox>
            <WeatherCardUI.InfoDetailCardMaterialCommunityIcon
              name="weather-sunset-up"
              color="#FFF"
              size={20}
            />
            <WeatherCardUI.InfoDetailCardValue>
              {sunRise}
            </WeatherCardUI.InfoDetailCardValue>
          </WeatherCardUI.InfoDetailContentBox>
        </WeatherCardUI.InfoDetailCard>
        <WeatherCardUI.InfoDetailCard>
          <WeatherCardUI.InfoDetailCardTitle>
            Sunset
          </WeatherCardUI.InfoDetailCardTitle>
          <WeatherCardUI.InfoDetailContentBox>
            <WeatherCardUI.InfoDetailCardMaterialCommunityIcon
              name="weather-sunset-down"
              color="#FFF"
              size={20}
            />
            <WeatherCardUI.InfoDetailCardValue>
              {sunSet}
            </WeatherCardUI.InfoDetailCardValue>
          </WeatherCardUI.InfoDetailContentBox>
        </WeatherCardUI.InfoDetailCard>
      </WeatherCardUI.InfoDetailsWrapper>
    </WeatherCardUI.Container>
  );
}

export { WeatherCard };
