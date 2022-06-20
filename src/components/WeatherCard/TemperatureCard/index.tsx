import { WeatherParamsType } from "../../../models/weather.model";
import {
  InfoDetailCard,
  InfoDetailCardFontAwesomeIcon,
  InfoDetailCardTitle,
  InfoDetailCardValue,
  InfoDetailContentBox,
  InfoDetailsWrapper,
} from "../styles";

interface TemperatureCardProps {
  data: WeatherParamsType;
}

function TemperatureCard({ data }: TemperatureCardProps) {
  return (
    <InfoDetailsWrapper>
      <InfoDetailCard>
        <InfoDetailCardTitle>Sensação</InfoDetailCardTitle>
        <InfoDetailCardValue>{data.feels_like}°C</InfoDetailCardValue>
      </InfoDetailCard>
      <InfoDetailCard>
        <InfoDetailCardTitle>Máxima</InfoDetailCardTitle>
        <InfoDetailContentBox>
          <InfoDetailCardFontAwesomeIcon
            name="temperature-high"
            color="#FFF"
            size={20}
          />
          <InfoDetailCardValue>{data.temp_max}°C</InfoDetailCardValue>
        </InfoDetailContentBox>
      </InfoDetailCard>
      <InfoDetailCard>
        <InfoDetailCardTitle>Mínima</InfoDetailCardTitle>
        <InfoDetailContentBox>
          <InfoDetailCardFontAwesomeIcon
            name="temperature-low"
            color="#FFF"
            size={20}
          />
          <InfoDetailCardValue>{data.temp_min}°C</InfoDetailCardValue>
        </InfoDetailContentBox>
      </InfoDetailCard>
    </InfoDetailsWrapper>
  );
}

export { TemperatureCard };
