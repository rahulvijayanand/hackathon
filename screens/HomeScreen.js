import {React,useState} from "react";
import { StyleSheet, View, ScrollView, } from "react-native";
import Slider from "../components/Slider";
import Card from "../components/Card";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Slider />
      <Card
        title="Card Title"
        description="This is a description of the card."
        backgroundColor="#F5DEB3"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
