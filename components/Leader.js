import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "./searchbar";

const Leader = ({ data }) => {
  data.sort((a, b) => b.points - a.points);
  data = data.slice(0, 10);

  return (
    <View>
      <Search />
      <View style={styles.container}>
        {data.map((item, index) => (
          <View
            style={[
              styles.row,
              index === 0
                ? styles.top1
                : index === 1
                ? styles.top2
                : index === 2
                ? styles.top3
                : styles.others,
            ]}
            key={index}
          >
            <Text style={styles.position}>{index + 1}</Text>
            <View style={{ width: 100, marginLeft: 90 }}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.points}>{item.points}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 4,
    backgroundColor: "#e5e5e5",
    borderColor: "#e5e5e5",
    height: 70,
    borderRadius: 10,
  },
  top1: {
    borderColor: "#F4B400",
    backgroundColor: "#ffffff",
  },
  top2: {
    borderColor: "#0F9D58",
    backgroundColor: "#ffffff",
  },
  top3: {
    borderColor: "#4285F4",
    backgroundColor: "#ffffff",
  },
  position: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 25,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    width: 200,
    right: 40,
  },
  points: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 50,
  },
});

export default Leader;
