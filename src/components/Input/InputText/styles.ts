import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  margin-bottom: 8px;
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `};
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const InputTextComponent = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_light};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: "Roboto_400Regular";
  padding: 0 23px;
`;
