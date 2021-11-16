import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from '../../store/atoms';
import ReactNativeBiometrics from 'react-native-biometrics'
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import * as bip39 from 'bip39'
import CreateMnemonic from './CreateMnemonic';

const Auth = ({ navigation }: any) => {

    const [page,SetPage] = useState<Number>(0)    

    const pageSetup = (page : Number) => {
        switch(page) {
            case 0 : return <CreateMnemonic navigation={navigation}/>
        }
    }

    return (
        <SafeAreaView>
           {
               pageSetup(page)
           }
        </SafeAreaView>
    );
};

export default Auth;

const styles = StyleSheet.create({
    touchable : {
        width:50,
        backgroundColor:"blue",
        marginHorizontal:10
    },
})