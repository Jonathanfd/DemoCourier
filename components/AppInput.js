import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import ErrorText from "./ErrorText";

function AppInput({ title, error, showError = false, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <TextInput
          {...otherProps}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {showError && <ErrorText error={error} />}
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
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
    color: "grey",
    fontWeight: "600",
  },
});
export default AppInput;
