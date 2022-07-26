import { WeatherParamsType } from "../../../models/weather.model";
import {
  InfoDetailCard,
  InfoDetailCardTitle,
  InfoDetailCardValue,
  InfoDetailsWrapper,
} from "../../WeatherCard/styles";

interface PressureCardProps {
  data: WeatherParamsType;
}

function PressureCard({ data }: PressureCardProps) {
  return (
    <InfoDetailsWrapper>
      <InfoDetailCard>
        <InfoDetailCardTitle>Umidade</InfoDetailCardTitle>
        <InfoDetailCardValue>{data.humidity}%</InfoDetailCardValue>
      </InfoDetailCard>
      <InfoDetailCard>
        <InfoDetailCardTitle>Pressão</InfoDetailCardTitle>
        <InfoDetailCardValue>{data.pressure}</InfoDetailCardValue>
      </InfoDetailCard>
    </InfoDetailsWrapper>
  );
}

export { PressureCard };
