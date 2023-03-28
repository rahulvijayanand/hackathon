import React, { useState, useRef, useEffect } from "react";
import { View, Text, Dimensions, ScrollView, Image,StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { id: 1, title: "Something Big is Coming, JEE Exams from March", color: "red" ,image:require('../assets/jee.jpg')},
  { id: 2, title: "NEET Results to be announced in April", color: "blue",image:require('../assets/neet.jpg') },
  { id: 3, title: "UPSC Group 3 Exams coming up with 60 Job Openings!", color: "green" ,image:require('../assets/toefl.jpg')},
  { id: 4, title: "TCS hires 200 UX Designers amidst Recession", color: "yellow" ,image:require('../assets/board.jpg')},
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
            <Image style={styles.image} source={item.image}  />
            <Text style={{ fontSize: 24,position:"absolute",color:"white",fontWeight:"bold",justifyContent:"center",marginHorizontal:20 }}>{item.title}</Text>
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

const styles = StyleSheet.create({
  image: {
    height: 230,
    width:width,
    resizeMode:"contain",
    borderRadius:10,
  },
});
export default Carousel;
