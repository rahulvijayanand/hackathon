import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = ({ backgroundColor, style }) => {
  return <View style={[styles.circle, { backgroundColor: backgroundColor }, style]} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default Circle;
