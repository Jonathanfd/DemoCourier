import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LoginContext } from "../context/AppContext";

function AppButton({ title, color = "#02A9EA" }) {
  const Login = useContext(LoginContext);
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={Login}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default AppButton;
