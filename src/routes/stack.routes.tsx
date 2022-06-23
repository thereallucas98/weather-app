import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";

import { WeatherInDetail } from "../screens/WeatherInDetail";
import { LoginWithoutAuth } from "../screens/LoginWithoutAuth";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginWithouAuth">
          <Screen name="Dashboard" component={TabRoutes} options={{ gestureEnabled: false}} />
          <Screen name="WeatherInDetail" component={WeatherInDetail} />
          <Screen name="LoginWithouAuth" component={LoginWithoutAuth} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackRoutes;
