/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './components/navigator/TabNavigator';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './components/navigator/StackNavigator';
 const App = () => {
   return (
       <NavigationContainer>
         {/* <TabNavigator /> */}
         <StackNavigator/>
       </NavigationContainer>
   );
 };
 
 export default App;