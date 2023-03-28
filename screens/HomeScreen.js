import { React, useState } from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Search from "../components/searchbar";
import data from "../examdata.json";
export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <View style={{ marginTop: 60, marginLeft: 10 }}>
          <Text style={{ fontSize: 21 }}>WELCOME</Text>
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>John Doe!</Text>
        </View>
        <View>
          <Search />
        </View>
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
        {data.map((item) => (
          <Pressable onPress={() => navigation.navigate("CN")}>
            <Card
              title={item.type}
              image={item.image}
              description={item.description}
              backgroundColor={item.color}
            />
          </Pressable>
        ))}
      </View>
      <View style={{ marginBottom: 30 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
