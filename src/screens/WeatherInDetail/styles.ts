import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.View`
  width: 100%;
  height: 72px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_light};
`;

const goBackButton = styled(TouchableOpacity)`
  height: 62px;
  width: 62px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

const goBackIcon = styled(MaterialIcons)``;

const LocationTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const FavoriteWeatherLocationButton = styled(goBackButton)``;

const IconFavoriteWeather = styled(MaterialIcons)``;

const NextDays = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};

  margin: 20px auto;
`;

const WeatherDetailContent = styled.View`
  flex: 1;
  padding: 10px;
`;

export {
  Container,
  Header,
  goBackButton,
  goBackIcon,
  LocationTitle,
  FavoriteWeatherLocationButton,
  IconFavoriteWeather,
  NextDays,
  WeatherDetailContent,
};
