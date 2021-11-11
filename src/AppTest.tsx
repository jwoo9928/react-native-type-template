
import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppTestContainerProps {
    setDevForm :any;
    setForceLogin : any;
  }

const AppTest = ({setDevForm, setForceLogin} : AppTestContainerProps) => {

  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <View style={{height:200, justifyContent:'space-between'}}>
        <Text style={{fontSize:20, alignSelf:"center"}}>테스트 페이지</Text>
        <Button onPress={()=> { 
            setDevForm(false);
          }} 
          title='정상흐름으로 시작' />
        <Button onPress={()=> { 
            setDevForm(false);
            setForceLogin(true);
          }} 
          title='임의 로그인(admin계정) 으로 시작' />
        <Button onPress={()=> { 
            setDevForm(false);
            setForceLogin(false);
          }} 
          title='임의 로그아웃으로 시작' 
        />
        <Button onPress={()=>{
          AsyncStorage.clear().then(() => console.log('All Data cleaned'));
        }} title='저장 cache데이타(로그인정보등등..) 삭제' />
      </View>
    </View>
  );
};

export default AppTest;
