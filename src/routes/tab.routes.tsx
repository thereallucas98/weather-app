import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../global/styles/theme';

import { Home } from '../screens/Home';
import { Favorite } from '../screens/Favorite';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.shape,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 60,
          backgroundColor: theme.colors.background,
        },
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveBackgroundColor: theme.colors.background_light,
      }}
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Favoritos"
        component={Favorite}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="favorite"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="settings"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  );
}

export default TabRoutes;