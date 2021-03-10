import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import AppHeader from "../components/AppHeader";
import PackageCard from "../components/PackageCard";
import AppSegmentSeparator from "../components/AppSegmentSeparator";
import AppPageTitle from "../components/AppPageTitle";

function PackageScreen({ route }) {
  const packages = route.params.packages;

  const imageStatusSelector = (status) => {
    let image = "";
    if (status === "Retenido por aduanas") {
      image = require("../assets/icono_warning_bps.png");
    } else if (status === "Disponible para retirar") {
      image = require("../assets/green_check.png");
    } else if (status === "Embarcado") {
      image = require("../assets/avion.png");
    } else if (status === "Recibido miami") {
      image = require("../assets/box.png");
    }
    return image;
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <AppPageTitle title="Paquetes" />
      <FlatList
        data={packages}
        keyExtractor={(item) => item.description.toString() + Math.random()}
        renderItem={({ item }) => {
          const info = item.statusHistory;
          const statusImage = imageStatusSelector(
            item.statusHistory[0].description
          );

          return (
            <PackageCard
              description={item.description}
              status={info[0].description}
              date={info[0].date}
              icon={statusImage}
            />
          );
        }}
        ItemSeparatorComponent={() => <AppSegmentSeparator />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
export default PackageScreen;
