import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import History from './History.screen';
import Analytics from './Analytics.screen';
import { HomeIcon, HistoryIcon, AnalyticsIcon } from '../components/Icons';
import { theme } from '../utils/constants';

const BottomTabs = createBottomTabNavigator();
export default function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }
          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }
          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
}
