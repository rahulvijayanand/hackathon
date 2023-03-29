import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Examcard from "../components/ExamCard";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 120,
          width: Dimensions.get("window").width,
          backgroundColor: "#4285F4",
          borderBottomStartRadius: 20,
          borderBottomEndRadius: 20,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <Text style={{ color: "white", fontSize: 24 }}>UPCOMING EXAMS</Text>
      </View>
      <ScrollView>
      <Examcard />
      <Examcard />
      <Examcard />
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
