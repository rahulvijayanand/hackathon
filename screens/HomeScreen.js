import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Search from "../components/searchbar";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 60, marginLeft: 10 }}>
        <Text style={{ fontSize: 21 }}>WELCOME</Text>
        <Text style={{ fontSize: 21, fontWeight: "bold" }}>John Doe!</Text>
      </View>
      <View>
        <Search />
      </View>
      <View styles={{}}>
        <Slider />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 21,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Categories
        </Text>
        <Card
          title="Card Title"
          description="This is a description of the card."
          backgroundColor="#F5DEB3"
        />
      </View>
      <View style={{marginBottom:30}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
