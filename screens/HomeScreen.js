import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Hom() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["blue", "yellow", "red"]}
        style={styles.gradient}
      />
      <View style={styles.overlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
