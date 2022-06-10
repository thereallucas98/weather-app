import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
