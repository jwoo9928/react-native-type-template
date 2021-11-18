import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import QRCode from 'react-native-qrcode-svg';

interface HeaderProps {
    name : string,
    action : Function,
    style : object
}

const Header = ({ name, action, style }: HeaderProps) => {
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                onPress={()=>action()}
                style={{ height: 40, width: 40, alignItems: "center", justifyContent: "center" }}
            >
                <Text style={{ fontSize: 20 }}>{`<`}</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20,justifyContent:"center" }}>{name}</Text>
            <View
                style={{height:40,width:40}}
            ></View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container : {
        justifyContent: 'space-between',
        alignItems:'center',
        height:40,
        borderBottomColor:'#3A86F6',
        borderBottomWidth:1,
        flexDirection:'row'
    }
})