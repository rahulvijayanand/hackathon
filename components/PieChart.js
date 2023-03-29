import React, { useRef, useEffect } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { PieChart as SVGChart, Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const PieChart = ({ data }) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const animatePie = () => {
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animatePie();
  }, []);

  const chartWidth = 300;
  const chartHeight = 300;
  const chartRadius = 125;

  const circumference = 2 * Math.PI * chartRadius;
  const strokeWidth = chartRadius * 0.5;

  const progress = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circumference],
  });

  return (
    <View style={styles.container}>
      <SVGChart
        style={{ width: chartWidth, height: chartHeight }}
        data={data}
        sort={(a, b) => b.value - a.value}
      >
        {({ arcs }) => (
          <>
            {arcs.map((arc, index) => {
              const value = arc.value;
              const arcLength = (value / 100) * circumference;
              const strokeDasharray = `${arcLength},${
                circumference - arcLength
              }`;

              return (
                <AnimatedPath
                  key={index}
                  d={arc.path}
                  stroke={arc.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={progress}
                  fill="none"
                />
              );
            })}
          </>
        )}
      </SVGChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PieChart;
