/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import StackNavigator from './components/navigator/StackNavigator';
import { RecoilRoot, useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import { textState } from './store/atoms';

const DebugObserver = () => {
  
  useRecoilTransactionObserver_UNSTABLE(({snapshot,previousSnapshot}) => {
    console.log("Previous Snapshot",previousSnapshot.getInfo_UNSTABLE(textState).loadable)
    console.log("Snapshot updated", snapshot.getInfo_UNSTABLE(textState).loadable);
  })
  return null;
}

const App = () => {
  return (
    <RecoilRoot>
      <DebugObserver />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;