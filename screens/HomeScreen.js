import {React,useState} from "react";
import { StyleSheet, View, ScrollView, } from "react-native";
import Slider from "../components/Slider";
import Card from "../components/Card";
import data from "../examdata.json"
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Slider />
      {data.map((item)=>(
      <Card
        title={item.type}
        image={item.image}
        description={item.description}
        backgroundColor={item.color}
      />
      ))
}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
