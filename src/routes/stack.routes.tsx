import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Dashboard" component={TabRoutes} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackRoutes;
