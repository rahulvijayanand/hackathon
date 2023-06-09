import React, { useState, createContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CardNavigation from "./CardNavigate";
import CardSmallNavigation from "./CardSmallNavigate";
import Reference from "./Reference";
import Mock from "./Mock";
import MockTest from './MockTest'
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const scorecontext=createContext({});
function HomeStack() {
  const [isscore,setscrore]=useState(3000);

  return (
    <scorecontext.Provider value={{isscore,setscrore}}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HM" component={HomeScreen} />
      <Stack.Screen name="CN" component={CardNavigation} />
      <Stack.Screen name="CSN" component={CardSmallNavigation} />
      <Stack.Screen name="RF" component={Reference} />
      <Stack.Screen name="MK" component={Mock} />
      <Stack.Screen name="MKT" component={MockTest} />
    </Stack.Navigator>
    </scorecontext.Provider>
  );
}

export default HomeStack;
