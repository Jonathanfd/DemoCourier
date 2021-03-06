import React from "react";
import { View, StyleSheet } from "react-native";
import AppInput from "./AppInput";
import AppButton from "./AppButton";

function AppLogin() {
  return (
    <View style={styles.container}>
      <AppInput placeholder="Username" title="User" />
      <AppInput placeholder="Password" title="Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="#D36582" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },
  container: {
    backgroundColor: "white",
    height: 400,
    width: "90%",
    borderRadius: 20,
  },
});
export default AppLogin;
