import React, { useState, useEffect,useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Checkbox } from "react-native-paper";
import data from "../examdata.json";
import { scorecontext } from "../components/Context";
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata"],
    answer: 1,
  },
  {
    question: "What is the largest continent in the world?",
    options: ["Asia", "Europe", "North America"],
    answer: 0,
  },
  {
    question: "Who is the CEO of Facebook?",
    options: ["Mark Zuckerberg", "Tim Cook", "Jeff Bezos"],
    answer: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe"],
    answer: 0,
  },
  {
    question: "What is the highest mountain peak in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga"],
    answer: 0,
  },
];

const TestPage = ({ navigation,route }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(10);
  const {tyid,exid,sco}=route.params;
  const [isscr,setscr]=useState(sco);
  const {
    Score
  } = useContext(scorecontext);
  const {isscore,setscore}=useContext(Score);
  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    } else {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleNextQuestion = () => {
    if (questionIndex === questions.length - 1) {
      // Last question, end the test
      alert("Test completed!");
    } else {
      setQuestionIndex(questionIndex + 1);
      if(selectedOptionIndex==0){
        setscr(isscore+2);
      }
      setSelectedOptionIndex(-1);
      setTimeLeft(10);
    }
  };

  const currentQuestion = data[tyid].exams[exid].mock_Tests.test_questions;

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{data[tyid].exams[exid].mock_Tests[0].test_questions[questionIndex].question}</Text>
        <View style={styles.optionsContainer}>
          {data[tyid].exams[exid].mock_Tests[0].test_questions[questionIndex].options.map((option, index) => (
            <Checkbox.Item
              key={index}
              label={data[tyid].exams[exid].mock_Tests[0].test_questions[0].options[index]}
              status={selectedOptionIndex === index ? "checked" : "unchecked"}
              onPress={() => handleOptionSelect(index)}
            />
          ))}
        </View>
        <Text style={styles.timerText}>Time Left: {timeLeft} sec</Text>
      </View>
      {questionIndex === questions.length - 1 ? (
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("CSN", { typeid: tyid, examid: exid });
          }}
        >
          Submit
        </Button>
      ) : (
        <Button mode="contained" onPress={handleNextQuestion}>
          Next
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionsContainer: {
    width: "80%",
    marginBottom: 10,
  },
  timerText: {
    marginTop: 10,
  },
});

export default TestPage;
