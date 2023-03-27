import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import NotificationsScreen from "./NotificationsScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const CircleButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.circleButton}
      onPress={onPress}
    >
      <Ionicons name="add-outline" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const NavigationCon = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 10,
          paddingBottom: 5,
        },
        tabBarStyle: { display: "flex", height: 60 },
        headerShown: false,
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          } else if (route.name === "Profile") {
            return null; // don't show an icon for the profile screen
          } else if (route.name === "Search") {
            iconName = "search-outline";
          } else if (route.name === "Notifications") {
            iconName = "notifications-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarButton: () => (
            <CircleButton onPress={() => navigation.navigate("Profile")} />
          ),
          animationEnabled: true,
          animationTypeForReplace: "push",
        }}
      />
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
  circleButton: {
    backgroundColor: "blue",
    borderRadius: 50,
    height: 80,
    width: 80,
    bottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
