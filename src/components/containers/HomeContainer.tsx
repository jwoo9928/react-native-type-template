import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from '../../screens/home'

interface LoginContainerProps {
  navigation : any;
}

const HomeContainer = ({navigation}: LoginContainerProps) => {
  return (
    <Home navigation={navigation}/>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {}
});
