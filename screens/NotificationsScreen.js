import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import Leader from "../components/Leader";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return (
          <Leader
            data={[
              { name: "John Doe", points: 100 },
              { name: "Jane Smith", points: 90 },
              { name: "Bob Johnson", points: 80 },
              { name: "Sara Lee", points: 70 },
              { name: "Chris Brown", points: 75 },
            ]}
          />
        );
      case "Friends":
        return (
          <Leader
            data={[
              { name: "John Doe", points: 100 },
              { name: "Jane Smith", points: 90 },
            ]}
          />
        );
      case "Global":
        return (
          <Leader
            data={[
              { name: "Bob Johnson", points: 80 },
              { name: "Sara Lee", points: 70 },
              { name: "Chris Brown", points: 75 },
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          width: Dimensions.get("window").width,
          backgroundColor: "#DB4437",
          borderBottomStartRadius: 20,
          borderBottomEndRadius: 20,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <Text style={{ color: "white", fontSize: 36 }}>LEADERBOARD</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "All" ? styles.activeTabBlue : styles.inactiveTabGrey,
          ]}
          onPress={() => handleTabPress("All")}
        >
          <Text style={styles.tabText}>ENGINEERING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Friends"
              ? styles.activeTabBlue
              : styles.inactiveTabGrey,
          ]}
          onPress={() => handleTabPress("Friends")}
        >
          <Text style={styles.tabText}>MEDICAL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Global"
              ? styles.activeTabBlue
              : styles.inactiveTabGrey,
          ]}
          onPress={() => handleTabPress("Global")}
        >
          <Text style={styles.tabText}>GOVERNMENT</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>{renderContent()}</ScrollView>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    marginHorizontal: 10,
  },
  tab: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabBlue: {
    backgroundColor: "#F4B400",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  inactiveTabGrey: {
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  tabText: {
    fontSize: 14,
  },
});
