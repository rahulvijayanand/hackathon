import React from 'react';
import { BlurView } from 'expo-blur';
import { View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';

export const MyModal = ({ children, visible, onRequestClose, onPressOverlay, }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback onPress={onPressOverlay}>
        <BlurView
          style={{ ...StyleSheet.absoluteFill }}
          tint='dark'
          intensity={50}
          onPress={onPressOverlay}
        />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
