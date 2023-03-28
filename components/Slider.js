import React, { useState, useRef, useEffect } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { id: 1, title: "Slide 1", color: "#DB4437" },
  { id: 2, title: "Slide 2", color: "#4285F4" },
  { id: 3, title: "Slide 3", color: "#0F9D58" },
  { id: 4, title: "Slide 4", color: "#F4B400" },
];

const dotSize = 13;
const dotMargin = 5;
const activeDotWidth = 20;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

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
    } else {
      scrollRef.current.scrollTo({
        x: 0,
        animated: true,
      });
      setActiveIndex(0);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        ref={scrollRef}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              width: width-20,
              height: 230,
              borderRadius: 10,
              backgroundColor: item.color || "red",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginLeft:10,
              marginRight:10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
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
