import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import StackNavigator from './StackNavigator';
import Home from '../../screens/home';
import Temp from '../../screens/temp';
import HomeContainer from '../containers/HomeContainer';

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
        name="HomeContainer"
        component={HomeContainer}
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