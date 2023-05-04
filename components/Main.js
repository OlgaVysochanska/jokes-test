import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Today from '../Screens/Today';
import History from '../Screens/History';

import TodayIcon from '../assets/svg/TodayIcon';
import HistoryIcon from '../assets/svg/HistoryIcon';

const Tabs = createBottomTabNavigator();

export default Main = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Today"
      tabBarOptions={{
        activeTintColor: '#9763FF',
        inactiveTintColor: '#C1C3C6',
      }}>
      <Tabs.Screen
        name="Today"
        component={Today}
        options={{
          title: 'Today',

          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 36,
          },
          tabBarIcon: ({color, size}) => (
            <TodayIcon color={color} size={size} />
          ),
          tabBarShowLabel: true,
        }}
      />
      <Tabs.Screen
        name="History"
        component={History}
        options={{
          title: 'History',

          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 36,
          },
          tabBarIcon: ({color, size}) => (
            <HistoryIcon color={color} size={size} />
          ),
          tabBarShowLabel: true,
        }}
      />
    </Tabs.Navigator>
  );
};
