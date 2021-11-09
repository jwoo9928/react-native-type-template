import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Home from '../../screens/home'
import DrawerNavigator from './DrawerNavigator'

interface MainStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const MainStackNavigator = (props: MainStackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={'HomeContainer'}>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({
  container: {},
});