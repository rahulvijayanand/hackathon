import React, { useState } from "react";
import { Pressable } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Circle from "../components/Circle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    if (
      email.match(/^sec[0-9]{2}[a-z]{2}[0-9]{3}@sairamtap.edu.in$/i) &&
      password === "12345"
    ) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <View>
      <Circle backgroundColor="red" style={styles.customStyle1} />
      <View style={styles.container}>
        <Text style={styles.logo}>LOG IN</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginBottom: 60 }}>New to our app?</Text>
          <Pressable style={{}}>
            <Text style={{ color: "#0F9D58" }}> Sign up for free</Text>
          </Pressable>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="EMAIL ID"
            placeholderTextColor="#003f5c"
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="PASSWORD"
            placeholderTextColor="#003f5c"
            onChangeText={handlePasswordChange}
            value={password}
          />
        </View>
        <Pressable>
          <Text style={{ color: "#4285F4" }}>Forgot password?</Text>
        </Pressable>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 20,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 48,
  },
  inputView: {
    width: 270,
    backgroundColor: "white",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  inputText: {
    height: 50,
    width: 270,
    backgroundColor: "white",
  },
  loginBtn: {
    width: 230,
    backgroundColor: "#000",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 20,
  },
  loginText: {
    color: "white",
    fontSize: 24,
  },
  customStyle1: {
    position: "absolute",
  },
});

export default Login;
