import React from "react";
import { Image, TouchableOpacity, Linking, Text } from "react-native";

const openDialScreen = (num) => {
  let number = "";
  if (Platform.OS === "ios") {
    number = "telprompt:" + num + "";
  } else {
    number = "tel:" + num + "";
  }
  Linking.openURL(number);
};

export default function CallFunction(props) {
  return (
    <TouchableOpacity
      style={[
        {
          height: 48,
          width: 220,
          backgroundColor: "white",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        },
        { flexDirection: "row" },
      ]}
      onPress={() => openDialScreen(props.number)}
    >
      <Image
        style={[{ height: 24, width: 24 }]}
        source={require("../assets/phone.png")}
      />
      <Text style={{fontWeight:'bold'}}> BOOK APPOINTMENT</Text>
    </TouchableOpacity>
  );
}
