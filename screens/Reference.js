import React, { useState } from "react";
import { Pressable } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ReferComp from "../components/ReferComp";
import { MyModal } from "../components/GlobalModal";
import LinkComp from "../components/LinkComp";
import { Link } from "@react-navigation/native";

const RF = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const ASPECT_RATIO = windowWidth / windowHeight;

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>JEE MAINS</Text>
        <Pressable onPress={() => setModalVisible(true)}>
          <ReferComp
            backgroundColor="#0F9D58"
            text="Lorem ipsum dolor sit amet"
            image="https://example.com/image.jpg"
          />
        </Pressable>
        <View style={styles.centeredView}>
          <MyModal
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
            onPressOverlay={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.centeredView}>
              <View style={[styles.modalView, { height: ASPECT_RATIO + 390 }]}>
                <LinkComp
                  text="Click here to go to Google"
                  backgroundColor="#4285F4"
                  url="https://www.google.com"
                />
              </View>
            </View>
          </MyModal>
        </View>
      </View>
    </View>
  );
};


export default RF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 100
  },
  modalView: {
    margin: 20,
    backgroundColor: "#DB4437",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    alignItems: "center",
    //shadowColor: "#eeeeee",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
