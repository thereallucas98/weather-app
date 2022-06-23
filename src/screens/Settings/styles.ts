import { TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 115}px;
`;

const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};
`;

const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
`;

const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;

const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

const LoginButton = styled(TouchableOpacity)`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;
  padding: 19px;
  align-items: center;
  justify-content: center;
`;

const LoginButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme }) => theme.colors.title};
`;

export {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer,
  LoginButton,
  LoginButtonText,
};
