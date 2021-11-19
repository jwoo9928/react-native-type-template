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
import React, { useRef, useState } from 'react';
import StackNavigator from './components/navigator/StackNavigator';
import { RecoilRoot, useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import { textState, walletState, walletStates } from './store/atoms';
import AppTest from './AppTest';
import DebugObserver from './store/DebugObserver';



const AppMain = ({ forceLogin } : {forceLogin : boolean}) => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

const App = () => {
  const [devForm, setDevForm] = useState<boolean>(true);
  const [forceLogin, setForceLogin] = useState<boolean>(false);

  return (
    <RecoilRoot>
      <DebugObserver states={walletStates}/>
      {
        (__DEV__ && devForm) ?
          <AppTest setDevForm={setDevForm} setForceLogin={setForceLogin} />
          : <AppMain forceLogin={forceLogin} />
      }
    </RecoilRoot>
  );
};

export default App;