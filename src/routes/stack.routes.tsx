import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";

import { WeatherInDetail } from "../screens/WeatherInDetail";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Dashboard" component={TabRoutes} />
          <Screen name="WeatherInDetail" component={WeatherInDetail} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackRoutes;
