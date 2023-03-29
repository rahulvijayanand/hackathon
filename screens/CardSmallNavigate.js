import {React,useState,useContext} from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import data from "../examdata.json";
import { scorecontext } from "../components/Context";
const CSN = ({ route, navigation }) => {
  const { typeid, examid } = route.params;
  const {isscore,setscore}=useContext(scorecontext);
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {data[typeid].exams[examid].exam_name}
        </Text>
        <View
          style={{
            height: 70,
            width: 150,
            backgroundColor: "#DB4437",
            borderRadius: 15,
            alignItems: "center",
            marginTop: 10,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Your Score
          </Text>
          <Text
            style={{
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              marginTop: 5,
              fontSize: 22,
            }}
          >
            {isscore}
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 180,
              width: 280,
              backgroundColor: "#4285F4",
              marginTop: 60,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "white",
                fontWeight: "bold",
                marginBottom: 15,
              }}
            >
              DAILY QUEST!
            </Text>
            <Text
              style={{
                width: 220,
                alignContent: "center",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Here is the challenge of the day for you !
            </Text>
          </View>
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 10,
              backgroundColor: "#4285F4",
              marginTop: 115,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              {data[typeid].exams[examid].Streak}
            </Text>
            <Text style={{ justifyContent: "flex-end", color: "white" }}>
              Streak
            </Text>
          </View>
        </View>

        <View style={{ marginLeft: "auto" }}>
          <View
            style={{
              height: 180,
              width: 280,
              backgroundColor: "#F4B400",
              marginTop: 40,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "white",
                fontWeight: "bold",
                marginBottom: 15,
              }}
            >
              MOCK TEST
            </Text>
            <Text
              style={{
                width: 220,
                alignContent: "center",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Attend the Mock Test to test yourself
            </Text>
            <Pressable
              style={{
                marginTop: 10,
                backgroundColor: "white",
                height: 40,
                width: 140,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              onPress={() => navigation.navigate("MK",{tid:typeid,eid:examid,sc:isscore})}
            >
              <Text style={{ color: "#F4B400", fontSize: 21 }}>Take Test</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          style={{
            height: 180,
            width: 280,
            backgroundColor: "#0F9D58",
            marginTop: 40,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={() => navigation.navigate("RF")}
        >
          <Text
            style={{
              fontSize: 24,
              color: "white",
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            REFERENCE MATERIALS
          </Text>
          <View style={styles.button}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </View>
        </Pressable>

        <View style={{ marginLeft: "auto" }}>
          <View
            style={{
              height: 180,
              width: 280,
              backgroundColor: "#DB4437",
              marginTop: 40,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              justifyContent: "center",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
                marginBottom: 15,
                width: 100,
                marginLeft: 30,
              }}
            >
              ONE-ONE CONVO
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}></View>
      </ScrollView>
    </View>
  );
};

export default CSN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
