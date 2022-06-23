import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Container, IconContainer, InputTextComponent } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  previousValue?: string;
  value?: string;
}

export function InputText({ iconName, value, previousValue, ...rest }: InputProps) {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!previousValue);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.primary : theme.colors.text
          }
        />
      </IconContainer>

      <InputTextComponent
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholderTextColor={theme.colors.text}
        {...rest}
      />
    </Container>
  );
}
