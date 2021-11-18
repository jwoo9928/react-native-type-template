import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../common/Header';
import { wallet } from '../../type';
import Deposit from './Deposit';
import WalletInfo from './WalletInfo';

interface WalletProps {
    navigation : any,
    route : any
}

const Wallet = ({ navigation,route}: WalletProps) => {

    const [page,setPage] = useState<number>(0)    
    const wallet = route.params.wallet;

    const pageSetup = (page : number) => {
        switch(page) {
            case 0 : return <WalletInfo wallet={wallet} page={page} setPage={setPage}/>
            case 1 : return <Deposit address={wallet.address} page={page} setPage={setPage}/>
        }
    }

    const nameSpace = (page : number) => {
        switch(page) {
            case 0 : return '이더리움'
            case 1 : return '받기'
            default : return ''
        }
    }

    const goBack = (page : number) => {
        if(page > 0) setPage(page-1);
        else navigation.goBack()
    }

    return (
        <SafeAreaView>
            <Header name={nameSpace(page)} action={()=>goBack(page)} style={{}}/>
           {
               pageSetup(page)
           }
        </SafeAreaView>
    );
};

export default Wallet;

const styles = StyleSheet.create({
    touchable : {
        width:50,
        backgroundColor:"blue",
        marginHorizontal:10
    },
})