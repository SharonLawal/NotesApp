// src/infrastructure/navigation/settings.navigator.js
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/notes/screens/favourites.screen";
import { SettingsScreen } from "../../features/notes/screens/settings.screen";

const SettingStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: true,
        headerMode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ header: () => null }}
      />
      <SettingStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ header: () => null }}
      />
    </SettingStack.Navigator>
  );
};