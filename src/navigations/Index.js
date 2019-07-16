import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../pages/Home";
import MineScreen from "../pages/Mine";

const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Mine: MineScreen
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
