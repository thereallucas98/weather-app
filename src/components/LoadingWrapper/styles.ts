import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: "Roboto_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;

export { Container, Content, LoadingText };
