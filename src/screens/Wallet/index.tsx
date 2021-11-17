import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wallet } from '../../type';
import Deposit from './Deposit';
import WalletInfo from './WalletInfo';

interface AuthProps {
    navigation : any,
    route : any
}

const Auth = ({ navigation,route}: AuthProps) => {

    const [page,setPage] = useState<number>(0)    
    const wallet = route.params.wallet;

    const pageSetup = (page : number) => {
        switch(page) {
            case 0 : return <WalletInfo wallet={wallet} page={page} setPage={setPage}/>
            case 1 : return <Deposit address={wallet.address} page={page} setPage={setPage}/>
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