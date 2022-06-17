import { WeatherWindType } from "../../../models/weather.model";
import {
  InfoDetailCard,
  InfoDetailCardMaterialCommunityIcon,
  InfoDetailCardTitle,
  InfoDetailCardValue,
  InfoDetailContentBox,
  InfoDetailsWrapper,
} from "../styles";

interface WindSunCardProps {
  data: WeatherWindType;
  sunRise: string;
  sunSet: string;
}

function WindSunCard({ data, sunRise, sunSet }: WindSunCardProps) {
  return (
    <InfoDetailsWrapper>
      <InfoDetailCard>
        <InfoDetailCardTitle>Vento</InfoDetailCardTitle>
        <InfoDetailCardValue>
          {data.deg} / {data.speed}
        </InfoDetailCardValue>
      </InfoDetailCard>
      <InfoDetailCard>
        <InfoDetailCardTitle>Sunrise</InfoDetailCardTitle>
        <InfoDetailContentBox>
          <InfoDetailCardMaterialCommunityIcon
            name="weather-sunset-up"
            color="#FFF"
            size={20}
          />
          <InfoDetailCardValue>{sunRise}</InfoDetailCardValue>
        </InfoDetailContentBox>
      </InfoDetailCard>
      <InfoDetailCard>
        <InfoDetailCardTitle>Sunset</InfoDetailCardTitle>
        <InfoDetailContentBox>
          <InfoDetailCardMaterialCommunityIcon
            name="weather-sunset-down"
            color="#FFF"
            size={20}
          />
          <InfoDetailCardValue>{sunSet}</InfoDetailCardValue>
        </InfoDetailContentBox>
      </InfoDetailCard>
    </InfoDetailsWrapper>
  );
}

export { WindSunCard };
