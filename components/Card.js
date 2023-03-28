import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ title, image, description, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop:10,
    color:"white"
  },
  image: {
    height: 200,
    width: 300,
    resizeMode: "contain",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;
