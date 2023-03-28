import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";

const Search = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#F4B400",
        color: "#F4B400",
        borderRadius: 7,
        marginTop: 20,
        marginLeft: 40,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 40,
      }}
    >
      <TextInput
        placeholder="Search"
        placeholderTextColor={"white"}
        style={{
          height: 45,
          width: 250,
          fontSize: 15,
          fontWeight: "bold",
          marginLeft: 10,
        }}
      />
      <Icon name="search" style={{ padding: 10 }} size={25} color={"white"} />
    </View>
  );
};
export default Search;
