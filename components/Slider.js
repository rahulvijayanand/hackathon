import React, { useState, useRef } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { id: 1, title: "Slide 1", color: "red" },
  { id: 2, title: "Slide 2", color: "blue" },
  { id: 3, title: "Slide 3", color: "green" },
  { id: 4, title: "Slide 4", color: "yellow" },
];

const dotSize = 10;
const dotMargin = 5;
const activeDotWidth = 20;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / width);
    setActiveIndex(currentIndex);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollRef.current.scrollTo({
        x: (activeIndex - 1) * width,
        animated: true,
      });
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < data.length - 1) {
      scrollRef.current.scrollTo({
        x: (activeIndex + 1) * width,
        animated: true,
      });
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        ref={scrollRef}
      >
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              width: width,
              height: 230,
              borderRadius: 10,
              backgroundColor: item.color || "red",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 24 }}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((_, index) => (
          <View
            key={index}
            style={{
              width: activeIndex === index ? activeDotWidth : dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              backgroundColor: activeIndex === index ? "#333" : "#CCC",
              margin: dotMargin,
              marginTop: 15,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
