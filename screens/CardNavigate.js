import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Search from "../components/searchbar";
import CardSmall from "../components/CardSmall";
import data from "../examdata.json";
function CN({route,navigation}) {
  console.log('route:', route);
  console.log('route.params:', route.params);
  const {id}=route.params;
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
        {data[id].exams.map((item)=>(
          <CardSmall
          title={item.exam_name}
          description={item.exam_description}
          backgroundColor={item.color}
        />
        ))}
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
