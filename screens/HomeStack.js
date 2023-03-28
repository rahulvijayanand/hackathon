import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CardNavigation from "./CardNavigate"
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HM" component={HomeScreen} />
      <Stack.Screen name="CN" component={CardNavigation} />
    </Stack.Navigator>
  );
}

export default HomeStack;