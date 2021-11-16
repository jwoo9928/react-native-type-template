import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { wallet } from '../../type';


interface walletProps  {
    wallet : wallet
    address : string
}

const WalletInfo = ({address} : walletProps) => {
    return(
        <View>

        </View>
    )
}

export default WalletInfo;