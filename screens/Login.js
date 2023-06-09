import React, { useState } from "react";
import { Pressable } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
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
    <View style={styles.container}>
      <Circle backgroundColor="#DB4437" style={styles.customStyle1} />
      <Circle backgroundColor="#F4B400" style={styles.customStyle2} />
      <Circle backgroundColor="#4285F4" style={styles.customStyle3} />
      <Circle backgroundColor="#0F9D58" style={styles.customStyle4} />
      <Text style={styles.logo}>LOG IN</Text>
      <View style={{ flexDirection: "row", marginBottom: 60 }}>
        <Text>New to our app?</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft:30
  },
  logo: {
    fontWeight: "bold",
    fontSize: 48,
  
  },
  inputView: {
    width: 270,
    backgroundColor: "transparent",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  inputText: {
    height: 50,
    width: 270,
    backgroundColor: "transparent",
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
    top: -70,
    left: -70,
  },
  customStyle2: {
    position: "absolute",
    top: 100,
    right: -110,
  },
  customStyle3: {
    position: "absolute",
    bottom: 30,
    left: -140,
  },
  customStyle4: {
    position: "absolute",
    bottom: -70,
    right: -120,
  },
});

export default Login;
