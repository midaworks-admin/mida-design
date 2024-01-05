import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Color, Component, Icon, Typography, Vibration} from './view';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: true,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
          tabBarIcon: () => {
            return null;
          },
          tabBarIconStyle: {
            position: 'absolute',
          },
          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <Tab.Screen name="Color" component={Color} />
        <Tab.Screen name="Component" component={Component} />
        <Tab.Screen name="Icon" component={Icon} />
        <Tab.Screen name="Typography" component={Typography} />
        <Tab.Screen name="Vibration" component={Vibration} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
