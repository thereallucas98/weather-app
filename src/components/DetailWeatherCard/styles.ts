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

  padding: 10px;
  margin-top: 32px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const WeatherInfoSky = styled.View`
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

const TemperatureSide = styled.View``;

const TemperatureBlock = styled.View``;

const TemperatureLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const TemperatureContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoDetailCardFontAwesomeIcon = styled(FontAwesome5)``;

const TemperatureValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

export {
  Container,
  WeatherCardWrapper,
  WeatherInfoSky,
  WeatherImageStatus,
  WeatherImageDescription,
  TemperatureSide,
  TemperatureBlock,
  TemperatureLabel,
  TemperatureContent,
  InfoDetailCardFontAwesomeIcon,
  TemperatureValue,
};
