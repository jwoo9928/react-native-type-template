import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { wallet } from '../../type';
import QRCode from 'react-native-qrcode-svg';

interface DepositProps {
    address : string,
    page : number,
    setPage : Function
}

const Deposit = ({address, page, setPage} : DepositProps) => {
    return(
        <View style={styles.container}>
            <QRCode
                value={address}
            />
        </View>
    )
}

export default Deposit;

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent:"center"
    }
})