import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PackageScreen from "../Screens/PackageScreen";
import OfficesScreen from "../Screens/OfficesScreen";
import PreferenceScreen from "../Screens/PreferenceScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  let packagesQuantity = global.packagesQuantity;

  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: "#02A9EA" }}>
      <Tab.Screen
        name="Packages"
        component={PackageScreen}
        options={{
          title: "Paquetes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="package-variant-closed"
              size={size}
              color={color}
            />
          ),
          tabBarBadge: packagesQuantity,
        }}
      />
      <Tab.Screen
        name="Offices"
        component={OfficesScreen}
        options={{
          title: "Oficinas",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="home-map-marker"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Preference"
        component={PreferenceScreen}
        options={{
          title: "Preferencias",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-variant"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
