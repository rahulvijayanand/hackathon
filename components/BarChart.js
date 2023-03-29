import React, { useRef, useEffect } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryChart } from 'victory-native';

const AnimatedVictoryBar = Animated.createAnimatedComponent(VictoryBar);

const BarChart = ({ data }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animateBar = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateBar();
  }, []);

  return (
    <View style={styles.container}>
      <VictoryChart>
        <AnimatedVictoryBar
          data={data}
          barWidth={20}
          style={{ data: { fill: '#c43a31', opacity: fadeAnim } }}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BarChart;
