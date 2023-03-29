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
import data from "../examdata.json";
import { ScrollView } from "react-native-gesture-handler";
const RF = ({ route }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const ASPECT_RATIO = windowWidth / windowHeight;
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);
  const { tid, eid } = route.params;
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Pressable onPress={() => setModal1Visible(true)}>
            <ReferComp
              backgroundColor="#0F9D58"
              text="REFERENCES ON YOUTUBE"
              image="https://example.com/image.jpg"
            />
          </Pressable>
          <View style={styles.centeredView}>
            <MyModal
              visible={modal1Visible}
              onRequestClose={() => {
                setModal1Visible(false);
              }}
              onPressOverlay={() => {
                setModal1Visible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View
                  style={[styles.modalView, { height: ASPECT_RATIO + 390 }]}
                >
                  {data[tid].exams[eid].youtubeurls.map((item, index) => (
                    <LinkComp
                      text={item.content_description}
                      backgroundColor="#4285F4"
                      url={item.link}
                    />
                  ))}
                </View>
              </View>
            </MyModal>
          </View>
          <Pressable onPress={() => setModal2Visible(true)}>
            <ReferComp
              backgroundColor="#4285F4"
              text="REFERENCE BOOKS"
              image="https://example.com/image.jpg"
            />
          </Pressable>
          <View style={styles.centeredView}>
            <MyModal
              visible={modal2Visible}
              onRequestClose={() => {
                setModal2Visible(false);
              }}
              onPressOverlay={() => {
                setModal2Visible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View
                  style={[styles.modalView, { height: ASPECT_RATIO + 390 }]}
                >
                  {data[tid].exams[eid].books.map((item, index) => (
                    <LinkComp
                      text={item.name}
                      backgroundColor="#4285F4"
                      url={item.link}
                    />
                  ))}
                </View>
              </View>
            </MyModal>
          </View>
          <Pressable onPress={() => setModal3Visible(true)}>
            <ReferComp
              backgroundColor="#DB4437"
              text="LINKEDIN PROFILES"
              image="https://example.com/image.jpg"
            />
          </Pressable>
          <View style={styles.centeredView}>
            <MyModal
              visible={modal3Visible}
              onRequestClose={() => {
                setModal3Visible(false);
              }}
              onPressOverlay={() => {
                setModal3Visible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View
                  style={[styles.modalView, { height: ASPECT_RATIO + 390 }]}
                >
                  {data[tid].exams[eid].linkedinProfiles.map((item, index) => (
                    <LinkComp
                      text={item.name}
                      backgroundColor="#4285F4"
                      url={item.linkedin_profile_url}
                    />
                  ))}
                </View>
              </View>
            </MyModal>
          </View>
          <Pressable onPress={() => setModal4Visible(true)}>
            <ReferComp
              backgroundColor="#F4B400"
              text="EMAIL IDS"
              image="https://ibb.co/17zYybD"
            />
          </Pressable>
          <View style={styles.centeredView}>
            <MyModal
              visible={modal4Visible}
              onRequestClose={() => {
                setModal4Visible(false);
              }}
              onPressOverlay={() => {
                setModal4Visible(false);
              }}
            >
              <View style={styles.centeredView}>
                <View
                  style={[styles.modalView, { height: ASPECT_RATIO + 390 }]}
                >
                  {data[tid].exams[eid].youtubeurls.map((item, index) => (
                    <LinkComp
                      text={item.content_description}
                      backgroundColor="#4285F4"
                      url={item.link}
                    />
                  ))}
                </View>
              </View>
            </MyModal>
          </View>
        </ScrollView>
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
