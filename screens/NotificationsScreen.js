import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Notifications Screen</Text>
      </View>
    );
  };

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
  });