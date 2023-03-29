import React from "react";
import { Pressable } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const MK = ({ navigation,route }) => {
  const {tid,eid}=route.params;
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
          <Text style={{ color: "#4285F4" }}>M</Text>
          <Text style={{ color: "#DB4437" }}>O</Text>
          <Text style={{ color: "#F4B400" }}>C</Text>
          <Text style={{ color: "#0F9D58" }}>K</Text>
          <Text> TEST</Text>
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 24, marginTop: 10 }}>
            INSTRUCTIONS
          </Text>
        </View>
        <View
          style={{ marginLeft: 10, marginRight: 10, width: 300, marginTop: 20 }}
        >
          <Text style={{ color: "grey" }}>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
            bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
            Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
            magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
            nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla
            varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis
            eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
            venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            I read the instructions and agree to it
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MKT",{tyid:tid,exid:eid})}>
          <View
            style={{
              backgroundColor: "#F4B400",
              width: 150,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 21 }}>CONTINUE ➔</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MK;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
