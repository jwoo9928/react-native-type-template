import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { wallet } from '../../type';


interface walletProps  {
    wallet : wallet,
    page : number,
    setPage : Function
}

const WalletInfo = ({wallet,page, setPage} : walletProps) => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30}}>{`0.00 ${wallet.coinType}`}</Text>
            <Text>{`₩ 0.00`}</Text>
            <Text>{`${wallet.address}`}</Text>
            <View>
            <TouchableOpacity
                onPress={()=>setPage(page+1)}
            >
                <Text>{`받기`}</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default WalletInfo;

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent:"center"
    }
})