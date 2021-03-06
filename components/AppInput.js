import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppInput({ title, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          {...otherProps}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {title == "Password" && (
          <MaterialCommunityIcons name="eye-outline" size={24} color="black" />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "darkgrey",
    flex: 1,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
    color: "grey",
    fontWeight: "600",
  },
});
export default AppInput;
