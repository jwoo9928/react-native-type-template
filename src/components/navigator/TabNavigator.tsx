import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import Home from '../../screens/home';
import Temp from '../../screens/temp';

const Tab = createBottomTabNavigator();


const TabBarIcon = (focused:boolean) : ReactElement => {
  return (
    <Text
      style={{
        color : focused ? "red" : "blue"
      }}
    >test</Text>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: ({ focused } : any): ReactElement => 
          TabBarIcon(focused),
        
      }}
    >
      <Tab.Screen
        name="지갑"
        component={Home}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused } : any): ReactElement => 
            TabBarIcon(focused),
        }}
      />
      <Tab.Screen
        name="temp"
        component={Temp}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused } : any): ReactElement => 
            TabBarIcon(focused),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;