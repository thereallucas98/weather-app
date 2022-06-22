import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.Pressable`
  width: 100%;
  height: 72px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 8px;

  padding: 10px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const WeatherContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const WeatherIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.shape};
`;

const WeatherDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const WeatherLocationLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

export {
  Container,
  WeatherContainer,
  WeatherIcon,
  WeatherDescription,
  WeatherLocationLabel,
};
