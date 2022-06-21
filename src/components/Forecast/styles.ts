import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 82px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primary};
  margin: 10px auto;
  padding: 10px;

  border-radius: 8px;
`;

const DayAndMonthContent = styled.View``;

const DayAndMonthValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const ForecastWeatherContent = styled.View`
  align-items: center;
  justify-content: center;
`;

const ForecastWeatherIcon = styled(MaterialCommunityIcons)``;

const ForecastWeatherValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const TemperatureContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primary_light};
`;

const MaxTemperature = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const MinTemperature = styled(MaxTemperature)`
  font-size: ${RFValue(12)}px;
  font-family: "Roboto_400Regular";

  margin-left: 10px;
`;

export {
  Container,
  DayAndMonthContent,
  DayAndMonthValue,
  ForecastWeatherContent,
  ForecastWeatherIcon,
  ForecastWeatherValue,
  TemperatureContent,
  MaxTemperature,
  MinTemperature,
};
