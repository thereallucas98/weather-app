import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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

const ProfileImage = styled.Image.attrs(({ theme }) => ({
  borderColor: theme.colors.primary,
  borderWidth: 1,
}))`
  height: 60px;
  width: 60px;

  border-radius: 30px;
`;

export { Container, Header, Greetings, ProfileImage };
