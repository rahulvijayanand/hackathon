import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Linking,
  StyleSheet,
} from "react-native";

const LinkComp = ({ text, backgroundColor, url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor,
          padding: 16,
          borderRadius: 10,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text style={{color:'white'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LinkComp;
