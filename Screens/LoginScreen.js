import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import AppLogin from "../components/AppLogin";

function LoginScreen() {
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
      <AppLogin />
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
