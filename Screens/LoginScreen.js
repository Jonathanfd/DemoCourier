import React, { useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import AppLogin from "../components/AppLogin";
import postLogin from "../api/loginAPI";
import ErrorText from "../components/ErrorText";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const cleanFields = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = async () => {
    if (username.trim().length == 0 || password.trim().length == 0) {
      setShowError(true);
      setErrorMessage("Please type username and password");
      return;
    } else if (/[^a-zA-Z0-9]/.test(username)) {
      setShowError(true);
      setErrorMessage("Special character are not allowed");
      return;
    }

    try {
      setShowError(false);
      const { success, exception } = await postLogin(username.trim(), password);

      if (success) {
        navigation.navigate("Packages");
        cleanFields();
      } else {
        alert(exception);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/courier.jpg")}
      style={styles.container}
      resizeMode="cover"
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo_white.png")}
          style={styles.image}
        />
        <Text style={styles.appName}>Demo Courier</Text>
      </View>
      <AppLogin
        onChangeUser={(username) => setUsername(username)}
        onChangePassword={(password) => setPassword(password)}
        username={username}
        password={password}
        showError={showError}
        error={errorMessage}
        login={() => {
          handleLogin();
        }}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  appName: {
    fontSize: 35,
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 30,
  },
});
export default LoginScreen;
