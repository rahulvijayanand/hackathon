import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = ({ backgroundColor, style }) => {
  return <View style={[styles.circle, { backgroundColor: backgroundColor }, style]} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 166,
    height: 166,
    borderRadius: 83,
  },
});

export default Circle;
