import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from '../../screens/home'

interface LoginContainerProps {
  navigation : any;
}

const TokenContainer = ({navigation}: LoginContainerProps) => {
  return (
    <Home navigation={navigation}/>
  );
};

export default TokenContainer;

const styles = StyleSheet.create({
  container: {}
});
