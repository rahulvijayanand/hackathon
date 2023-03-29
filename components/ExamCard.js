import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Examcard = ({ title, image, description, backgroundColor }) => {
  return (
    <ImageBackground style={styles.image} source={{ uri: image }}>
      <View style={[styles.card]}>
        <View
          style={{
            backgroundColor: "white",
            height: 130,
            width: 320,
            marginTop: 160,
            borderRadius: 15,
            margin: 10,
            opacity: 0.7,
            blurRadius: 10,
          }}
        >
            <Text style={{fontWeight:"bold",margin:10}}>JEE MAIN EXAMINATION</Text>
            <Text style={{fontWeight:"bold",margin:10}}>DATE</Text>
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: "white",
              opacity: 10,
              alignSelf: "flex-end",
              marginTop: 14,
              margin: 8,
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <Text style={{margin:5,marginLeft:15}}>Enroll </Text>
            <Ionicons name="ios-arrow-forward" size={18} color="black" style={{marginTop:5}}/>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 340,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: "relative",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  image: {
    height: 300,
    width: 340,
    resizeMode: "contain",
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
    position: "relative",
  },
  description: {
    fontSize: 16,
  },
  button: {
    position: "absolute",
    bottom: -10,
    right: -10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Examcard;