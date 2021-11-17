import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

interface HeaderProps {
    name : string,
    action : Function,
    style : object
}

const Header = ({name, action, style} : HeaderProps) => {
    return(
        <View style={style}>
        
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent:"center"
    }
})