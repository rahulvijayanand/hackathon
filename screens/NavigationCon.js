import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import HomeStack from "./HomeStack"
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import NotificationsScreen from "./NotificationsScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const NavigationCon = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIconStyle: {
          marginLeft: 40,
          marginRight: 40,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {
          backgroundColor: "#DB4437",
        },
        headerShown: false,
        activeTintColor: "#ffffff",
        inactiveTintColor: "white",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "activity";
          } else if (route.name === "Profile") {
            iconName = "bar-chart";
          } else if (route.name === "Search") {
            iconName = "pie-chart";
          } else if (route.name === "Notifications") {
            iconName = "user";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default NavigationCon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
