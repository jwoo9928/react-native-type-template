import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WalletInfo from './WalletInfo';

const Auth = ({ navigation }: any) => {

    const [page,SetPage] = useState<Number>(0)    

    const pageSetup = (page : Number) => {
        switch(page) {
            case 0 : return <WalletInfo/>
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