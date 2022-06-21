import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "./src/redux/store";
import theme from "./src/global/styles/theme";
import StackRoutes from "./src/routes/stack.routes";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <StackRoutes />
      </Provider>
    </ThemeProvider>
  );
}
