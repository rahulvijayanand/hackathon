import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ReferComp = ({ backgroundColor, text, image }) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
    </View>
  );
};

export default ReferComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 360,
    height: 120,
    marginTop: 40,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    width: 160,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
