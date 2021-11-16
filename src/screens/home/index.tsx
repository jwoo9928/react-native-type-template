import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import * as bip39 from 'bip39'
import config from '../../config';

import { walletState } from '../../store/atoms';
import { wallet } from '../../type';
import { useRecoilValue } from 'recoil';

const Home = ({ navigation }: any) => {
    const wallets = useRecoilValue(walletState);


    return (
        <SafeAreaView style={styles.container}>
            <View style={{height:config.WINDOW_HEIGHT/3}}>
            <View style={{justifyContent:'center',flexDirection:'row'}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("BiFi")}
                    style={styles.touchable}
                >
                    <Text>BiFi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Send")}
                    style={styles.touchable}
                >
                    <Text>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Token")}
                        style={styles.touchable}
                    >
                        <Text>Token</Text>
                    </TouchableOpacity>
                </View>
                {
                    wallets.size > 0 &&
                    <FlatList
                        data={Array.from(wallets)}
                        renderItem={({ item }: { item: wallet }) => {
                            return (
                                <View style={styles.walletInfo}>
                                    <Text>
                                        {item.symbol}
                                    </Text>
                                    <Text>
                                        {item.name}
                                    </Text>
                                    <Text>
                                        {item.address}
                                    </Text>
                                </View>
                            )
                        }}
                    >
                    </FlatList>
                }
            </View>
            <TouchableOpacity
                style={styles.createWallet}
                onPress={() => navigation.navigate('Auth')}
            >
                <Text style={{fontSize:20,color:'#3A86F6'}}>지갑생성</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingHorizontal:16,
        alignContent:'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    touchable : {
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'#3A86F6',
        marginHorizontal:10,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
        
    },
    createWallet : {
        width : config.WINDOW_WIDTH -32,
        height:70,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#3A86F6',
        justifyContent:"center",
        alignItems:'center',
    },
    walletInfo : {
        width : config.WINDOW_WIDTH -32,
        height:100,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#3A86F6',
        paddingHorizontal:16,
        marginVertical:10
    }
})