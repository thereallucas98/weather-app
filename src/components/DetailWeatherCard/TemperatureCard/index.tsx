import { WeatherParamsType } from "../../../models/weather.model";
import { TemperatureValue } from "../../WeatherCard/styles";
import {
  InfoDetailCardFontAwesomeIcon,
  TemperatureBlock,
  TemperatureContent,
  TemperatureLabel,
  TemperatureSide,
} from "../styles";

interface TemperatureCardProps {
  data: WeatherParamsType;
}

function TemperatureCard({ data }: TemperatureCardProps) {
  return (
    <TemperatureSide>
      <TemperatureBlock>
        <TemperatureLabel>Temperatura</TemperatureLabel>
        <TemperatureValue>{data.temp}°C</TemperatureValue>
      </TemperatureBlock>
      <TemperatureBlock>
        <TemperatureLabel>Temp. Máxima</TemperatureLabel>
        <TemperatureContent>
          <InfoDetailCardFontAwesomeIcon
            name="temperature-high"
            size={24}
            color="#FFF"
          />
          <TemperatureValue>{data.temp_max}°C</TemperatureValue>
        </TemperatureContent>
      </TemperatureBlock>
      <TemperatureBlock>
        <TemperatureLabel>Temp. Máxima</TemperatureLabel>
        <TemperatureContent>
          <InfoDetailCardFontAwesomeIcon
            name="temperature-low"
            size={24}
            color="#FFF"
          />
          <TemperatureValue>{data.temp_max}°C</TemperatureValue>
        </TemperatureContent>
      </TemperatureBlock>
    </TemperatureSide>
  );
}

export { TemperatureCard };
