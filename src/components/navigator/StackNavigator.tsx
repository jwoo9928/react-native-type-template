import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Test from '../../screens/test';
import AuthContainer from '../containers/AuthContainer';
import BiFiServiceContainer from '../containers/BiFiServiceContainer';
import SendContainer from '../containers/SendContainer';
import TokenContainer from '../containers/TokenContainer';
import DrawerNavigator from './DrawerNavigator'
import Wallet from '../../screens/Wallet'

interface MainStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const StackNavigator = (props: MainStackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={'HomeContainer'}>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="BiFi"
        component={BiFiServiceContainer}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Send"
        component={SendContainer}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Token"
        component={TokenContainer}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthContainer}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  container: {},
});