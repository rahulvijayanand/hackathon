import {React,useState} from "react";
import { StyleSheet, View, ScrollView, } from "react-native";
import Slider from "../components/Slider";


export default function Hom() {
  return (
    <ScrollView style={styles.container}>
      <Slider />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
