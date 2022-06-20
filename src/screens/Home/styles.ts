import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../global/styles/theme";

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.View`
  height: 100px;
  padding: 0 10px;
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
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 12px;
  flex-direction: row;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  padding: 0 12px;

  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  `;

const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.success};
  padding: 16px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const SearchIcon = styled(Feather)``;

export {
  Container,
  Header,
  Greetings,
  ProfileImage,
  SearchWrapper,
  SearchInput,
  InputButton,
  SearchIcon,
};
