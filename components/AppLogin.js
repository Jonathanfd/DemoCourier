import React from "react";
import { View, StyleSheet } from "react-native";
import AppInput from "./AppInput";
import AppButton from "./AppButton";

function AppLogin({
  login,
  register,
  onChangeUser,
  onChangePassword,
  username,
  password,
  error,
  showError,
}) {
  return (
    <View style={styles.container}>
      <AppInput
        title="User"
        placeholder="Username"
        onChangeText={onChangeUser}
        value={username}
        error={error}
        showError={showError}
      />
      <AppInput
        title="Password"
        placeholder="Password"
        secureTextEntry
        onChangeText={onChangePassword}
        value={password}
        error={error}
        showError={showError}
      />
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={login} />
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
