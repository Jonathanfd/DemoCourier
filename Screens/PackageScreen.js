import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import getPackages from "../api/getPackagesAPI";
import AppHeader from "../components/AppHeader";

function PackageScreen({ route }) {
  const packages = getPackages(route.params.username);
  return (
    <View style={styles.container}>
      <AppHeader />
      <FlatList
        data={packages}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => {
          return <Text>{item.description}</Text>;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default PackageScreen;
