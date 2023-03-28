import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Search from "../components/searchbar";
import CardSmall from "../components/CardSmall";

const CN = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 40, right: 30 }}>
        <Search />
      </View>
      <View style={{ marginLeft: 10, width: 170, marginTop: 40 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          Engineering Entrances
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Pressable onPress={() => navigation.navigate("CSN")}>
          <CardSmall
            title="Content"
            description="enjoy pannunga broo"
            backgroundColor="#EEEEEE"
          />
        </Pressable>
      </View>
      <View style={{ marginBottom: 30 }}></View>
    </ScrollView>
  );
};

export default CN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
