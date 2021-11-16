import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Auth from '../../screens/Auth';
import Home from '../../screens/home'

interface LoginContainerProps {
  navigation : any;
}

const AuthContainer = ({navigation}: LoginContainerProps) => {
  return (
    <Auth navigation={navigation}/>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {}
});
