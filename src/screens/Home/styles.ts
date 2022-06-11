import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.View`
  height: 100px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Greetings = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const ProfileImage = styled.Image.attrs({
  borderColor: theme.colors.primary,
  borderWidth: 1,
})`
  height: 60px;
  width: 60px;

  border-radius: 30px;
`;

const SearchWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_light};
  padding: 10px;
  border-radius: 8px;
  margin-top: 32px;
  margin-bottom: 12px;
  flex-direction: row;
`;

const SearchIcon = styled(Feather)``;

const SearchInput = styled.TextInput`
  width: 90%;
  height: 42px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

const WeatherCardWrapper = styled.View`
  width: 100%;
  height: 160px;

  padding: 10px;
  margin-top: 32px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const WeatherImageStatus = styled(MaterialCommunityIcons)``;

const WeatherLocationContent = styled.View``;

const TemperatureValue = styled.Text`
  font-size: ${RFValue(42)}px;
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
  margin-left: 2px;
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_400Regular";
  color: ${({ theme }) => theme.colors.shape};
`;

export {
  Container,
  Header,
  Greetings,
  ProfileImage,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  WeatherCardWrapper,
  WeatherImageStatus,
  WeatherLocationContent,
  TemperatureValue,
  LocationIcon,
  LocationLabelWrapper,
  LocationCity,
  LocationCountry,
};
