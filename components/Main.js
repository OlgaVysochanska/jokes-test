import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Today from "../Screens/Today";
import History from "../Screens/History";

import TodayIcon from "../assets/svg/TodayIcon";
import HistoryIcon from "../assets/svg/HistoryIcon";

const Tabs = createBottomTabNavigator();

export default Main = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Today"
      screenOptions={{
        headerStyle: {
          height: 120,
        },
        tabBarActiveTintColor: "#9763FF",
        tabBarInactiveTintColor: "#C1C3C6",
        tabBarStyle: [
          {
            display: "flex",
            justifyContent: "center",
            height: 80,
            paddingBottom: 30,
          },
          null,
        ],
      }}
    >
      <Tabs.Screen
        name="Today"
        component={Today}
        options={{
          title: "Today",

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 36,
          },
          tabBarIcon: ({ color, size }) => (
            <TodayIcon color={color} size={size} />
          ),
          tabBarShowLabel: true,
        }}
      />
      <Tabs.Screen
        name="History"
        component={History}
        options={{
          title: "History",

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 36,
          },
          tabBarIcon: ({ color, size }) => (
            <HistoryIcon color={color} size={size} />
          ),
          tabBarShowLabel: true,
        }}
      />
    </Tabs.Navigator>
  );
};
