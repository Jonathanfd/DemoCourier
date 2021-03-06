import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, color = "#02A9EA" }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
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
