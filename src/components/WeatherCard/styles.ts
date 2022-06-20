import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const WeatherCardWrapper = styled.View`
  width: 100%;
  /* height: 140px; */

  padding: 10px;
  margin-top: 32px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const WeatherImageContent = styled.View`
  align-items: center;
  justify-content: center;
`;

const WeatherImageStatus = styled(MaterialCommunityIcons)``;

const WeatherImageDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;

const WeatherLocationContent = styled.View``;

const TemperatureValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const LocationLabelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LocationIcon = styled(MaterialIcons)``;

const LocationCity = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
  text-align: right;
`;

const LocationCountry = styled.Text`
  margin-left: 1px;
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_400Regular";
  color: ${({ theme }) => theme.colors.shape};
`;

const InfoDetailsWrapper = styled.View`
  width: 100%;
  height: 80px;

  margin-top: 12px;
  padding: 8px 22px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoDetailCard = styled.View`
  flex: 1;
  padding: 8px;
`;

const InfoDetailCardFeatherIcon = styled(Feather)``;

const InfoDetailCardMaterialCommunityIcon = styled(MaterialCommunityIcons)``;

const InfoDetailCardFontAwesomeIcon = styled(FontAwesome5)``;

const InfoDetailCardTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;

const InfoDetailContentBox = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const InfoDetailCardValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_400Regular";
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;

const FooterButtons = styled.View`
  margin-top: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ShowDetailWeatherButton = styled(TouchableOpacity)`
  height: 62px;
  flex: 1;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.success};

  align-items: center;
  justify-content: center;
`;

const ShowDetailWeatherButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const FavoriteWeatherLocationButton = styled(TouchableOpacity)`
  height: 62px;
  width: 72px;
  border-radius: 8px;
  margin-left: 4px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.attention};
`;

const IconFavoriteWeather = styled(MaterialIcons)``;

export {
  Container,
  WeatherCardWrapper,
  WeatherImageContent,
  WeatherImageStatus,
  WeatherImageDescription,
  WeatherLocationContent,
  TemperatureValue,
  LocationIcon,
  LocationLabelWrapper,
  LocationCity,
  LocationCountry,
  InfoDetailsWrapper,
  InfoDetailCard,
  InfoDetailCardFeatherIcon,
  InfoDetailCardMaterialCommunityIcon,
  InfoDetailCardFontAwesomeIcon,
  InfoDetailCardTitle,
  InfoDetailContentBox,
  InfoDetailCardValue,
  FooterButtons,
  ShowDetailWeatherButton,
  ShowDetailWeatherButtonText,
  FavoriteWeatherLocationButton,
  IconFavoriteWeather,
};
