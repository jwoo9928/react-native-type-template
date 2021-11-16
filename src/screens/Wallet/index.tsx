import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wallet } from '../../type';
import WalletInfo from './WalletInfo';

interface AuthProps {
    navigation : any,
    address : string,
    wallet : wallet
}

const Auth = ({ navigation, address,wallet }: AuthProps) => {

    const [page,SetPage] = useState<Number>(0)    

    const pageSetup = (page : Number) => {
        switch(page) {
            case 0 : return <WalletInfo address={address} wallet={wallet} />
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